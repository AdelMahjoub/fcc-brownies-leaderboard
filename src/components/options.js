import React from 'react';

export default function(props){
    return(
        <div className="input-group">
            <div className="input-group-addon">
                <span>Top of </span>
            </div>
            <select
            className="form-control" 
            value={props.option} 
            onChange={props.handleSelect}
            >
                <option value="all">All time</option>
                <option value="latest">Last 30 days</option>
            </select>
        </div>
    )
}