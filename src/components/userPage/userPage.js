import React from 'react';

const userPage = props =>{

    return(<div>
        <button>
            Sign Out
        </button>

        <button onClick = {props.redirectFavoriteClients}>
            My Clients
        </button>
        
        <button onClick = {props.redirectExistingClients}>
            Existing Clients
        </button>
        
        <button onClick = {props.redirectJournal}>
            Journal
        </button>

        <button onClick = {props.redirectAddClient}>
            Add Client
        </button>
    </div>
);
    
    
}


export default userPage;