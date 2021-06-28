import axios from 'axios';
import {Component} from 'react'
import classes from './content.module.css'
import ChampionsLegueTable from './ChampionsLeagueTable'

class content extends Component{

    state={
        Preferences :[],
        tables : [],
        scorers : [],
        fixtures:[],
        currentLeague:0,
        allLeagues:['championsLeague','premierLeague','laliga','bundesliga','serieA','serieABr','eredevisie','liganos','ligue1','championship']
    }

    componentDidMount=()=>{
        
        axios.get('https://offside-api.herokuapp.com/home',{
            params:{
                email : localStorage.getItem('currentUserEmail')
            }
        })
        .then(response=>{
            
            this.setState({Preferences : response.data[0].Preferences ,currentLeague : response.data[0].Preferences[0].code})
            for(let i=0;i<response.data[0].Preferences.length;i++)
            {
               // console.log(this.state.Preferences[i].code)
               let curr = response.data[0].Preferences[i].code;
               console.log('hello')
               console.log(curr)
               axios.get(`https://api.football-data.org/v2/competitions/${this.state.Preferences[i].code}/standings`,{
                   headers:{
                       'X-Auth-Token' : '1cba07bab6734acf884f4a3d3dc50e60',
                       'Content-Type': 'application/json'
                   },
               })
               .then(response=>{
                  
                   let Pref = this.state.tables;
                  
                   Pref[curr] = response.data;
                   
                   this.setState({tables : Pref})
                
                   axios.get(`https://api.football-data.org/v2/competitions/${this.state.Preferences[i].code}/scorers`,{
                    headers:{
                        'X-Auth-Token' : '1cba07bab6734acf884f4a3d3dc50e60'
                    },
                    crossdomain : true
                   })
                   .then(response=>{
                       let scorers =this.state.scorers;
                      scorers[curr] =response.data;
                    //    this.setState({scorers : scorers})
                      
                       axios.get(`https://api.football-data.org/v2/competitions/${this.state.Preferences[i].code}/matches?status=SCHEDULED`,{
                        headers:{
                            'X-Auth-Token' : '1cba07bab6734acf884f4a3d3dc50e60'
                        } ,
                        crossdomain : true
                       })
                       .then(response=>{
                           let fixtures = this.state.fixtures;
                           fixtures[curr] = response.data;
                           this.setState({tables : Pref , scorers : scorers ,fixtures : fixtures})
                          
                       })
                       .catch(err => console.log(err))

                   })
                   .catch(err => console.log(err))
               })
               .catch(err => console.log(err))
            }
        })
        .catch(err => console.log(err))
    }

    addBorder=(args)=>{
        console.log(args)
        let elm = document.getElementById(args);
        elm.style.border='1px solid #ffdd59'
    }
    removeBorder=(args)=>{
        for(let i=0;i<10;i++){
            if(this.state.allLeagues[i] != args){
                let elm = document.getElementById(this.state.allLeagues[i])
                if(elm!= null || elm !=undefined){
                    elm.style.border ='none'
                }
            }
        }
    }
    smolNavbar =()=>{
        return(
            this.state.Preferences.map((data,index)=>{
                if(data.code =='2001'){
                    return(
                        <div >
                  
                    <button id="championsLeague" className={[classes.navbarBtns,classes.championsLeague].join(' ')} onClick={()=>{this.setState({currentLeague : data.code});this.addBorder('');this.removeBorder('')}}></button>
                </div>
                    )
                }
                else  if(data.code == '2021'){
                    return(
                        <div >
                  
                    <button id="premierLeague" className={[classes.navbarBtns,classes.premierLeague].join(' ')} onClick={()=>{this.setState({currentLeague : data.code});this.addBorder('premierLeague');this.removeBorder('premierLeague')}}></button>
                </div>
                    )
                }
                else  if(data.code == '2014'){
                    return(
                        <div >
                  
                    <button id="laliga" className={[classes.navbarBtns,classes.laliga].join(' ')} onClick={()=>{this.setState({currentLeague : data.code});this.addBorder('laliga');this.removeBorder('laliga')}}></button>
                </div>
                    )
                }
                else  if(data.code == '2002'){
                    return(
                        <div >
                  
                    <button id="bundesliga" className={[classes.navbarBtns,classes.bundesliga].join(' ')} onClick={()=>{this.setState({currentLeague : data.code});this.addBorder('bundesliga');this.removeBorder('bundesliga')}}></button>
                </div>
                    )
                }
                else  if(data.code == '2019'){
                    return(
                        <div >
                  
                    <button id="serieA" className={[classes.navbarBtns,classes.serieA].join(' ')} onClick={()=>{this.setState({currentLeague : data.code});this.addBorder('serieA');this.removeBorder('serieA')}}></button>
                </div>
                    )
                }
                else  if(data.code == '2017'){
                    return(
                        <div >
                  
                    <button id="liganos" className={[classes.navbarBtns,classes.liganos].join(' ')} onClick={()=>{this.setState({currentLeague : data.code});this.addBorder('liganos');this.removeBorder('liganos')}}></button>
                </div>
                    )
                }
                else  if(data.code =='2003'){
                    return(
                        <div >
                  
                    <button id="eredevisie" className={[classes.navbarBtns,classes.eredevisie].join(' ')} onClick={()=>{this.setState({currentLeague : data.code});this.addBorder('eredevisie');this.removeBorder('eredevisie')}}></button>
                </div>
                    )
                }
                else  if(data.code =='2015'){
                    return(
                        <div >
                  
                    <button id="ligue1" className={[classes.navbarBtns,classes.ligue1].join(' ')} onClick={()=>{this.setState({currentLeague : data.code});this.addBorder('ligue1');this.removeBorder('ligue1')}}></button>
                </div>
                    )
                }
                else  if(data.code == '2013'){
                    return(
                        <div >
                  
                    <button id="serieABr" className={[classes.navbarBtns,classes.serieABr].join(' ')} onClick={()=>{this.setState({currentLeague : data.code});this.addBorder('serieABr');this.removeBorder('serieABr')}}></button>
                </div>
                    )
                }
                else if(data.code == '2016'){
                    return(
                        <div >
                  
                    <button id="championship" className={[classes.navbarBtns,classes.championship].join(' ')} onClick={()=>{this.setState({currentLeague : data.code});this.addBorder('championship');this.removeBorder('championship')}}></button>
                </div>
                    )
                }
                
            })
        )
    }

    renderCLTable=()=>{
       
        if(this.state.tables[this.state.currentLeague] == undefined){
            return(
                <tr>
                    <th></th>
                </tr>
            )
        }
        else{
            return(
                this.state.tables[this.state.currentLeague].standings.map((data,index)=>{
                    if(data.type == 'TOTAL'){
                        
                        return(
                            
                            data.table.map((data2,index2)=>{
                                if(index2 == 0 ){
                                    return(
                                       
                                        <tr >
                                            
                                        <th className={classes.tableLeaders}>{data2.position}</th>
                                        <th className={classes.tableLeaders}>{data2.team.name}</th>
                                    <th className={classes.tableLeaders}>{data2.playedGames}</th>
                                    <th className={classes.tableLeaders}>{data2.won}</th>
                                    <th className={classes.tableLeaders}>{data2.draw}</th>
                                    <th className={classes.tableLeaders}>{data2.lost}</th>
                                    <th className={classes.tableLeaders}>{data2.goalDifference}</th>
                                   <th className={classes.tableLeaders}>{data2.points}</th>
                                </tr>
                                    )
                                }
                                else if(index2 == 3  ){
                                    return(
                                        <tr>
                                        <th className={classes.tableRowsg}>{data2.position}</th>
                                            <th className={classes.tableRowsg}>{data2.team.name}</th>
                                        <th className={classes.tableRowsg}>{data2.playedGames}</th>
                                        <th className={classes.tableRowsg}>{data2.won}</th>
                                        <th className={classes.tableRowsg}>{data2.draw}</th>
                                        <th className={classes.tableRowsg}>{data2.lost}</th>
                                        <th className={classes.tableRowsg}>{data2.goalDifference}</th>
                                       <th className={classes.tableRowsg}>{data2.points}</th>
                                </tr>
                                    )
                                }
                                else{
                                    return(
                                        <tr>
                                            <th className={classes.tableRows}>{data2.position}</th>
                                            <th className={classes.tableRows}>{data2.team.name}</th>
                                        <th className={classes.tableRows}>{data2.playedGames}</th>
                                        <th className={classes.tableRows}>{data2.won}</th>
                                        <th className={classes.tableRows}>{data2.draw}</th>
                                        <th className={classes.tableRows}>{data2.lost}</th>
                                        <th className={classes.tableRows}>{data2.goalDifference}</th>
                                       <th className={classes.tableRows}>{data2.points}</th>
                                    </tr>
                                    )
                                }
                            })
                        )
                    }
                })
            )
        }
        
    }

    renderTable=()=>{
        
        if(this.state.tables.length > 0)
        {
            if(this.state.tables[this.state.currentLeague] == undefined)
            {
                return(
                    <tr>
                        <th></th>
                    </tr>
                )
            }
            else {
                if(this.state.tables[this.state.currentLeague].competition.code == "CL"){
                   
                   // this.renderCLTable();
                }
                else{
                    return(
                        
                        this.state.tables[this.state.currentLeague].standings[0].table.map((data,index)=>{
                            
                            if(index == 0 ){
                                return(
                                    <tr >
                                    <th className={classes.tableLeaders}>{data.position}</th>
                                    <th className={classes.tableLeaders}>{data.team.name}</th>
                                    <th className={classes.tableLeaders}>{data.playedGames}</th>
                                                                  
                                    <th className={classes.tableLeaders}>{data.won}</th>
                                    <th className={classes.tableLeaders}>{data.draw}</th>
                                    <th className={classes.tableLeaders}>{data.lost}</th>
                                    <th className={classes.tableLeaders}>{data.goalDifference}</th>
                                    <th className={classes.tableLeaders}>{data.points}</th> 
                               
                            </tr>
                                )
                            }
                            else if(index == 3 || index ==  this.state.tables[this.state.currentLeague].standings[0].table.length-4 ){
                                return(
                                    <tr>
                                    <th className={classes.tableRowsg}>{data.position}</th>
                                        <th className={classes.tableRowsg}>{data.team.name}</th>
                                    <th className={classes.tableRowsg}>{data.playedGames}</th>
                                   
                                    <th className={classes.tableRowsg}>{data.won}</th>
                                    <th className={classes.tableRowsg}>{data.draw}</th>
                                    <th className={classes.tableRowsg}>{data.lost}</th>
                                    <th className={classes.tableRowsg}>{data.goalDifference}</th>
                                    <th className={classes.tableRowsg}>{data.points}</th>
                                   
                            </tr>
                                )
                            }
                            else{
                                return(
                                    <tr>
                                        <th className={classes.tableRows}>{data.position}</th>
                                        <th className={classes.tableRows}>{data.team.name}</th>
                                    <th className={classes.tableRows}>{data.playedGames}</th>
                                   
                                    <th className={classes.tableRows}>{data.won}</th>
                                    <th className={classes.tableRows}>{data.draw}</th>
                                    <th className={classes.tableRows}>{data.lost}</th>
                                    <th className={classes.tableRows}>{data.goalDifference}</th>
                                    <th className={classes.tableRows}>{data.points}</th>
                                  
                                </tr>
                                )
                            }
                            
                        })
                    )
                }
            }
         

        }
        else{
           
            return(
                <tr>
                    <th></th>
                </tr>
            )
        }
        
    }

    renderScorers=()=>{
        
        if(this.state.scorers.length > 0)
        {
            if(this.state.scorers[this.state.currentLeague] == undefined)
            {
                return(
                    <tr>
                        <th></th>
                    </tr>
                )
            }
            else{
                return(
                    this.state.scorers[this.state.currentLeague].scorers.map((data,index)=>{
                        if(index >= 12){
                            return null;
                        }
                       
                        else if(index == 0 ){
                            return(
                                <tr>
                                     <th className={classes.scorerLeaders}>{index+1}</th>
                                     <th className={classes.scorerLeaders}>{data.player.name}</th>
                                    <th className={classes.scorerLeaders}>{data.team.name}</th>
                                   
                                    <th className={classes.scorerLeaders}>{data.numberOfGoals}</th>
                                </tr>
                            )
                        }
                        else{
                            return(
                                <tr>
                                     <th className={classes.scorerRows}>{index+1}</th>
                                     <th className={classes.scorerRows}>{data.player.name}</th>
                                    <th className={classes.scorerRows}>{data.team.name}</th>
                                   
                                    <th className={classes.scorerRows}>{data.numberOfGoals}</th>
                                </tr>
                            )
                        }
                        
                    })
                )
            }
        }
        else{
           
            return(
                <tr>
                    <th></th>
                </tr>
            )
        }
    }

    renderFixtures=()=>{
        if(this.state.fixtures.length > 0){
           
            if(this.state.fixtures[this.state.currentLeague] == undefined)
            {
                return(
                    <tr>
                        <th></th>
                    </tr>
                )
            }
            else if(this.state.fixtures[this.state.currentLeague] != undefined){
            return(
                this.state.fixtures[this.state.currentLeague].matches.map((data,index)=>{
                    
                      if(index >= 12) {
                        return null;
                      }
                     else{
                        return(
                            <tr>
                                <th className={classes.scorerRows}>{data.homeTeam.name} - {data.awayTeam.name}</th>
                                <th className={classes.scorerRows}>{data.utcDate.substring(0,10)}</th>
                            </tr>
                        )
                        
                     }
                    
                })
            )
            }
            

        }
        else{
            return(
                <tr>
                    <th></th>
                </tr>
            )
        }
    }
    onStandingsClick=()=>{
        let std = document.getElementById('standings')
        let fxt = document.getElementById('fixtures')
        let scr = document.getElementById('scorers')
        let clstd =  document.getElementById('clStandings')
        std.style.color = '#ffdd59';
        fxt.style.color ='white';
        scr.style.color ='white';

        let stdTable = document.getElementById('standingsTable')
        let fxtTable = document.getElementById('fixturesTable')
        let scrTable = document.getElementById('scorersTable')
        if(this.state.currentLeague =='2001'){
            stdTable.style.display = 'none';
        fxtTable.style.display = 'none';
        scrTable.style.display = 'none';
        clstd.style.display='block'
        }
        else{
            stdTable.style.display = 'block';
            fxtTable.style.display = 'none';
            scrTable.style.display = 'none';
            clstd.style.display='none'
        }
        
    }

    onFixturesClick=()=>{
        let std = document.getElementById('standings')
        let fxt = document.getElementById('fixtures')
        let scr = document.getElementById('scorers')

        std.style.color = 'white';
        fxt.style.color ='#ffdd59';
        scr.style.color ='white'

        let stdTable = document.getElementById('standingsTable')
        let fxtTable = document.getElementById('fixturesTable')
        let scrTable = document.getElementById('scorersTable')
        let clstd =  document.getElementById('clStandings')

        stdTable.style.display = 'none';
        fxtTable.style.display = 'block';
        scrTable.style.display = 'none';
        clstd.style.display='none'
    }

    onScorersClick=()=>{
        let std = document.getElementById('standings')
        let fxt = document.getElementById('fixtures')
        let scr = document.getElementById('scorers')

        std.style.color = 'white';
        fxt.style.color ='white';
        scr.style.color ='#ffdd59'

        let stdTable = document.getElementById('standingsTable')
        let fxtTable = document.getElementById('fixturesTable')
        let scrTable = document.getElementById('scorersTable')
        let clstd =  document.getElementById('clStandings')

        stdTable.style.display = 'none';
        fxtTable.style.display = 'none';
        scrTable.style.display = 'block';
        clstd.style.display='none'
    }
    render(){
        return(
            <div>
                <div className={classes.smolNavbar}>
                    {this.smolNavbar()}
                </div>
                <div className={classes.main}>
               <div className={classes.elementsNavbar}>
                   <h1 onClick={this.onStandingsClick} id="standings">STANDINGS</h1>
                   <h1 onClick={this.onFixturesClick} id="fixtures">FIXTURES</h1>
                   <h1 onClick={this.onScorersClick} id="scorers">TOP SCORERS</h1>
               </div>
                <aside id="standingsTable" className={classes.aside}>
                    <h1 className={classes.stHeading}>CURRENT STANDINGS</h1>
                   <table className={classes.table}>
                       <tr>
                           <th className={classes.tableHeading}>POS</th>
                           <th className={classes.tableHeading}>TEAM</th>
                           <th className={classes.tableHeading}>PLAYED</th>
                           <th className={classes.tableHeading}>WON</th>
                           <th className={classes.tableHeading}>DRAW</th>
                           <th className={classes.tableHeading}>LOST</th>
                           <th className={classes.tableHeading}>GD</th>
                           <th className={classes.tableHeading}>POINTS</th>
                       </tr>
                        {this.renderTable()}
                   </table>
                </aside>
                <div id="scorersTable" className={classes.scorersTable}> 
                        <h1 className={classes.sHeading}>LEAGUE TOP SCORERS</h1>
                        <table className={classes.scorers}>
                            <tr>
                            <th className={classes.scorersHeading}>POS</th>
                            <th className={classes.scorersHeading}>NAME</th>
                                <th className={classes.scorersHeading}>TEAM</th>
                             
                                <th className={classes.scorersHeading}>GOALS</th>
                            </tr>
                            {this.renderScorers()}
                        </table>
                    </div>
                    <div id="fixturesTable"  className={classes.fixturesTable}>
                        <h1 className={classes.fHeading}>UPCOMING FIXTURES</h1>
                        <table className={classes.fixtures}>
                            <tr>
                                <th className={classes.fixturesHeading}>FIXTURE</th>
                                <th className={classes.fixturesHeading}>DATE</th>
                            </tr>
                            {this.renderFixtures()}
                        </table>
                        
                    </div>
                    
                    <aside id="clStandings" className={classes.clStandings}>
                    <h1 className={classes.stHeading}>CURRENT STANDINGS</h1>
                    <table className={classes.table} id="clStandings">
                    <th className={classes.tableHeading}>POS</th>
                           <th className={classes.tableHeading}>TEAM</th>
                           <th className={classes.tableHeading}>PLAYED</th>
                           <th className={classes.tableHeading}>WON</th>
                           <th className={classes.tableHeading}>DRAW</th>
                           <th className={classes.tableHeading}>LOST</th>
                           <th className={classes.tableHeading}>GD</th>
                           <th className={classes.tableHeading}>POINTS</th>
                        {this.renderCLTable()}
                    </table>
                </aside>
                </div>
            </div>
        )
    }

}
export default content;
