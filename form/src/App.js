import "./app.css";
import FormInput from "./components/FormInput";

const App = () => {
  return <div className="App"> 
  <form>
   <FormInput placeholder="Username"/>
   <FormInput placeholder="Email"/>
   <FormInput placeholder="Full Name"/>
   <FormInput placeholder="password"/>

  </form>
  </div>;

};
export default App;