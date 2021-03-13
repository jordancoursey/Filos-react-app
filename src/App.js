import React, { Component } from 'react';
import classes from './App.module.css';
import {connect} from 'react-redux';
import {Route, BrowserRouter as Router, Link, Redirect} from "react-router-dom";
import UserPage from './components/userPage/userPage';
import FavoriteClients from './components/favoriteClients/favoriteClients';
import ExistingClients from './components/existingClients/existingClients';
import Journal from './components/journal/journal'
import AddClient from './components/addClient/addClient';
import ClientInformation from './components/addClient/clientInformation/clientInformation';
import BAP from './components/addClient/behavioralActionPlan/behavioralActionPlan';

class App extends Component{

  state = {
    redirectMyClients: false,
    redirectExistingClients: false,
    redirectJournal: false,
    redirectAddClient: false,
    redirectUserPage: false,
    redirectClientInformation: false,
    redirectBap: false
  }

  setRedirectMyClients = () => {
    this.setState({redirectMyClients: true});
  }
  
  renderMyClientsRedirect = () => {
    if (this.state.redirectMyClients){
      this.setState({redirectMyClients: false})
      return <Redirect to = '/MyClients'/>
    }
  }

  setRedirectExistingClients = () => {
    this.setState({redirectExistingClients: true});
  }
  
  renderExistingClientsRedirect = () => {
    if (this.state.redirectExistingClients){
      this.setState({redirectExistingClients: false})
      return <Redirect to = '/ExistingClients'/>
    }
  }

  setRedirectJournal = () => {
    this.setState({redirectJournal: true});
  }
  
  renderJournal = () => {
    if (this.state.redirectJournal){
      this.setState({redirectJournal: false})
      return <Redirect to = '/Journal'/>
    }
  }

  setRedirectAddClient = () => {
    this.setState({redirectAddClient: true});
  }
  
  renderAddClient = () => {
    if (this.state.redirectAddClient){
      this.setState({redirectAddClient: false})
      return <Redirect to = '/AddClient'/>
    }
  }

  setRedirectUserPage = () => {
    this.setState({redirectUserPage: true});
  }
  
  renderUserPage = () => {
    if (this.state.redirectUserPage){
      this.setState({redirectUserPage: false})
      return <Redirect to = '/'/>
    }
  }

  setRedirectClientInformation = () => {
    this.setState({redirectClientInformation: true});
  }
  
  renderClientInformation = () => {
    if (this.state.redirectClientInformation){
      this.setState({redirectClientInformation: false})
      return <Redirect to = '/ClientInformation'/>
    }
  }

  setRedirectBap = () => {
    this.setState({redirectBap: true});
  }
  
  renderBap = () => {
    if (this.state.redirectBap){
      this.setState({redirectBap: false})
      return <Redirect to = '/BehavioralActionPlan'/>
    }
  }


  render () {
    return (
      <Router>

          {this.renderMyClientsRedirect()}
          {this.renderExistingClientsRedirect()}
          {this.renderJournal()}
          {this.renderAddClient()}
          {this.renderUserPage()}
          {this.renderClientInformation()}
          {this.renderBap()}

          <Route path = '/' exact>
            <UserPage 
            redirectFavoriteClients = {this.setRedirectMyClients}
            redirectExistingClients = {this.setRedirectExistingClients}
            redirectJournal = {this.setRedirectJournal}
            redirectAddClient = {this.setRedirectAddClient}
            />
          </Route>
          <Route path = '/MyClients'>
            <FavoriteClients
            redirectUserPage = {this.setRedirectUserPage}
            />
          </Route>
          <Route path = '/ExistingClients'>
            <ExistingClients/>
          </Route>
          <Route path = '/Journal'>
            <Journal/>
          </Route>
          <Route path = '/AddClient'>
            <AddClient
              redirectUserPage = {this.setRedirectUserPage}
              redirectClientInformation = {this.setRedirectClientInformation}
              redirectBap = {this.setRedirectBap}
            />
          </Route>
          <Route path = '/ClientInformation'>
            <ClientInformation
              redirectAddClient = {this.setRedirectAddClient}
              clientID = {this.props.cID}
            />
          </Route>
          <Route path = '/BehavioralActionPlan'>
           <BAP
           redirectAddClient = {this.setRedirectAddClient}
           clientID = {this.props.cID}
           />
          </Route>
        
      </Router>
      
    );
  }
}

const mapStateToProps = state => {
  return{
    cID: state.clientID
  };
};

export default connect(mapStateToProps)(App);
