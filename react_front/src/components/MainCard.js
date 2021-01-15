import React from 'react';

function MainCard(props) {


    return (
        <>
            <div className="main_card card">
                <div>
                    <p>Dinero disponible</p>
                    <span>${props.getTotal()}</span>
                </div>
            </div>
        </>
    )
}

export default MainCard;
