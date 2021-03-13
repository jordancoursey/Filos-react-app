import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/actions';
import classes from './behavioralActionPlan.module.css';

class BehavioralActionPlan extends Component {

    state = {
        pbxObject: [
            <div>
                <input placeholder="Problematic Behavior 1" onChange={(event) => this.props.onPBxChange(event, 1, 0)}></input>
                <input placeholder="Operational Definition" onChange={(event) => this.props.onPBxChange(event, 1, 1)}></input>
                <input placeholder="Function of Behavior" onChange={(event) => this.props.onPBxChange(event, 1, 2)}></input>
                <input placeholder="Other Notes" onChange={(event) => this.props.onPBxChange(event, 1, 3)}></input>
                <select onChange={(event) => this.props.onPBxChange(event, 1, 5)}>
                    <option value="Duration">Duration</option>
                    <option value="Latency">Latency</option>
                    <option value="Frequency">Frequency</option>
                </select>
                <input placeholder="Details" onChange={(event) => this.props.onPBxChange(event, 1, 4)}></input>
            </div>
        ],
        fbxObject: [
            <div>
                <input placeholder="Functional Goal 1" onChange={(event) => this.props.onFBxChange(event, 1, 0)}></input>
                <input placeholder="Description" onChange={(event) => this.props.onFBxChange(event, 1, 1)}></input>
                <input placeholder="Notes" onChange={(event) => this.props.onFBxChange(event, 1, 2)}></input>
                <select onChange={(event) => this.props.onFBxChange(event, 1, 3)}>
                    <option value="Duration">Duration</option>
                    <option value="Latency">Latency</option>
                    <option value="Frequency">Frequency</option>
                </select>
            </div>
        ],
        cbxObject: [
            <div>
                <input placeholder="Communication Goal 1" onChange={(event) => this.props.onCBxChange(event, 1, 0)}></input>
                <input placeholder="Description" onChange={(event) => this.props.onCBxChange(event, 1, 1)}></input>
                <input placeholder="Notes" onChange={(event) => this.props.onCBxChange(event, 1, 2)}></input>
                <div className="btn-group">
                    <button onClick={() => this.props.onCBxButton(1, 0)}>5</button>
                    <button onClick={() => this.props.onCBxButton(1, 1)}>10</button>
                </div>
            </div>
        ]
    }

    addPBX = () => {
        let id = this.state.pbxObject.length + 1;
        const newArray = this.state.pbxObject.concat(
            <div>
                <input id={id} placeholder={"Problematic Behavior " + (id)} onChange={(event) => this.props.onPBxChange(event, id, 0)}></input>
                <input placeholder="Operational Definition" onChange={(event) => this.props.onPBxChange(event, id, 1)}></input>
                <input placeholder="Function of Behavior" onChange={(event) => this.props.onPBxChange(event, id, 2)}></input>
                <input placeholder="Other Notes" onChange={(event) => this.props.onPBxChange(event, id, 3)}></input>
                <select onChange={(event) => this.props.onPBxChange(event, id, 5)}>
                    <option value="Duration">Duration</option>
                    <option value="Latency">Latency</option>
                    <option value="Frequency">Frequency</option>
                </select>
                <input placeholder="Details" onChange={(event) => this.props.onPBxChange(event, id, 4)}></input>
            </div>)
        this.setState({ pbxObject: newArray });
        this.props.addPBxGoal(id)
    }

    addFBx = () => {
        let id = this.state.fbxObject.length + 1;
        const newArray = this.state.fbxObject.concat(
            <div>
                <input placeholder={"Functional Goal " + id} onChange={(event) => this.props.onFBxChange(event, id, 0)}></input>
                <input placeholder="Description" onChange={(event) => this.props.onFBxChange(event, id, 1)}></input>
                <input placeholder="Notes" onChange={(event) => this.props.onFBxChange(event, id, 2)}></input>
                <select onChange={(event) => this.props.onFBxChange(event, id, 3)}>
                    <option value="duration">Duration</option>
                    <option value="Latency">Latency</option>
                    <option value="Frequency">Frequency</option>
                </select>
            </div>)
        this.setState({ fbxObject: newArray });
        this.props.addFBxGoal(id);
    }

    addCBx = () => {
        let id = this.state.cbxObject.length + 1;
        const newArray = this.state.cbxObject.concat(
            <div>
                <input placeholder={"Communication Goal " + id} onChange={(event) => this.props.onCBxChange(event, id, 0)}></input>
                <input placeholder="Description" onChange={(event) => this.props.onCBxChange(event, id, 1)}></input>
                <input placeholder="Notes" onChange={(event) => this.props.onCBxChange(event, id, 2)}></input>
                <div className="btn-group">
                    <button onClick={() => this.props.onCBxButton(id, 0)}>5</button>
                    <button onClick={() => this.props.onCBxButton(id, 1)}>10</button>
                </div>
            </div>)
        this.setState({ cbxObject: newArray });
        this.props.addCBxGoal(id);
        console.log(this.props.cbxArray);
    }

    patientinfoBox = (label, patientID, identifier, date) => {
        const isDate = date ? "date" : "text"
        const input = patientID ? <input value={this.props.clientID} readOnly></input> : <input type={isDate} onChange={(event) => this.props.onTopUpdate(event, identifier)}></input>;
        return (
            <div className={classes.PatientInfoRow}>
                <div className={classes.leftBox}>
                    <p>{label}</p>
                </div>
                <div className={classes.rightBox}>
                    {input}
                </div>
            </div>
        )
    }

    strategyHeader = (leftLabel, rightLabel, top) => {
        const input = top ? (<div className={classes.strategyBox}>
            <textarea onClick={(event) => this.props.onBottomUpdate(event, 0)} />
            <textarea onClick={(event) => this.props.onBottomUpdate(event, 1)} />
        </div>) : (<div className={classes.strategyBox}>
            <textarea onClick={(event) => this.props.onBottomUpdate(event, 2)} />
            <textarea onClick={(event) => this.props.onBottomUpdate(event, 3)} />
        </div>)
        return (
            <div>
                <div className={classes.strategyHeader}>
                    <div><p>{leftLabel}</p></div>
                    <div><p>{rightLabel}</p></div>
                </div>
                {input}

            </div>
        )
    }

    render() {
        return (
            <div className={classes.Main}>
                <div>
                    <button onClick={this.props.redirectAddClient}>Back</button>
                </div>
                <hr></hr>
                <div className = {classes.Body}>
                    <div>
                        <button onClick={() => console.log(this.props.debug)}>debug</button>
                        {this.patientinfoBox("Patient ID", true)}
                        {this.patientinfoBox("BCBA", true)}
                        {this.patientinfoBox("Supervisor", false, 0)}
                        {this.patientinfoBox("Primary RBT", false, 1)}
                        {this.patientinfoBox("Session Times", false, 2)}
                        {this.patientinfoBox("Date Updated", false, 3, true)}
                    </div>
                    <div className={classes.clientDescriptionBox}>
                        <div className={classes.clientDescriptionBoxHeader}>
                            <p><strong>Client Description</strong></p>
                        </div>
                        <div className={classes.clientDescriptionBoxLabels}>
                            <div><p>Preferences:</p></div>
                            <div>Dislikes:</div>
                            <div>Needs To Be Successful:</div>
                        </div>
                        <div className={classes.clientDescriptionBoxText}>
                            <textarea onChange={(event) => this.props.onDescriptionChange(event, 0)} />
                            <textarea onChange={(event) => this.props.onDescriptionChange(event, 1)} />
                            <textarea onChange={(event) => this.props.onDescriptionChange(event, 2)} />
                        </div>
                    </div>
                    <div className = {classes.Behavior}>
                        <p><strong>Behavioral Targets and Goals</strong></p>
                        {this.state.pbxObject}
                        <button onClick={() => { this.addPBX() }}>Add New Behavior</button>
                    </div>
                    <hr></hr>
                    <div className = {classes.Behavior}>
                        <p><strong>Functional and Replacement Behavior Goals</strong></p>
                        {this.state.fbxObject}
                        <button onClick={() => { this.addFBx() }}>Add New Functional Goal</button>
                    </div>
                    <hr></hr>
                    <div className = {classes.Behavior}>
                        <p><strong>Repetitive/Expressive Communication</strong></p>
                        {this.state.cbxObject}
                        <button onClick={() => { this.addCBx() }}>Add New Communication Goal</button>
                    </div>
                    <div className={classes.strategyWhole}>
                        {this.strategyHeader("Antecedent Strategies", "Procedures 1", true)}
                        {this.strategyHeader("Positive Teaching Strategies", "Procedures 2", false)}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        fbxArray: state.functionalGoalArray,
        cbxArray: state.communicationGoalArray,
        pbxArray: state.problematicBehaviorArray,
        debug: state.procedure1
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPBxChange: (event, id, identifier) => dispatch({ type: actionTypes.PROBLEMATIC_BEHAVIOR_UPDATE, value: event.target.value, id: id, whichBox: identifier }),
        addPBxGoal: (id) => dispatch({ type: actionTypes.ADD_PROBLEMATIC_BEHVAIOR, id: id }),
        onFBxChange: (event, id, identifier) => dispatch({ type: actionTypes.FUNCTIONAL_GOAL_UPDATE, value: event.target.value, id: id, whichBox: identifier }),
        addFBxGoal: (id) => dispatch({ type: actionTypes.ADD_FUNCTIONAL_BEHAVIOR, id: id }),
        onCBxChange: (event, id, identifier) => dispatch({ type: actionTypes.COMMUNICATION_GOAL_UPDATE, value: event.target.value, id: id, whichBox: identifier }),
        addCBxGoal: (id) => dispatch({ type: actionTypes.ADD_COMMUNICATION_GOAL, id: id }),
        onCBxButton: (id, identifier) => dispatch({ type: actionTypes.COMMUNICATION_TRIAL_BUTTON, id: id, whichBox: identifier }),
        onTopUpdate: (event, identifier) => dispatch({ type: actionTypes.TOP_OF_PAGE_UPDATE, value: event.target.value, whichBox: identifier }),
        onDescriptionChange: (event, identifier) => dispatch({ type: actionTypes.CLIENT_DESCRIPTION_UPDATE, value: event.target.value, whichBox: identifier }),
        onBottomUpdate: (event, identifier) => dispatch({ type: actionTypes.BOTTOM_OF_PAGE_UPDATE, value: event.target.value, whichBox: identifier })
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(BehavioralActionPlan);