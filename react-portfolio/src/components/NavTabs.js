import React from 'react';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <header>
      <h1>Chandler Davis</h1>
      <ul className="nav">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default NavTabs;
