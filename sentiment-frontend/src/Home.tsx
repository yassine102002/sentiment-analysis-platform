import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instagramLogo from './assets/instagram.svg';
import facbookLogo from './assets/facebook.svg';
import xLogo from './assets/x.svg';
import Logo from './assets/icons/logo.png';
import video from './assets/video/home-p.mp4';

const Home: React.FC = () => {
  const [link, setLink] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAnalyze = async () => {
    if (!link) {
      alert('Please paste a link to analyze!');
      return;
    }setIsLoading(true);
    try {
      // Simulate API validation if needed
      setTimeout(() => {
        navigate('/dashboard', { state: { link } }); // Pass link to Dashboard
      }, 1000);
    } catch (error) {
      console.error('Error analyzing the link:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="page homepage vh-90">
      <video src={video} autoPlay muted loop id="myVideo">
      </video>
    <div className="home-container container my-5">
      <img src={Logo} alt="" className='logoofpage' />
      <div className="row justify-content-center mt-5">

          <div className="input-group mb-3 link-input">
            <input
              type="text"
              className="form-control"
              placeholder="Paste a link here (Facebook, Twitter, Instagram)"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <button className="button bar-color text-white" onClick={handleAnalyze}>
            {isLoading ? 'Analyzing...' : 'Analyze'}
            </button>
          </div>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <img src={instagramLogo} className="logo socialmedia" alt="" />
        <img src={facbookLogo} className="logo socialmedia" alt="" />
        <img src={xLogo} className="logo socialmedia" alt="" />
      </div>
    </div>
    </div>
  );
};

export default Home;
