import { App } from './components/App.jsx';

if (location.protocol === "http:") {
  location.replace(
    `https:${location.href.substring(location.protocol.length)}`
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
