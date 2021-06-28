import {useState , useEffect} from 'react';
import axios from 'axios'
import classes from './user.module.css'
import profilePic from './prof.jpg'
import Auth from './Auth'
import { useHistory } from 'react-router';

const User=()=>{

    const [pref , setPref] = useState(null);
    const [obj,setObj] = useState(null);
    const history = useHistory();
    useEffect(()=>{
        axios.get('https://offside-api.herokuapp.com/getUser',{
            params:{
                email : localStorage.getItem("currentUserEmail")
            }
        })
        .then(response=>{
            setPref(response.data[0].Preferences);
            setObj(response.data[0])
            console.log(response.data[0].Preferences)
        })
        .catch(err => console.log(err))
    },[])

    const func=()=>{
        if(pref != null){
            return(
                pref.map((data,index)=>{
                return(
                    <div>{data.comp}</div>
                )
                })
            )
        }
    }

    const preferenceChangeClicked=()=>{
        var newObj={
            Preferences:[],
            name:obj.name,
            email:obj.email,
            password:obj.password,
            setPreference : 'false'
        }

        axios.post('https://offside-api.herokuapp.com/getUser/updatePref',newObj)
        .then(response=>{
            console.log(response)
            // window.location.replace("http://localhost:3000/home");
            history.push('/home')
        })
        .catch(err=>console.log(err))
    }

    const onLogOutClick=()=>{
         Auth.logout();
        history.push('/')
    }

    const profile=()=>{
       if(obj!=null){
        return(
            <div className={classes.profDiv}>
                <img className={classes.profile} src={profilePic}></img>
                <h1 className={classes.h1}>NAME : {obj.name}</h1>
                <h2 className={classes.h2}>EMAIL : {obj.email}</h2>
                <button onClick={preferenceChangeClicked} className={classes.profBtns}>Change Preferences</button><br></br>
               <button onClick={onLogOutClick} className={classes.profBtns}>Log Out</button>
            </div>
        )
       }
    }

    const followedLeagues=()=>{
        console.log('here')
        if(pref!=null){
            return(
                pref.map((data)=>{
                    if(data.code =='2001'){
                        return(
                            <div >
                      
                        <button className={[classes.navbarBtns,classes.championsLeague].join(' ')} ></button>
                    </div>
                        )
                    }
                    else  if(data.code == '2021'){
                        return(
                            <div >
                      
                        <button className={[classes.navbarBtns,classes.premierLeague].join(' ')} ></button>
                    </div>
                        )
                    }
                    else  if(data.code == '2014'){
                        return(
                            <div >
                      
                        <button className={[classes.navbarBtns,classes.laliga].join(' ')} ></button>
                    </div>
                        )
                    }
                    else  if(data.code == '2002'){
                        return(
                            <div >
                      
                        <button className={[classes.navbarBtns,classes.bundesliga].join(' ')} ></button>
                    </div>
                        )
                    }
                    else  if(data.code == '2019'){
                        return(
                            <div >
                      
                        <button className={[classes.navbarBtns,classes.serieA].join(' ')} ></button>
                    </div>
                        )
                    }
                    else  if(data.code == '2017'){
                        return(
                            <div >
                      
                        <button className={[classes.navbarBtns,classes.liganos].join(' ')} ></button>
                    </div>
                        )
                    }
                    else  if(data.code =='2003'){
                        return(
                            <div >
                      
                        <button className={[classes.navbarBtns,classes.eredevisie].join(' ')} ></button>
                    </div>
                        )
                    }
                    else  if(data.code =='2015'){
                        return(
                            <div >
                      
                        <button className={[classes.navbarBtns,classes.ligue1].join(' ')} ></button>
                    </div>
                        )
                    }
                    else  if(data.code == '2013'){
                        return(
                            <div >
                      
                        <button className={[classes.navbarBtns,classes.serieABr].join(' ')} ></button>
                    </div>
                        )
                    }
                    else if(data.code == '2016'){
                        return(
                            <div >
                      
                        <button className={[classes.navbarBtns,classes.championship].join(' ')} ></button>
                    </div>
                        )
                    }
                })
            )
        }
    }

    return(
        <div className={classes.main}>
            <section className={classes.section}>
               {profile()}
               
            </section>
            <aside className={classes.aside}>
                <h1>FOLLOWED LEAGUES</h1>
                {followedLeagues()}
            </aside>
        </div>
    )
}

export default User;