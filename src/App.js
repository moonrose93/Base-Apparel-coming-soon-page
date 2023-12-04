import hero from '../src/hero-desktop.jpg';
import logo from '../src/logo.svg';
import arrow from '../src/icon-arrow.svg';
import { useState } from 'react';
import './App.css';
import MobileApp from './MobileApp';



function App() {
  const [email, setEmail] = useState("");
  const [isFocused, setFocused] = useState(false);


  const isMobile= window.innerWidth <= 420;

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div className="App">
      {isMobile ? (
        <MobileApp/> 
      ):(
        <>
      <div className='left'>
        <img style={{ position: 'absolute', top: '-150px', left: '-10px', width: '200px' }} src={logo} alt="New logo" />
        <h1 style={{ position: 'absolute', top: '-90px', fontFamily: 'sans-serif', textTransform: 'uppercase', fontWeight: '300', fontSize: '5rem', letterSpacing: '1rem', color: 'rgb(253, 149, 149)' }}> We're</h1>
        <h1 style={{ fontFamily: 'sans-serif', textTransform: 'uppercase', fontWeight: '400', lineHeight: '6.5rem', fontSize: '6rem', letterSpacing: '1rem' }} >coming<br /> soon</h1>
        <p style={{ fontSize: '1.2rem', color: 'rgb(253, 149, 149)', position: 'relative', bottom: '20px', fontWeight: '400', letterSpacing: '0.06rem', lineHeight: '2rem' }}> Hello fellow shoppers! We're currently building our new<br />fashion store.
          Add your email below to stay up-to-date with<br /> announcements and our launch deals.</p>
        <div style={{ display: 'flex' }}>
          <input
            value={email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              padding: '20px',
              width: '450px',
              borderRadius: '40px',
              fontSize: '1.5rem',
              border: `1px solid ${isFocused ? 'red' : 'gray'}`,
              outline:'none'
            }}
          />
          <button style={{ padding: '20px 70px', borderRadius: '50px', border: 'none', backgroundColor: 'rgb(221, 157, 168)', position: 'relative', right: '50px', cursor: 'pointer' }}><img src={arrow} /></button>
        </div>
      </div>

      <div className='right'>
        <img className='img-right' src={hero} alt="Background Image" />
      </div>
      </>
      )
    }
    </div>
  );
}

export default App;
