import React from 'react';
import User from './user-row';

export default function(props){
    return(
        <table className="table table-striped table-hover">
            <thead>
                <tr className="success">
                    <th>#</th>
                    <th colSpan="2">Fcc Camper</th>
                    <th className="text-center">Brownies (All Time)</th>
                    <th className="text-center">Brownies (Last 30 days) </th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user =>{
                   return <User 
                   key={user.username} 
                   user={user} 
                   rank={props.users.indexOf(user)+1}/>
                })}
            </tbody>
        </table>
    )
}