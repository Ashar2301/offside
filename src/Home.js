
import {Component} from 'react';
import axios from 'axios'
import SettingPreferences from './settingPreferences'
import {withRouter} from 'react-router-dom'

class Home extends Component{

    state={
        preferenceSet:false
    }

    componentDidMount(){
        const email = localStorage.getItem("currentUserEmail");
        axios.get('http://localhost:5000/home',{
            params:{
                email : email
            }
        })
        .then(Response=>{
            if(Response.data.length > 0)
            {
                this.setState({preferenceSet : Response.data[0].setPreference})
                console.log(Response.data[0].setPreference)
            }
            else{
                console.log("else")
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }

    returnElement=()=>{
        if(this.state.preferenceSet == false)
        {
            return(
                <SettingPreferences></SettingPreferences>
            )
        }
        else{
            const { history } = this.props;
                if(history) history.push('/content');
                window.location.reload();
        }
    }
    render(){
        return(
            <div>
               {this.returnElement()}
            </div>
        )
    }
}

export default withRouter(Home);