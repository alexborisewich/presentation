import Reveal from 'reveal.js';
import hljs from 'reveal.js/plugin/highlight/highlight';
import './style.css';

const deck = new Reveal({
  plugins: [hljs],
});
deck.initialize();
