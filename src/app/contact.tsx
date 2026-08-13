'use client'

import { useState, SubmitEvent, KeyboardEvent } from 'react';

const STEPS = [
  { id: 0, label: "First, what's your name?", name: 'name', type: 'text', placeholder: 'John Doe' },
  { id: 1, label: "What's your email address?", name: 'email', type: 'email', placeholder: 'john@example.com' },
  { id: 2, label: "How can I help you?", name: 'message', type: 'textarea', placeholder: 'Tell me about your project...' },
];

export default function Contact() {
    const [activeStep, setActiveStep] = useState(0);
    const [response, setResponse] = useState("");
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isLastStep = activeStep === STEPS.length - 1;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleNext = () => {
        const currentFieldName = STEPS[activeStep].name as keyof typeof formData;
        if (!formData[currentFieldName].trim()) return; // Prevent advancing if empty

        if (!isLastStep) {
            setActiveStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prev) => prev - 1);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            const isTextArea = e.currentTarget.tagName === 'TEXTAREA';

            // If it's a textarea, only proceed if Ctrl or Cmd is held down (so plain Enter creates a newline)
            if (isTextArea && !e.ctrlKey && !e.metaKey) {
                return;
            }

            e.preventDefault(); // Stop default form submit behavior on non-final steps

            if (!isLastStep) {
                handleNext();
            } else {
                // Trigger explicit form submit if on the last step
                e.currentTarget.form?.requestSubmit();
            }
        }
    };

    async function onSubmit(event: SubmitEvent) {
        event.preventDefault();
        setIsSubmitting(true);
        setResponse("");

        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
                if (!res.ok) {
                // Handle Zod or Brevo errors sent from the server
                const errorMsg = data.details?.email?.[0] 
                    || data.error 
                    || 'Something went wrong';
                setResponse(`Error: ${errorMsg}`);
                return;
            }
            setResponse('Submitted successfully!');
            setFormData({ name: '', email: '', message: '' });
            setActiveStep(0);
        } catch (error) {
            setResponse('Submission failed. Please check your connection.');
            console.error('Submission failed:', error);
        } finally {
            setIsSubmitting(false);
        }
    }

    const currentStepData = STEPS[activeStep];

    return (
        <section id="contactme" className="w-full py-10">
            <div className="flex flex-col items-center">
                <h1 className="font-doto text-lg">Get in touch</h1>
                
                {/* Card */}
                <form onSubmit={onSubmit} className="w-4/5 flex flex-col mt-10 gap-10">
                    {/* Step indicator */}
                    <div className="flex items-center justify-center gap-2 pb-6">
                        {STEPS.map((step) => (
                            <div
                                key={step.id}
                                className={`h-1 w-full max-w-[200px] transition-colors duration-300 ${
                                    activeStep >= step.id ? 'bg-secondary' : 'bg-foreground'
                                }`}
                            />
                        ))}
                    </div>

                    {/* Current step input */}
                    <div className="flex flex-col gap-6">
                        <p className="font-clicker-script text-6xl">{currentStepData.label}</p>

                        {currentStepData.type === 'textarea' ? (
                            <div className="flex flex-col gap-2">
                                <textarea
                                    name={currentStepData.name}
                                    placeholder={currentStepData.placeholder}
                                    value={formData[currentStepData.name as keyof typeof formData]}
                                    onChange={handleInputChange}
                                    onKeyDown={handleKeyDown}
                                    rows={4}
                                    required
                                    autoFocus
                                    className="w-full border-b-2 border-foreground bg-transparent pl-4 pb-2 outline-none focus:border-primary"
                                />
                                <span className="text-xs text-foreground/50 pl-4">
                                Press <kbd className="font-sans px-1 bg-foreground/10 rounded">Ctrl</kbd> + <kbd className="font-sans px-1 bg-foreground/10 rounded">Enter</kbd> to submit
                                </span>
                            </div>
                        ) : (
                            <input
                                type={currentStepData.type}
                                name={currentStepData.name}
                                placeholder={currentStepData.placeholder}
                                value={formData[currentStepData.name as keyof typeof formData]}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                required
                                className="w-2/5 border-b-2 border-foreground bg-transparent pl-4 pb-2 outline-none focus:border-primary"
                            />
                        )}
                    </div>

                    {/* Response handling */}
                    <p className="text-secondary">{response}</p>

                    {/* Controls */}
                    <div className="flex items-center gap-4">
                        {activeStep > 0 && (
                        <button
                            type="button"
                            onClick={handleBack}
                            className="text-foreground hover:underline"
                        >
                            Back
                        </button>
                        )}

                        {!isLastStep ? (
                            <button
                                type="button"
                                onClick={handleNext}
                                className="group relative flex h-14 w-[160px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-secondary transition-all hover:bg-foreground"
                            >
                                <span className="text-background font-medium">Continue</span>
                                <div className="relative h-6 w-6 overflow-hidden">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="arrow-icon absolute inset-0 h-6 w-6 fill-background transition-transform duration-300 ease-in-out group-hover:translate-x-full"
                                >
                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                </svg>
                                <svg
                                    viewBox="0 0 24 24"
                                    className="arrow-icon absolute inset-0 h-6 w-6 -translate-x-full fill-background transition-transform duration-300 ease-in-out group-hover:translate-x-0"
                                >
                                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                                </svg>
                                </div>
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="h-14 w-[150px] rounded-full bg-secondary text-background transition-all hover:bg-foreground disabled:opacity-50"
                            >
                                {isSubmitting ? 'Sending...' : 'Submit'}
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}