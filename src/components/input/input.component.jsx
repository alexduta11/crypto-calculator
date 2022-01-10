import React from "react";

import './input.styles.scss';

const Input = ({valoare}) => (
    <div>
        <label htmlFor="">{valoare.charAt(0).toUpperCase() + valoare.slice(1)}: </label>
        <input type="number" placeholder={valoare} id="value" onInput={(e) => {
            if(e.target.value < 0){
                e.target.value = 0;
            }
        }} />
    </div>
);

export default Input;