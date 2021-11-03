import "./app.css";
import { useState } from "react";
import FormInput from "./components/FormInput";

const App = () => {
  const[username, setUsername]= useState("");
  return <div className="App"> 
  <form>
   <FormInput placeholder="Username" setUsername/>
   <FormInput placeholder="Email"/>
   <FormInput placeholder="Full Name"/>
   <FormInput placeholder="password"/>
  </form>
  </div>;

};
export default App;