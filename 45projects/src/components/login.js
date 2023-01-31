import React,{useState} from "react";
import './login.css';


 function Login() {
    const [value,setValue]=useState({
        firstName:"",
        lastName:"",
        email:"",
    });
    const [submitted, setSubmitted] = useState(false);
    const [valid,setValid] = useState(false);
    const handleFirstNameInputChange=(event)=>{
        setValue({...value,firstName:event.target.value})
    }
   const handleLastNameInputChange=(event)=>{
    setValue({...value,lastName:event.target.value})
   }
   const handleEmailInputChange=(event)=>{
    setValue({...value,email:event.target.value})
   } 
   const handleSubmit = (event)=>{
    event.preventDefault();//prevent refreshing
    if(value.firstName && value.lastName && value.email){
        setValid(true);
    }
    setSubmitted(true);
   }  
  return (
    <div>
      <form className="register-form" onSubmit={handleSubmit}>
     {submitted && valid ? <div className="success-form" >Success! Thanks you for register</div> : null} 
        <input
        disabled={submitted}
        onChange={handleFirstNameInputChange}
        value={value.firstName}
         type="text"
        placeholder="first name"
        className="first-name" />
       {submitted && !value.firstName ? <span>Please Enter a first Name</span> : null } 
        <input 
         disabled={submitted}
        onChange={handleLastNameInputChange}
        value={value.lastName}
        type="text"
         placeholder="last Name"
         className="last-name" />
         {submitted && !value.lastName ? <span>Please Enter a last Name</span> : null}
         <input 
          disabled={submitted}
         onChange={handleEmailInputChange}
         value={value.email}
         type="email"
         placeholder="email"
         className="email" />
         {submitted && !value.email ? <span>Please Enter a email</span> : null }
         <button type="submit"  className="but" >Register</button> 
      </form>
    </div>
  )
}
export default Login;