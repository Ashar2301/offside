import {Component} from 'react'
import Classes from './LogInElement.module.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import exclamationmark from './exclamation-mark.png'
import {withRouter} from 'react-router-dom'
 class LogInElement extends Component{

  auth2Obj;
  state={
    disabled : true,
    allowGSignIn : false
  }
    insertGapiScript() {
        const script = document.createElement('script')
        script.src = 'https://apis.google.com/js/api.js'
        script.onload = () => {
          this.initializeGoogleSignIn()
        }
        document.body.appendChild(script)
      }
    
      initializeGoogleSignIn() {
        window.gapi.load('auth2', () => {
          this.auth2Obj=window.gapi.auth2.init({
            client_id: '931051935319-3hp7ld6806ars1lmrk9adrji87ramadf.apps.googleusercontent.com'
          })
          console.log('Api inited')
          window.gapi.load('signin2', () => {
            const params = {
              onsuccess: () => {
                if(this.state.allowGSignIn){
                  console.log('User has finished signing in!')
                let  guser = this.auth2Obj.currentUser.get();
                console.log(guser)
               let basic = guser.getBasicProfile();
               localStorage.setItem("currentUser" , basic.getName())
               localStorage.setItem("currentUserEmail" , basic.getEmail())
               var obj = {
                name : basic.getName(),
                email : basic.getEmail(),
                password : 'nopswd'
            }
               axios.post('http://localhost:5000/google',obj)
               .then(respo => {
                console.log(respo);
                //window.location.replace("http://localhost:3000/home");
                const { history } = this.props;
                if(history) history.push('/home');
                window.location.reload();
               })
               .catch(err =>console.log(err))
               
        .catch(err => console.log(err))
               console.log(basic.getImageUrl())
                }
              },
              'width': 240,
              'height': 50,
              'longtitle': true,
              'theme': 'dark',
            }
            window.gapi.signin2.render('googleLoginButton', params)
          })
        })
      }
    
      componentDidMount() {
        console.log('Loading')
        this.insertGapiScript();
      }

      onLogInClick=()=>{
        //window.location.reload();
        let obj1 = document.getElementById('input1');
        let obj2 = document.getElementById('input2');
        //console.log(obj1.value)
        
        console.log(this.auth2Obj.isSignedIn.get())
        axios.get('http://localhost:5000/' , {
            params:{
                email : obj1.value ,
                password : obj2.value
            }
        })
        .then(response =>{
            if(response.data.length > 0){
                localStorage.setItem("currentUser" , response.data[0].name);
                localStorage.setItem("currentUserEmail" , response.data[0].email);
                console.log(response.data[0]);
               // window.location.replace("http://localhost:3000/home");
                const { history } = this.props;
                if(history) history.push('/home');
                window.location.reload();
                
            }
            else{
                window.alert("USERNAME OR PASSWORD DO NOT MATCH!!")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    isGoogleSignedIn=()=>{
      console.log(this.auth2Obj.signOut())
      this.setState({allowGSignIn : true})
    }
    onEmailChange=(event)=>{
      const value = event.target.value;
      const pattern = /\S+@\S+\.\S+/;
      const test = pattern.test(value);
      if(test){
        document.getElementById("alert").style.display = "none"
        this.setState({disabled:false})
      }
      else{
        document.getElementById("alert").style.display = "flex"
        this.setState({disabled:true})
      }
    }
    exportAuth2Obj=()=>{
      return this.auth2Obj;
    }
    render(){
        return(
            <div className={Classes.SigninMenu}>
                      <h1>LOG IN</h1>
                      <div className={Classes.elements}>
                        <div className={Classes.alert} id="alert">
                          <img src={exclamationmark} style={{width:'5vh',height:'5vh'}}></img>
                          <h1>Enter A Valid Email Address</h1>
                        </div>
                        <input id="input1" onChange={this.onEmailChange} type="email" placeholder="Enter Email Id"></input>
                        <input id="input2" type="password" placeholder="Enter Password"></input>
                        
                       
                       <Link to='/'><button disabled={this.state.disabled} onClick={this.onLogInClick} className={Classes.btn}>Log In</button></Link>
                       <Link to='/SignUp'><button className={Classes.btn2}>Sign Up</button></Link>
                       
                      
                      </div>
                      <div>
                        <p style={{fontSize : '18px'} , {fontWeight : 800} }>OR SIGN IN WITH GOOGLE</p>
                        <div onClick={this.isGoogleSignedIn} id="googleLoginButton" className={Classes.googleLoginButton}>
                        <span class="icon"></span>
                         <span class="buttonText">Google</span>
                        </div>
                      </div>
                    
                    </div>
        )
    }
}

export default  withRouter(LogInElement);