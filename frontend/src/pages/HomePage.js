import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #232526 0%, #414345 100%)',
      color: '#fff',
      fontFamily: 'Montserrat, sans-serif',
      animation: 'fadeIn 1.2s cubic-bezier(0.23, 1, 0.32, 1)',
      position: 'relative',
      boxSizing: 'border-box',
      padding: 0,
      margin: 0
    }}>
      <div style={{
        width: '100%',
        maxWidth: 650,
        minHeight: '70vh',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 32,
        background: 'rgba(0,0,0,0.22)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        padding: '3vw 2vw',
      }}>
        <img
          src="https://cdn.pixabay.com/photo/2017/01/06/19/15/auto-1957037_1280.png"
          alt="Car Illustration"
          style={{ width: 'min(220px, 60vw)', marginBottom: 32, filter: 'drop-shadow(0 4px 24px #ffb34788)' }}
        />
        <h1 style={{ fontSize: '2.6rem', fontWeight: 800, letterSpacing: 2, marginBottom: 18, lineHeight: 1.1 }}>
          Welcome to <span style={{ color: '#ffb347', textShadow: '0 2px 12px #ffb34755' }}>Cars Collection</span> Website
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#bdbdbd', marginBottom: 40, lineHeight: 1.5, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto' }}>
          Explore the world's finest cars, from supercars to classics, electrics, and concepts. Start your journey now!
        </p>
        <Link to="/dashboard" style={{
          display: 'inline-block',
          marginTop: 0,
          padding: '18px 48px',
          background: 'linear-gradient(90deg, #ffb347 0%, #ffcc80 100%)',
          color: '#232526',
          borderRadius: 32,
          fontWeight: 700,
          textDecoration: 'none',
          fontSize: '1.25rem',
          letterSpacing: 1,
          boxShadow: '0 4px 24px #ffb34755',
          transition: 'transform 0.18s, box-shadow 0.18s',
          maxWidth: '100%',
          minWidth: 200
        }}
        onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.07)'; e.currentTarget.style.boxShadow = '0 8px 32px #ffb34788'; }}
        onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 24px #ffb34755'; }}
        >
          Go to Dashboard
        </Link>
      </div>
      <div style={{
        position: 'fixed',
        right: 24,
        bottom: 16,
        color: '#bdbdbd',
        fontSize: '1rem',
        opacity: 0.85,
        letterSpacing: 1,
        zIndex: 10
      }}>
        Developed by <span style={{ color: '#ffb347', fontWeight: 600 }}>Ranbir Singh</span>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default HomePage;
