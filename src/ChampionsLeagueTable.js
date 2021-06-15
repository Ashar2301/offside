import classes from './content.module.css'

const ChampionsLegueTable=(props)=>{
    const returnData=()=>{
        props.table.standings.map((data,index)=>{
            if(data.type == 'TOTAL'){
                if(index == 0){
                    return(
                        
                        data.table.map((data,index)=>{
                            if(index == 0){
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
        })
    }
    return(
        <div>{returnData()}</div>
    )
}
export default ChampionsLegueTable;