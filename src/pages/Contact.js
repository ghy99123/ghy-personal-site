import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Hanyi Gao via email @ ghy2941879036@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        <a href="mailto:ghy2941879036@gmail.com">ghy2941879036@gmail.com</a>
        <p>My phone number: +61 0478382679</p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
