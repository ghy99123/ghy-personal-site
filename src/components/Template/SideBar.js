import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/profile.png`} alt="" />
      </Link>
      <header>
        <h2>Hanyi Gao</h2>
        <p>
          <a href="mailto:ghy2941879036@gmail.com">ghy2941879036@gmail.com</a>
        </p>
      </header>
    </section>
    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
