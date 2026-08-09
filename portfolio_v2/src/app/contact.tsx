'use client'

import { SubmitEvent, useState, useRef } from 'react';

export default function Contact() {
    const [activeSection, setActiveSection] = useState(0);

    async function onSubmit(event: SubmitEvent<HTMLFormElement>) {
        event.preventDefault()
 
        const formData = new FormData(event.currentTarget)
        const response = await fetch('/api/submit', {
            method: 'POST',
            body: formData,
        })
    
        // Handle response if necessary
        const data = await response.json()
        // ...
    }

  return (
    <section id="contactme" className="w-full py-10">
        <div className="flex flex-col items-center">
            <h1 className="font-doto text-lg">Get in touch</h1>
            
            {/* Card */}
            <form onSubmit={onSubmit} className="w-4/5 flex flex-col mt-10 gap-10">
                <div className="flex items-center justify-center gap-2 pb-6">
                    <div className={activeSection == 0 ? "w-[300px] h-1 bg-secondary" : "w-[300px] h-1 bg-foreground"}></div>
                    <div className={activeSection == 1 ? "w-[300px] h-1 bg-secondary" : "w-[300px] h-1 bg-foreground"}></div>
                    <div className={activeSection == 2 ? "w-[300px] h-1 bg-secondary" : "w-[300px] h-1 bg-foreground"}></div>
                </div>
                <p className="text-6xl font-clicker-script">First, what is your name?</p>
                <input type="text" name="name" placeholder="Name" className="w-2/5 border-b-2 border-foreground bg-transparent pb-2 pl-4 outline-none focus:border-primary"/>
                <button className="group relative flex h-14 w-[160px] items-center justify-center gap-2 overflow-hidden rounded-full bg-secondary transition-all cursor-pointer hover:bg-foreground">
                    <span className="text-background font-medium">Continue</span>
                    
                    {/* Sliding arrow effect */}
                    <div className="relative h-6 w-6 overflow-hidden">
                        <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="arrow-icon absolute inset-0 h-6 w-6 fill-background transition-transform duration-300 ease-in-out group-hover:translate-x-full"
                        >
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                        </svg>

                        <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="arrow-icon absolute inset-0 h-6 w-6 -translate-x-full fill-background transition-transform duration-300 ease-in-out group-hover:translate-x-0"
                        >
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
                        </svg>
                    </div>
                </button>
                <button type="submit" className='bg-secondary w-[150px] h-14 rounded-full hidden'>
                    <p className="text-background">Submit</p>
                </button>
            </form>
        </div>
    </section>
  );
}