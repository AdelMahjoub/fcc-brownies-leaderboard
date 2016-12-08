import React from 'react';
import SelectField from './options';
import SearchBar from './search-bar';

export default function(props){
    return(
        <div className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="https://www.freecodecamp.com/adelmahjoub" target="_blank">
                        FreeCodeCamp Leaderboard
                    </a>
                </div>
                <div className="navbar-form navbar-right">
                    <SelectField 
                    option={props.option}
                    handleSelect={props.handleSelect}
                    />
                    <SearchBar 
                    term={props.term} 
                    handleChange={props.handleChange}
                    />
                </div>
            </div>
        </div>
    )
}