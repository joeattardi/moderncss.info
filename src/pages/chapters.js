import React from 'react';

import Layout from '../components/Layout';

import styles from './chapters.module.css';

export default function Chapters() {
  return (
    <Layout>
      <div className={styles.main}>
        <h1>Chapters</h1>
        <div className={styles.chapters}>
          <div className={styles.chapter}>
            <h2>What is CSS?</h2>
            <ul>
              <li>Anatomy of a CSS rule</li>
              <li>How CSS is used</li>
              <li>CSS resources</li>
              <li>A note on browser support</li>
            </ul>
          </div>
          <div className={styles.chapter}>
            <h2>How CSS works</h2>
            <ul>
              <li>The Document Object Model (DOM)</li>
              <li>The CSS Object Model (CSSOM)</li>
              <li>The render tree, layout, and paint</li>
            </ul>
          </div>
          <div className={styles.chapter}>
            <h2>The CSS box model</h2>
            <ul>
              <li>Box model basics</li>
              <li>Box sizing</li>
            </ul>
          </div>
          <div className={styles.chapter}>
            <h2>CSS selectors</h2>
            <ul>
              <li>Basic selector types</li>
              <li>Combining selectors</li>
              <li>Selector combinators</li>
              <li>Pseudo-classes</li>
              <li>Pseudo-elements</li>
              <li>Specificity</li>
            </ul>
          </div>
          <div className={styles.chapter}>
            <h2>Basic CSS concepts</h2>
            <ul>
              <li>Units</li>
              <li>Functions</li>
              <li>Colors</li>
              <li>Block and inline elements</li>
              <li>Overflow</li>
            </ul>
          </div>
          <div className={styles.chapter}>
            <h2>Basic styling</h2>
            <ul>
              <li>Global keywords</li>
              <li>Multiple values</li>
              <li>Borders</li>
              <li>Backgrounds</li>
              <li>Gradients</li>
              <li>Box shadows</li>
              <li>Opacity</li>
              <li>Hiding elements</li>
            </ul>
          </div>
          <div className={styles.chapter}>
            <h2>Text styling</h2>
            <ul>
              <li>Fonts</li>
              <li>Basic text styling</li>
              <li>Text layout</li>
              <li>Using web fonts</li>
              <li>Text shadow</li>
            </ul>
          </div>
          <div className={styles.chapter}>
            <h2>CSS variables</h2>
            <ul>
              <li>Using variables</li>
              <li>Changing variables at runtime</li>
            </ul>
          </div>
          <div className={styles.chapter}>
            <h2>Layout and positioning</h2>
            <ul>
              <li>Padding and margin</li>
              <li>Width and height</li>
              <li>Positioning elements</li>
              <li>Z-index and stacking contexts</li>
              <li>Floats</li>
            </ul>
          </div>
          <div className={styles.chapter}>
            <h2>Transforms</h2>
            <ul>
              <li>Perspective</li>
              <li>Rotation</li>
              <li>Translation</li>
              <li>Scaling</li>
              <li>Skewing</li>
              <li>Applying multiple transforms</li>
              <li>Example: Making a heart with CSS</li>
              <li>Example: Making a cube with CSS</li>
            </ul>
          </div>
          <div className={styles.chapter}>
            <h2>Transitions and animations</h2>
            <ul>
              <li>Transitions</li>
              <li>Animations</li>
              <li>Performance implications</li>
              <li>JavaScript events</li>
              <li>Other tips</li>
            </ul>
          </div>
          <div className={styles.chapter}>
            <h2>Flexbox</h2>
            <ul>
              <li>Basic concepts</li>
              <li>A basic flex layout</li>
              <li>Sizing</li>
              <li>Alignment and spacing</li>
              <li>Ordering</li>
              <li>Examples</li>
              <li>Flexbox cheat sheet</li>
            </ul>
          </div>
          <div className={styles.chapter}>
            <h2>Responsive design</h2>
            <ul>
              <li>Media query basics</li>
              <li>The viewport meta tag</li>
              <li>Breakpoints</li>
              <li>Responsive layouts with flexbox</li>
              <li>Fluid typography</li>
              <li>Adapting a layout with media queries</li>
            </ul>
          </div>
          <div className={styles.chapter}>
            <h2>CSS Grid</h2>
            <ul>
              <li>Basic concepts</li>
              <li>Basic grids</li>
              <li>Grid sizing</li>
              <li>Grid positioning</li>
              <li>Grid flow</li>
              <li>Alignment</li>
              <li>Grid cheat sheet</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
