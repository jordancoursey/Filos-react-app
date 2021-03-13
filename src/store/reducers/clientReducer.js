import * as actionTypes from '../actions';

const initialState = {
    clientID: '',
    patientName: '',
    patientBirthday: '',
    parentInfo: '',
    homeAddress: '',
    emailAddress: '',
    phoneNumber: '',
    problematicBehaviorArray: [{id: 1, name: '', data: '', opDef: '', funcOfBehavior: '', otherNotes: '', details: '', metric: 'Duration'}],
    functionalGoalArray: [{id: 1, name: '', data: '', description: '', notes: '', metric: 'Duration'}],
    communicationGoalArray: [{id: 1, name: '', data: '', description: '', notes: '', isFiveTrials: true}],
    supervisor: '',
    primaryRBT: '',
    sessionTimes: '',
    dateUpdated: '',
    preferences: '',
    dislikes: '',
    needsSuccess: '',
    antecedentStrategies: '',
    procedure1: '',
    procedure2: '',
    positiveBehavioralTeachingStrategies: '', 
};

const clientReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ID_UPDATE:
            return {
                ...state,
                clientID: action.value
            }
        case actionTypes.PATIENT_NAME_UPDATE:
            return{
                ...state,
                patientName: action.value
            }
        case actionTypes.PATIENT_BIRTHDAY_UPDATE:
            return{
                ...state,
                patientBirthday: action.value
            }
        case actionTypes.EMAIL_ADDRESS_UPDATE:
            return{
                ...state,
                emailAddress: action.value
            }
        case actionTypes.ADDRESS_UPDATE:
            return{
                ...state,
                homeAddress: action.value
            }
        case actionTypes.PHONE_NUMBER_UPDATE:
            return{
                ...state,
                phoneNumber: action.value
            }
        case actionTypes.PROBLEMATIC_BEHAVIOR_UPDATE:
            const retArray = state.problematicBehaviorArray;
            if (action.whichBox === 0)
                retArray[action.id - 1].name = action.value;
            else if (action.whichBox === 1)
                retArray[action.id - 1].opDef = action.value;
            else if (action.whichBox === 2)
                retArray[action.id - 1].funcOfBehavior = action.value;
            else if (action.whichBox === 3)
                retArray[action.id - 1].otherNotes = action.value;
            else if (action.whichBox === 4)
                retArray[action.id - 1].details = action.value;
            else if (action.whichBox === 5)
                retArray[action.id - 1].metric = action.value;
            return {
                ...state,
                problematicBehaviorArray: retArray
            }
        case actionTypes.ADD_PROBLEMATIC_BEHVAIOR:
            return {
                ...state,
                problematicBehaviorArray: state.problematicBehaviorArray.concat({id: action.id, name: '', data: '', opDef: '', funcOfBehavior: '', otherNotes: '', details: '', metric: 'Duration'})
            }
        case actionTypes.FUNCTIONAL_GOAL_UPDATE:
            const functionalRetArray = state.functionalGoalArray;
            if (action.whichBox === 0)
                functionalRetArray[action.id - 1].name = action.value;
            else if (action.whichBox === 1)
                functionalRetArray[action.id - 1].description = action.value;
            else if (action.whichBox === 2)
                functionalRetArray[action.id - 1].notes = action.value;
            else if (action.whichBox === 3)
                functionalRetArray[action.id - 1].metric = action.value;
            return{
                ...state,
                functionalGoalArray: functionalRetArray
            }
        case actionTypes.ADD_FUNCTIONAL_BEHAVIOR:
            return{
                ...state,
                functionalGoalArray: state.functionalGoalArray.concat({ id: action.id, name: '', data: '', description: '', notes: '', metric: 'Duration'})
            }
        case actionTypes.COMMUNICATION_GOAL_UPDATE:
            const communicationRetArray = state.communicationGoalArray;
            if (action.whichBox === 0)
            communicationRetArray[action.id - 1].name = action.value;
            else if (action.whichBox === 1)
            communicationRetArray[action.id - 1].description = action.value;
            else if (action.whichBox === 2)
            communicationRetArray[action.id - 1].notes = action.value;
            return{
                ...state,
                communicationGoalArray: communicationRetArray
            }
        case actionTypes.ADD_COMMUNICATION_GOAL:
            return{
                ...state,
                communicationGoalArray: state.communicationGoalArray.concat({ id: action.id, name: '', data: '', description: '', notes: '', isFiveTrials: true})
            }
        case actionTypes.COMMUNICATION_TRIAL_BUTTON:
            const communicationRetArray1 = state.communicationGoalArray;
            if(action.whichBox === 0)
                communicationRetArray1[action.id - 1].isFiveTrials = true;
            else if(action.whichBox === 1)
                communicationRetArray1[action.id - 1].isFiveTrials = false;
            return{
                ...state,
                communicationGoalArray: communicationRetArray1
            }
        case actionTypes.TOP_OF_PAGE_UPDATE:
            if (action.whichBox === 0){
                return {
                    ...state,
                    supervisor: action.value
                }
            }
            else if (action.whichBox === 1){
                return {
                    ...state,
                    primaryRBT: action.value
                }
            }
            else if (action.whichBox === 2){
                return {
                    ...state,
                    sessionTimes: action.value
                }
            }
            else {
                return {
                    ...state,
                    dateUpdated: action.value
                }
            }
        case actionTypes.CLIENT_DESCRIPTION_UPDATE:
            if (action.whichBox === 0){
                return {
                    ...state,
                    preferences: action.value
                }
            }
            else if (action.whichBox === 1){
                return {
                    ...state,
                    dislikes: action.value
                }
            }
            else {
                return {
                    ...state,
                    needsSuccess: action.value
                }
            }
        case actionTypes.BOTTOM_OF_PAGE_UPDATE:
            if (action.whichBox === 0){ 
                return{
                    ...state,
                    antecedentStrategies: action.value
                }
            }
            else if (action.whichBox === 1){
                return {
                    ...state,
                    procedure1: action.value
                }
            }
            else if (action.whichBox === 2){
                return {
                    ...state,
                    positiveBehavioralTeachingStrategies: action.value
                }
            }
            else {
                return {
                    ...state,
                    procedure2: action.value
                }
            }
        default:
            return state;
    }
};

export default clientReducer;