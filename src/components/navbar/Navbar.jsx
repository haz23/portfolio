import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
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
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_container">
          <p
            className={clickedLink === 'home' ? 'clicked' : ''}
            onClick={() => handleLinkClick('home')}
          >
            <a href="#home">AH</a>
          </p>
          <p
            className={clickedLink === 'skills' ? 'clicked' : ''}
            onClick={() => handleLinkClick('skills')}
          >
            <a href="#skills">Skills</a>
          </p>
          <p
            className={clickedLink === 'educations' ? 'clicked' : ''}
            onClick={() => handleLinkClick('educations')}
          >
            <a href="#educations">Education</a>
          </p>
          <p
            className={clickedLink === 'projects' ? 'clicked' : ''}
            onClick={() => handleLinkClick('projects')}
          >
            <a href="#projects">Projects</a>
          </p>
          <p
            className={clickedLink === 'contacts' ? 'clicked' : ''}
            onClick={() => handleLinkClick('contacts')}
          >
            <a href="#contacts">Contacts</a>
          </p>
        </div>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
            <p
            className={clickedLink === 'home' ? 'clicked' : ''}
            onClick={() => handleLinkClick('home')}
          >
            <a href="#home">AH</a>
          </p>
          <p
            className={clickedLink === 'skills' ? 'clicked' : ''}
            onClick={() => handleLinkClick('skills')}
          >
            <a href="#skills">Skills</a>
          </p>
          <p
            className={clickedLink === 'educations' ? 'clicked' : ''}
            onClick={() => handleLinkClick('educations')}
          >
            <a href="#educations">Education</a>
          </p>
          <p
            className={clickedLink === 'projects' ? 'clicked' : ''}
            onClick={() => handleLinkClick('projects')}
          >
            <a href="#projects">Projects</a>
          </p>
          <p
            className={clickedLink === '' ? 'clicked' : ''}
            onClick={() => handleLinkClick('')}
          >
            <a href="#contacts">Contacts</a>
          </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;