import React from 'react';

export default function(props){
    return(
        <div className="input-group">
            <input
            className="form-control" 
            value={props.term} 
            onChange={props.handleChange}
            />
            <div className="input-group-addon">
                <span>
                    <i className="glyphicon glyphicon-search"></i>
                </span>
            </div>
        </div>
    )
}