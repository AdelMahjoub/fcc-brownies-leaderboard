import React from 'react';

export default function(props){
    return(
        <tr>
            <td>{props.rank}</td>
            <td className="text-center">
                <img 
                className="profile-img img-rounded" 
                src={props.user.img} 
                role="presentation"
                width="30"
                height="30"
                />
            </td>
            <td>{props.user.username}</td>
            <td className="text-center">{props.user.alltime}</td>
            <td className="text-center">{props.user.recent}</td>
        </tr>
    )
}