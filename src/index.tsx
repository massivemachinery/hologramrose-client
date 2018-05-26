import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
// import registerServiceWorker from './registerServiceWorker';
// import setFavicon from './utils/favicon';

// Create a favicon and add it to the DOM
// Rose is the color halfway between red and magenta on the HSV color wheel, also known as the RGB
// color wheel, on which it is at hue angle of 330 degrees.
// https://en.wikipedia.org/wiki/Rose_(color)
// setFavicon('#ff007f', 64);

console.log('new version');

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);
// registerServiceWorker();
