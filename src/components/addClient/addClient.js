import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

const addClient = props =>{
    return (
        <div>
            <button onClick = {props.redirectUserPage}>Back</button>
            <label> Enter Client ID:  </label><input type = "text" onChange = {(event) => props.onIDChange(event) }/>
            <hr></hr>
            <button onClick = {props.redirectClientInformation}> Client Information </button>
            <button onClick = {props.redirectBap}>Behavioral Action Plan</button>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        cID: state.clientID
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onIDChange: (event) => dispatch({type: actionTypes.ID_UPDATE, value: event.target.value})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(addClient);