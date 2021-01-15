import React from 'react';

function InfoCard(props) {
    return (
        <>
            <div className="info_card card">
                <div>
                    <p>Último movimiento</p>
                    <span><span className="type_movement">{props.lastMovement ? props.lastMovement.type : '-'}</span> ${props.lastMovement ? props.lastMovement.qty : '0'}</span>
                </div>
            </div>
        </>
    )
}

export default InfoCard;