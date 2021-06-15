import {Component} from 'react';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom'
import Header from './Header'
import IndexPage from './IndexPage'
import Classes from './App.module.css'
import Home from './Home'
import './fonts.module.css'
import Content from './content'
import User from './user'
import HeaderForPref from './HeaderForPref'
import About from './About'
import {ProtectedRoute} from './ProtectedRoute';
class App extends Component{
  render(){
    return(
      <div  className={Classes.div} >
        <Router>
          <Route path="/home" exact component={HeaderForPref}></Route>
          <Route path="/content" exact component={Header}></Route>
          <Route path="/user" exact component={Header}></Route>
          <Route path="/about" exact component={Header}></Route>
          <Switch>
         
          <Route path="/" exact component={IndexPage}></Route> 
          
           <ProtectedRoute path="/home" exact component={Home}></ProtectedRoute>
          <ProtectedRoute path="/content" exact component ={Content}></ProtectedRoute> 
          <ProtectedRoute path = "/user" exact component = {User}></ProtectedRoute>
          <ProtectedRoute path = "/about" exact component = {About}></ProtectedRoute>
          <Route path="*" exact component={()=>"404 NOT FOUND"}></Route>
          </Switch>
        </Router>
      </div>
    )

  }
}

export default App;
