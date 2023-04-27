import React from 'react';

const earlyYearsImageUrl = 'https://i.redd.it/962iylmrszk51.png'

function EarlyYearsImg () {
    return (
        <div className = 'early-years-image'>
            <img 
            src = {earlyYearsImageUrl} 
            alt =""
            />
        </div>
    );
}
export default EarlyYearsImg;