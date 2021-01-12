import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Pinyon Script', 'cursive']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();





