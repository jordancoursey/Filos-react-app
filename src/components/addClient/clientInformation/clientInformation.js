import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import classes from './clientInformation.module.css';

const clientInformation = props =>{
    return(
        <div>
            <button onClick = {props.redirectAddClient}>Back</button>
            <div className = {classes.Input}>
            
                <h2>Client ID: {props.clientID}</h2>
                <div>
                    <label>Full Name:</label><input type = "text" onChange = {(event) => props.onPatientNameChange(event)}></input>
                </div>
                <div>
                    <label>Patient Birthday:</label><input type = "date" onChange = {(event) => props.onPatientBirthdayChange(event)}></input>
                </div>
                <div>
                    <label>Guardian Email Address:</label><input type = "email" placeholder = "example@filos.com" onChange = {(event) => props.onEmailAddressChange(event)}></input>
                </div>
                <div>
                    <label>Home Address:</label><input type = "text" onChange = {(event) => props.onAddressChange(event)}></input>
                </div>
                <div>
                    <label>Phone Number:</label><input type = "text" onChange = {(event) => props.onPhoneChange(event)}></input>
                </div>
                {props.phone}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return{
        patName: state.patientName,
        patBirthday: state.patientBirthday,
        parInfo: state.parentInfo,
        homeAddr: state.homeAddress,
        email: state.emailAddress,
        phone: state.phoneNumber
    };
};

const mapDispatchToProps = dispatch => {
    return{
        onPatientNameChange: (event) => dispatch({type: actionTypes.PATIENT_NAME_UPDATE, value: event.target.value}),
        onPatientBirthdayChange: (event) => dispatch({type: actionTypes.PATIENT_BIRTHDAY_UPDATE, value: event.target.value}),
        onEmailAddressChange: (event) => dispatch({type: actionTypes.EMAIL_ADDRESS_UPDATE, value: event.target.value}),
        onAddressChange: (event) => dispatch({type: actionTypes.ADDRESS_UPDATE, value: event.target.value}),
        onPhoneChange: (event) => dispatch({type: actionTypes.PHONE_NUMBER_UPDATE, value: event.target.value})
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(clientInformation);