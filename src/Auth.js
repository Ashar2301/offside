class Auth{

    constructor() {
        this.authenticated = false;
        this.auth2Obj = null;
      }
    
      login() {
        this.authenticated = true;
      
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
          
        })
      }
      logout() {
        this.authenticated = false;
        localStorage.setItem('currentUser',"")
        localStorage.setItem('currentUserEmail',"")
        window.location.replace('http://localhost:3000')
        this.insertGapiScript();
        this.auth2Obj.signOut().then(()=>{
            console.log("YES")
        })
      }
    
      isAuthenticated() {
       if(localStorage.getItem('currentUser')!==""){
           console.log(true)
           return true;
       }
       else{
           return false;
       }
      }
}
export default new Auth();