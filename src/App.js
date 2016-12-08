import React, { Component } from 'react';
import axios from 'axios';
import LeaderBoard from './components/leaderboard-table';
import NavBar from './components/nav-bar';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const ROOT_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/';//fcc api entry

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      latestTop: null, //is an array of objects from fcc api response
      allTimeTop: null,//is an array of objects from fcc api response
      option: "all",//default option
      term: '' //default search term is empty
    }
    this.initLeaderBoard = this.initLeaderBoard.bind(this);//initial fcc api get request
    this.onOptionSelect = this.onOptionSelect.bind(this);//option select field handler
    this.onSearchChange = this.onSearchChange.bind(this);//search field input handler
    this.leaderBoardTable = this.leaderBoardTable.bind(this);//return either latest or all time leaderboard 
    this.filterCampers = this.filterCampers.bind(this);//return a filtered array by userbame
    this.initLeaderBoard();
  }
  //get request for latest
  getLatest(){
    return axios.get(`${ROOT_URL}recent`);
  }
  //get request for all time
  getAllTime(){
    return axios.get(`${ROOT_URL}alltime`);
  }
  //make both latest and all time requests, since we will use both
  initLeaderBoard(){
    axios.all([this.getLatest(), this.getAllTime()])
      .then(axios.spread((latest, allTime) =>{
        this.setState({
          latestTop: latest.data,
          allTimeTop: allTime.data
        })
      }))
  }
  //option select field handler
  //set new option state
  onOptionSelect(e){
    this.setState({option: e.target.value})
  }
  //search field input handler
  //set new term state
  onSearchChange(e){
    this.setState({term: e.target.value})
  }
  //return the LeaderBoard component if we got a response from fcc api
  leaderBoardTable(option){
    if(option === "all"){
      return this.state.allTimeTop ? 
        <LeaderBoard users={this.filterCampers(this.state.allTimeTop)}/> : '';
    } 
    return this.state.latestTop ?
      <LeaderBoard users={this.filterCampers(this.state.latestTop)}/> : '';

  }
  //filter an array by username
  filterCampers(arr){
    if(this.state.term === '') return arr;
    else return arr.filter(camper => {
      let patt = new RegExp(this.state.term, "i");
      return patt.test(camper.username);
    })
  }
  render() {
    return (
      <div className="container">
        <NavBar 
        option={this.state.option}
        term={this.state.term}
        handleChange={this.onSearchChange}
        handleSelect={this.onOptionSelect}
        />
        {
          this.leaderBoardTable(this.state.option)
        }
      </div>
    );
  }
}

export default App;
