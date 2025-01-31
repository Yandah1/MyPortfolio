import React from 'react';

const EmailTemplate = ({ firstName, email, message, footerNote }) => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.5', color: '#333' }}>
      <div
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
        }}
      >
        <h2 style={{ color: '#278dd6' }}>Welcome, {firstName}!</h2>
        <p>{message}</p>
        <p>
          I am excited to have you here. Please feel free to contact me at{' '}
          <a href={`mailto:${email}`} style={{ color: '#278dd6', textDecoration: 'none' }}>
            {email}
          </a>.
        </p>
        <footer style={{ marginTop: '20px', fontSize: '0.9em', color: '#666' }}>
          <p>{footerNote}</p>
        </footer>
      </div>
    </div>
  );
};

export default EmailTemplate;
