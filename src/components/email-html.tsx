

export function EmailTemplate({ name, email, message }: { name: string; email: string; message: string }) {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h2>New Portfolio Contact Message</h2>
      <p><strong>From:</strong> {name} ({email})</p>
      <p><strong>Message:</strong></p>
      <blockquote style={{ borderLeft: '4px solid #ccc', paddingLeft: '10px' }}>
        {message}
      </blockquote>
    </div>
  );
}