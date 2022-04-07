import logo from './logo.svg';
import './App.css';
import List from "./Day 1/List";
import JoinUs from "./Day 1/JoinUs";
import Settings from "./Day 1/Settings"

function App() {
  return (
    <div className="App">
      <h1>Mobile Operating system</h1>
      <List m1="Android" m2="Blackberry" m3="iPhone" m4="Windows Phone"/>
      <h1>Mobile Manufacturers</h1>
      <List v1="Samsung" v2="HTC" v3="Apple" v4="Oneplus"/>
    </div>
  );
}

function App1() {
  return (
    <div className="App1">
       <div className="b1"><a href="JoinUs.html"><JoinUs header="Join Us"/></a></div>
       <div className="b2"> <a href="Settings.html"><Settings header="Settings"/></a></div>
       <div className="b3"> <a href="Login.html"><Settings header="Login"/></a></div>
       <div className="b4"> <a href="Contact.html"><Settings header="Contact"/></a></div>
       <div className="b5"> <a href="Search.html"><Settings header="Search"/></a></div>
       <div className="b6"> <a href="Help.html"><Settings header="Help"/></a></div>
       <div className="b7"> <a href="Home.html"><Settings header="Home"/></a></div>
       <div className="b8"> <a href="Download.html"><Settings header="Download"/></a></div>
     </div>
      
  );
}


export {App,App1}
