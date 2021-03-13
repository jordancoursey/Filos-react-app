import React from 'react';

const favoriteClients = props =>{
    return(
    <div>
        hi im ur favorite client
        <button onClick = {props.redirectUserPage}>Back</button>
    </div>
    );
    
}


export default favoriteClients;