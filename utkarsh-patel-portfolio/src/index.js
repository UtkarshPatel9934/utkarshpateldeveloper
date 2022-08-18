import ReactDOM from 'react-dom'; // inporting React DOM
import AppComponent from './App' // importing app component in this file
import './index.css' // importing the styles 



// render the app component in the public/index.html file inside the specific div with id = root
ReactDOM.render(<AppComponent/>, document.querySelector("#root"));