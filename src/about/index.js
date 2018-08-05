import React from "react";

import "./about.css";

export default function AboutPage({ goBack }) {
  return (
    <div className="app-wrapper dimmer">
      <h1>About me</h1>
      <article className="about-me-content">
        <p>Ohh haii!</p>

        <p>
          I am Rajat Jain. I hail from a beautiful small town, Udaipur in India.
          I am an undergraduate in my final semester, pursuing B.Tech in
          Computer Science and Engineering.
        </p>

        <p>I am a total introvert. A minimalist. I like to code, a lot.</p>

        <p>
          Things that I love in no particular order are: Books -- Absolute Love.
          Music -- My escape from this molecular world. Astronomy -- I think I
          can talk about stars, galaxy, dark matter, supernovas and black holes
          for eternity and back. Caffiene - Well, I am ashamed. Python -- Pure
          Love. Einstein's hypothesized Gravitational Waves were detected using
          this language! Little Small things in UIs -- Spitting image of Steve
          Jobs in this area.
        </p>

        <p>
          Things I wish I can do more of: Write -- C'mon just type a little more
          you laz-. Travel -- Seriously. This one.Exercise -- Well, well.
        </p>

        <p>
          If you want to talk about any opportunity or just want to say 'Hi',
          drop a message.
        </p>
      </article>
    </div>
  );
}
