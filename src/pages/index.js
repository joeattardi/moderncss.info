import React from 'react';
import { OutboundLink } from 'gatsby-plugin-gtag';

import Layout from '../components/Layout';

import cover from '../images/cover.png';
import joe from '../images/joe.jpeg';

import styles from './index.module.css';

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <div className={styles.intro}>
          <h1>CSS made easy</h1>
          <p>
            Whether you're learning CSS for the first time, or looking for a
            refresher, Modern CSS has something for everyone.
          </p>
          <p>
            You don't have to be afraid of CSS. This book will teach you
            everything you need to know to get started styling, animating, and
            laying out your pages with CSS.
          </p>
          <div className={styles.callToAction}>
            <OutboundLink href="https://leanpub.com/modern-css">Buy now from Leanpub</OutboundLink>
            <a href="/modern-css-sample.pdf">Sample chapter</a>
          </div>
        </div>
        <img src={cover} />
      </div>
      <div className={styles.description}>
        <h1>About the book</h1>
        <p>
          A lot of developers are intimidated by CSS. While it is true that CSS
          is a complicated topic, we can approach it step by step and gain
          mastery over it.
        </p>
        <p>
          This book is a tour of modern CSS. It starts with the basic,
          fundamental concepts like the box model, specificity, selectors,
          colors, and units. Once you have a solid foundation, we move on to
          basic styling - text, backgrounds, borders, sizing, and more. As this
          book is about modern CSS, we will also cover transitions and
          animations. Finally, we will also cover CSS layout topics - floats,
          Flexbox, and CSS Grid.
        </p>

        <p>
          Every concept is accompanied by code examples, and a screenshot of how
          the example is rendered in a browser.
        </p>

        <p>
          Modern CSS is aimed at beginners, or experienced developers who need a
          CSS refresher.
        </p>
      </div>
      <div className={styles.author}>
        <h1>About the author</h1>
        <img src={joe} />

        <h2>Joe Attardi</h2>

        <p>
          I have been developing software professionally since 2004, working at
          companies such as Nortel, Dell, Constant Contact, and Salesforce.
        </p>

        <p>
          For many years, I was squarely in the Java camp, and JavaScript was an
          afterthought. Over the years, I became more interested in frontend
          development, and started using JavaScript more and more.
        </p>

        <p>
          In 2015 I took a job at Constant Contact doing only front-end
          development. Since then, I haven't looked back. JavaScript is my
          primary area of expertise now. I have worked with several JavaScript
          frameworks (though I may not remember how to use all of them off the
          top of my head!) such as Angular, React, Svelte, and Vue.
        </p>

        <p>I live in the Boston area with my wife, son, and two cats.</p>

        <p>
          You can find my web site at{' '}
          <a href="https://joeattardi.codes">https://joeattardi.codes</a>, and
          you can find me on Twitter at{' '}
          <a href="https://twitter.com/joeattardi">@JoeAttardi</a>. My email
          address is <a href="mailto:jattardi@gmail.com">jattardi@gmail.com</a>.
        </p>
      </div>
    </Layout>
  );
}
