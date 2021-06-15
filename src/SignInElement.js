import Classes from './SignInElement.module.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import exclamationmark from './exclamation-mark.png'
import { useState } from 'react'

const SignInElement=()=>{

    const [email , setEmail] = useState(true)
    const [pswd , setPswd] = useState(true)
    const [cpswd , setCpswd] = useState(true)
    const [name , setName] = useState(true)

    const onSignInClick=()=>{
       
        let obj1 = document.getElementById('input1');
        let obj2 = document.getElementById('input2');
        let obj3 = document.getElementById('input3');
        
         
            var obj = {
                name : obj1.value,
                email : obj2.value,
                password : obj3.value
            }
            axios.post('http://localhost:5000/Signup' , obj)
            .then(response => {
                console.log(response.data);
                window.alert('Sign In Successfull . Redirecting To Log In Page !')
            })
            .catch(err => console.log(err))
      
       
        
    }
   const onEmailChange=(event)=>{
        const value = event.target.value;
        const pattern = /\S+@\S+\.\S+/;
        const test = pattern.test(value);
        if(test){
          document.getElementById("emailAlert").style.display = "none"
          setEmail(false)
        }
        else{
          document.getElementById("emailAlert").style.display = "flex"
          setEmail(true)
        }
      }

    const onPswdChange=(event)=>{
        
        if(event.target.value.length < 6)
        {
            document.getElementById("pswdAlert").style.display = "flex"
            setPswd(true)
        }
        else{
            document.getElementById("pswdAlert").style.display = "none"
            setPswd(false)
        }
    }
    const onCPswdChange=(event)=>{
        const pswd = document.getElementById('input3').value;
       // console.log(pswd + " " + event.target.value)
        if(event.target.value != pswd)
        {
            document.getElementById("cpswdAlert").style.display = "flex"
            setCpswd(true)
        }
        else{
            document.getElementById("cpswdAlert").style.display = "none"
            setCpswd(false)
        }
    }
    const onNameChange=(event)=>{
        if(event.target.value.length > 0)
        {
            setName(true)
            document.getElementById('nameAlert').style.display = "none"
        }
        else{
            setName(false);
            document.getElementById('nameAlert').style.display = "flex"
        }
    }
    return(
        <div className={Classes.SigninMenu}>
            <h1>SIGN UP</h1>
            <div className={Classes.elements}>
                         <div className={Classes.emailAlert} id="nameAlert">
                          <img src={exclamationmark} style={{width:'5vh',height:'5vh'}}></img>
                          <h1>Enter Your Name</h1>
                        </div>
                         <input id="input1" type="text" onChange={onNameChange} placeholder="Enter Name"></input>
                         <div className={Classes.emailAlert} id="emailAlert">
                          <img src={exclamationmark} style={{width:'5vh',height:'5vh'}}></img>
                          <h1>Enter A Valid Email Address</h1>
                        </div>
                        <input onChange={onEmailChange} id="input2" type="email" placeholder="Enter Email Id"></input>
                        <div className={Classes.emailAlert} id="pswdAlert">
                          <img src={exclamationmark} style={{width:'5vh',height:'5vh'}}></img>
                          <h1>Password Must Be Atleast 6 Characters Long</h1>
                        </div>
                        <input id="input3" onChange={onPswdChange} type="password" placeholder="Enter Password"></input>
                        <div className={Classes.emailAlert} id="cpswdAlert">
                          <img src={exclamationmark} style={{width:'5vh',height:'5vh'}}></img>
                          <h1>Passwords Do Not Match</h1>
                        </div>
                        <input type="password" onChange={onCPswdChange} placeholder="Confirm Password"></input>
                        
                      
                        <Link to='/'><button onClick={onSignInClick} disabled={name || email || pswd || cpswd} className={Classes.btn}>Sign Up</button></Link>
                      
            </div>
            
                    
         </div>
    )
}

export default SignInElement;