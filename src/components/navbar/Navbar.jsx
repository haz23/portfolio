import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [clickedLink, setClickedLink] = useState(null);

  // Function to handle link clicks and update clickedLink state
  const handleLinkClick = (linkId) => {
    if (clickedLink === linkId) {
      // If the same link is clicked again, remove the clicked state
      setClickedLink(null);
    } else {
      // Otherwise, set the clicked state to the new link
      setClickedLink(linkId);
    }
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p
            className={clickedLink === 'home' ? 'clicked' : ''}
            onClick={() => handleLinkClick('home')}
          >
            <a href="#home">AH</a>
          </p>
          <p
            className={clickedLink === 'wgpt3' ? 'clicked' : ''}
            onClick={() => handleLinkClick('wgpt3')}
          >
            <a href="#wgpt3">About Me</a>
          </p>
          <p
            className={clickedLink === 'possibility' ? 'clicked' : ''}
            onClick={() => handleLinkClick('possibility')}
          >
            <a href="#possibility">Projects</a>
          </p>
          <p
            className={clickedLink === 'features' ? 'clicked' : ''}
            onClick={() => handleLinkClick('features')}
          >
            <a href="#features">Contacts</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p
                className={clickedLink === 'home' ? 'clicked' : ''}
                onClick={() => handleLinkClick('home')}
              >
                <a href="#home">AH</a>
              </p>
              <p
                className={clickedLink === 'wgpt3' ? 'clicked' : ''}
                onClick={() => handleLinkClick('wgpt3')}
              >
                <a href="#wgpt3">About Me</a>
              </p>
              <p
                className={clickedLink === 'possibility' ? 'clicked' : ''}
                onClick={() => handleLinkClick('possibility')}
              >
                <a href="#possibility">Projects</a>
              </p>
              <p
                className={clickedLink === 'features' ? 'clicked' : ''}
                onClick={() => handleLinkClick('features')}
              >
                <a href="#features">Contacts</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;