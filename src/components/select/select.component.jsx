import React from "react";

import './select.styles.scss';

const Select = ({coins}) => (
    <div>
        <select name="coin" id="coin-select">
            {
                coins.map(coin => (
                    <option key={coin.id} value={coin.coin}>{coin.coin}</option>
                ))
            }
        </select>
    </div>
)

export default Select;