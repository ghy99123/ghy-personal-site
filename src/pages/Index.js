import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Hanyi Gao's personal website. Unimelb IT graduate student."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            {' '}
            Welcome to my website. Please feel free to check out my{' '}
            <Link to="/resume">resume</Link> and my{' '}
            <Link to="/projects">projects</Link>. If you can read Chinese, you
            can also view my{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="http://blog.ghyyy.top/"
            >
              posts
            </a>
            . My contact details are <Link to="/contact">here</Link>.
          </p>
        </div>
      </header>
      <p>
        Hello, I&apos;m Hanyi! I am currently an IT graduate student at{' '}
        <a href="https://www.unimelb.edu.au/">the University of Melbourne</a>.
        Before that, I did my bachelor degree at{' '}
        <a href="http://admissions.swu.edu.cn/">Southwest University</a>. I have
        had 3 terms of internship at <a href="https://skand.io/">Skand</a>,{' '}
        <a href="https://www.ximalaya.com/">Ximalaya FM</a> and{' '}
        <a href="https://www.lvanitech.com/">LvAn Tech, Ltd.</a> as fullstack
        developer, frontend developer, and mobile developer respectively.
      </p>
      <p>
        In my spare time, I like playing football and board games. Back to when
        I was at home in China, I also played the piano as a way of relaxation
        (although my piano skill sucks😅) and enjoyed the karaoke time if I went
        to KTV (I am a Jay Chou fan). I love 🐱 and 🐶. However, I am kind of
        allergic to cats.
      </p>
    </article>
  </Main>
);

export default Index;
