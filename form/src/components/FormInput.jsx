import "./formInput.css";

const FormInput = (props) => {
  return (
    <div className="formInput"> 
    <input placeholder={props.placeholder}/>
  </div>
  )

};
export default FormInput;