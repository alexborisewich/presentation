import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm';
import './style.css';

const deck = new Reveal({
  plugins: [Markdown],
});
deck.initialize();
