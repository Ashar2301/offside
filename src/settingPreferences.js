import axios from 'axios';
import classes from './settingPreferences.module.css'
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import {useState} from 'react'

const SettingPreferences=()=>{
    let arr=[false,false,false,false,false,false,false,false,false,false,];
    let name=[];
    let openStarID;
    let closedStarID;
    // const [state , changeState] = useState(false)
    const changeOpnBtnStateCl=()=>{
        // changeState(prevState=>!prevState)
        let openstar = document.getElementById(openStarID);
        let closestar = document.getElementById(closedStarID);
        openstar.style.display = "none";
        closestar.style.display = "inline";
    }

    const changeClBtnStateCl=()=>{
        // changeState(prevState=>!prevState)
        let openstar = document.getElementById(openStarID);
        let closestar = document.getElementById(closedStarID);
        openstar.style.display = "inline";
        closestar.style.display = "none";
    }
   const onProceedClick=()=>{
      
       

       axios.get('http://localhost:5000/home',{
           params:{
               email : localStorage.getItem("currentUserEmail")
           }
       }).then(response=>{
        let resStr=[];
        if(arr[0] == true)   resStr.push({code : 2001 , comp : 'Champions League'});
        if(arr[1] == true)   resStr.push({code : 2021 , comp : 'Premier League'});
        if(arr[2] == true)   resStr.push({code : 2014 , comp : 'La Liga'});
        if(arr[3] == true)   resStr.push({code : 2002 , comp : 'Bundesliga'});
        if(arr[4] == true)   resStr.push({code : 2019 , comp : 'Serie A'});
        if(arr[5] == true)   resStr.push({code : 2017 , comp : 'Liga NOS'});
        if(arr[6] == true)   resStr.push({code : 2003 , comp : 'Eredevesie'});
        if(arr[7] == true)   resStr.push({code : 2015 , comp : 'Ligue 1'});
        if(arr[8] == true)   resStr.push({code : 2013 , comp : 'Serie A Brazil'});
        if(arr[9] == true)   resStr.push({code : 2016 , comp : 'Championship'});
        console.log(resStr)
       const newObj = {
           name : localStorage.getItem("currentUser"),
           email : localStorage.getItem("currentUserEmail"),
           password : response.data[0].password,
           setPreference : true,
           Preferences : resStr
       }
       axios.post('http://localhost:5000/home' , newObj)
       .then(response=>{
           console.log(response);
           window.location.replace("http://localhost:3000/content");
       })
       .catch(err => console.log(err))
       })
       .catch(err => console.log(err))

    }
    return(
        <div>
            
            <h1 className={classes.h1}>
                SELECT LEAGUES
            </h1>
            
            <div className={classes.flex}>
                <div className={classes.cards}>
                    <div className={classes.flipcardinner}>
                        <div className={classes.cl}>

                        </div>
                        <div className={classes.clback}>
                                 <h1>CHAMPIONS LEAGUE</h1>
                                  <p>EUROPE</p>
                                  <FaRegStar size={50} classname={classes.star} id="openstar0" onClick={()=>{ openStarID='openstar0';closedStarID='closestar0';arr[0] = true;changeOpnBtnStateCl();}} ></FaRegStar>
                                  <FaStar size={50} classname={classes.star} id="closestar0" style={{display:'none'}} onClick={()=>{openStarID='openstar0';closedStarID='closestar0';arr[0] = false;changeClBtnStateCl();}}></FaStar>
                        </div>
                    </div>
                </div>

                <div className={classes.cards}>
                    <div className={classes.flipcardinner}>
                        <div className={classes.epl}>

                        </div>
                        <div className={classes.eplback}>
                                 <h1>PREMIER LEAGUE</h1>
                                  <p>ENGLAND</p>
                                  <FaRegStar size={50}  onClick={()=>{openStarID='openstar1';closedStarID='closestar1';arr[1] = true;changeOpnBtnStateCl()}} id="openstar1"></FaRegStar>
                                  <FaStar size={50} id="closestar1" style={{display:'none'}} onClick={()=>{openStarID='openstar1';closedStarID='closestar1';arr[1] = false;changeClBtnStateCl();}}></FaStar>
                        </div>
                    </div>
                </div>

                <div className={classes.cards}>
                    <div className={classes.flipcardinner}>
                        <div className={classes.laliga}>

                        </div>
                        <div className={classes.laligaback}>
                                 <h1>LA LIGA</h1>
                                  <p>SPAIN</p>
                                  <FaRegStar size={50} onClick={()=>{openStarID='openstar2';closedStarID='closestar2';arr[2] = true;changeOpnBtnStateCl()}} id="openstar2"></FaRegStar>
                                  <FaStar size={50} id="closestar2" style={{display:'none'}} onClick={()=>{openStarID='openstar2';closedStarID='closestar2';arr[2] = false;changeClBtnStateCl();}}></FaStar>
                        </div>
                    </div>
                </div>

                <div className={classes.cards}>
                    <div className={classes.flipcardinner}>
                        <div className={classes.bdsliga}>

                        </div>
                        <div className={classes.bdsligaback}>
                                 <h1>BUNDESLIGA</h1>
                                  <p>GERMANY</p>
                                  <FaRegStar  size={50}  onClick={()=>{openStarID='openstar3';closedStarID='closestar3';arr[3] = true;changeOpnBtnStateCl()}} id="openstar3"></FaRegStar>
                                  <FaStar size={50}  id="closestar3" style={{display:'none'}} onClick={()=>{openStarID='openstar3';closedStarID='closestar3';arr[3] = false;changeClBtnStateCl();}}></FaStar>
                        </div>
                    </div>
                </div>

                <div className={classes.cards}>
                    <div className={classes.flipcardinner}>
                        <div className={classes.sera}>

                        </div>
                        <div className={classes.seraback}>
                                 <h1>SERIE A</h1>
                                  <p>ITALY</p>
                                  <FaRegStar  size={50}  onClick={()=>{openStarID='openstar4';closedStarID='closestar4';arr[4] = true;changeOpnBtnStateCl()}} id="openstar4"></FaRegStar>
                                  <FaStar size={50}  id="closestar4" style={{display:'none'}} onClick={()=>{openStarID='openstar4';closedStarID='closestar4';arr[4] = false;changeClBtnStateCl();}}></FaStar>
                        </div>
                    </div>
                </div>

                <div className={classes.cards}>
                    <div className={classes.flipcardinner}>
                        <div className={classes.prliga}>

                        </div>
                        <div className={classes.prligaback}>
                                 <h1>PRIMIERA LIGA</h1>
                                  <p>PORTUGAL</p>
                                  <FaRegStar  size={50}  onClick={()=>{openStarID='openstar5';closedStarID='closestar5';arr[5] = true;changeOpnBtnStateCl()}} id="openstar5"></FaRegStar>
                                  <FaStar size={50}  id="closestar5" style={{display:'none'}} onClick={()=>{openStarID='openstar5';closedStarID='closestar5';arr[5] = false;changeClBtnStateCl();}}></FaStar>
                        </div>
                    </div>
                </div>

                <div className={classes.cards}>
                    <div className={classes.flipcardinner}>
                        <div className={classes.eredvs}>

                        </div>
                        <div className={classes.eredvsback}>
                                 <h1>EREDEVISIE</h1>
                                  <p>NETHERLAND</p>
                                  <FaRegStar  size={50}  onClick={()=>{openStarID='openstar6';closedStarID='closestar6';arr[6] = true;changeOpnBtnStateCl()}} id="openstar6"></FaRegStar>
                                  <FaStar size={50}  id="closestar6" style={{display:'none'}} onClick={()=>{openStarID='openstar6';closedStarID='closestar6';arr[6] = false;changeClBtnStateCl();}}></FaStar>
                        </div>
                    </div>
                </div>

                <div className={classes.cards}>
                    <div className={classes.flipcardinner}>
                        <div className={classes.l1}>

                        </div>
                        <div className={classes.l1back}>
                                 <h1>LIGUE 1</h1>
                                  <p>FRANCE</p>
                                  <FaRegStar  size={50}  onClick={()=>{openStarID='openstar7';closedStarID='closestar7';arr[7] = true;changeOpnBtnStateCl()}} id="openstar7"></FaRegStar>
                                  <FaStar size={50}  id="closestar7" style={{display:'none'}} onClick={()=>{openStarID='openstar7';closedStarID='closestar7';arr[7] = false;changeClBtnStateCl();}}></FaStar>
                        </div>
                    </div>
                </div>

                <div className={classes.cards}>
                    <div className={classes.flipcardinner}>
                        <div className={classes.serabr}>

                        </div>
                        <div className={classes.serabrback}>
                                 <h1>SERIA A</h1>
                                  <p>BRAZIL</p>
                                  <FaRegStar  size={50}  onClick={()=>{openStarID='openstar8';closedStarID='closestar8';arr[8] = true;changeOpnBtnStateCl()}} id="openstar8"></FaRegStar>
                                  <FaStar  size={50} id="closestar8" style={{display:'none'}} onClick={()=>{openStarID='openstar8';closedStarID='closestar8';arr[8] = false;changeClBtnStateCl();}}></FaStar>
                        </div>
                    </div>
                </div>

                <div className={classes.cards}>
                    <div className={classes.flipcardinner}>
                        <div className={classes.chmpsp}>

                        </div>
                        <div className={classes.chmpspback}>
                                 <h1>CHAMPIONSHIP</h1>
                                  <p>ENGLAND</p>
                                  <FaRegStar  size={50}  onClick={()=>{openStarID='openstar9';closedStarID='closestar9';arr[9] = true;changeOpnBtnStateCl()}} id="openstar9"></FaRegStar>
                                  <FaStar  size={50} id="closestar9" style={{display:'none'}} onClick={()=>{openStarID='openstar9';closedStarID='closestar9';arr[9] = false;changeClBtnStateCl();}}></FaStar>
                        </div>
                    </div>
                </div>

            </div>
            <button className={classes.btn} onClick={onProceedClick}>PROCEED</button>

        </div>
    )

}

export default SettingPreferences;