import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';

//ReactDOM.render(<App/>,document.querySelector("#root"));

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);//for type script
root.render(<App/>);


