import heromobile from '../src/hero-mobile.jpg';
import logo from '../src/logo.svg';
import arrow from '../src/icon-arrow.svg';
import { useState } from 'react';
import './Mobile.css';
function MobileApp() {
  const [email, setEmail] = useState("");
  const [isFocused, setFocused] = useState(false);

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
    <div className="MobileApp">
      <div className='left-mobile'>
        <img style={{ position:'relative', right:'80px' }} src={logo} alt="New logo" />
        </div>
        
     <div className='middle'>
     <img className='img-right-mobile' src={heromobile} alt="Background Image" />
     <h1 style={{ fontFamily: 'sans-serif', textTransform: 'uppercase', fontWeight: '300', fontSize: '3rem', letterSpacing: '1rem', color: 'rgb(253, 149, 149)' }}> We're</h1>
        <h1 style={{ fontFamily: 'sans-serif', textTransform: 'uppercase', fontWeight: '400', lineHeight: '4rem', fontSize: '3rem', letterSpacing: '0.20rem', marginTop:'-20px' }} >coming<br /> soon</h1>
        <p style={{ fontSize: '1rem', color: 'rgb(253, 149, 149)', position: 'relative', bottom: '20px', fontWeight: '400', letterSpacing: '0.06rem', lineHeight: '2rem' }}> Hello fellow shoppers! We're currently building<br/>our new fashion store.
          Add your email below to<br/>stay up-to-date with announcements and our<br/> launch deals.</p>
          <div  >
          <input 
            value={email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              padding: '10px',
              width: '320px',
              borderRadius: '40px',
              fontSize: '1.5rem',
              border: `1px solid ${isFocused ? 'red' : 'gray'}`,
              outline:'none'
            }}
          />
          <button style={{ padding: '20px 30px', borderRadius: '50px', border: 'none', backgroundColor: 'rgb(221, 157, 168)', position: 'absolute', bottom:'-5px', right: '20px', cursor: 'pointer' }}><img src={arrow} /></button>
          </div>
     
      </div>

    </div>
  );
}

export default MobileApp;
