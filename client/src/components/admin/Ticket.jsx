import React from 'react';

function Ticket(props) {
    return (
        <React.Fragment>
            <div id="ticket-body">
                <div id="ticket-description">
                    <h5>{props.firstName}, {props.lastName}</h5>
                    <h6>{props.phone} || {props.email}</h6>
                    <p>{props.description}</p>
                    <hr />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Ticket;