import React from "react";

import './container.styles.scss';

import Input from "../input/input.component";
import Select from "../select/select.component";

const Container = ({coins, result}) => (
    <div className="container">
        <Input valoare="number of coins" />
        <Select coins={coins} />
        <button onClick={() => {
            coins.forEach(coin => 
                {
                    if(document.getElementById('value').value != ''){
                        if(coin.coin === document.getElementById('coin-select').value){
                            result = (parseFloat(document.getElementById('value').value) * parseFloat(coin['coin/usd'])).toFixed(3)
                            document.getElementById('result').innerHTML = `Your balance is ${result}$`;
                            document.querySelector('#result').style.display = 'flex';
                        }
                    }
                }
            )
        }}>
        Calculate</button>
        <p id="result" style={{display: "none"}}></p>
    </div>
);

export default Container;