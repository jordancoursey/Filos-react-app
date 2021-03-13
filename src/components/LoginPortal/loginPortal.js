import React, { Component } from 'react';
import { connect } from 'react-redux';

class loginPortal extends Component {

    state = {
        credentials: {
            userName: {
                value: '',
                valid: false
            },
            password: {
                value: '',
                valid: false
            }
        }
    }

    inputChange = (event, id) => {
        if(id === 1){
            const updatedCred = {
                ...this.state.credentials,
                username: {
                    ...this.state.credentials.username,
                    value: event.target.value
                }
            }
            this.setState({credentials: updatedCred});
        }
        else if(id === 2){
            this.checkPassValidity(event.target.value);
        }
    }

    checkPassValidity = (pass) => {
        
    }

    render () {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input placeholder = "Username" onChange={(event) => this.inputChange(event, 1)}></input>
                    <input placeholder = "Password" onChange={(event) => this.inputChange(event, 2)}></input>
                    <button>SUBMIT</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(null, mapDispatchToProps)(loginPortal);