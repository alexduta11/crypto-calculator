import React from "react";

import './homepage.styles.scss';

import Container from "../../components/container/container.component";

class Homepage extends React.Component{
    constructor(){
        super();

        this.state = {
            "coins": [
                {
                    'id': 1,
                    'coin': 'BTC',
                    'coin/usd': '46123'
                },
                {
                    'id': 2,
                    'coin': 'ETH',
                    'coin/usd': '3089'
                },
                {
                    'id': 3,
                    'coin': 'EGLD',
                    'coin/usd': '198'
                }
            ],
            'result': ''
        };
    }

    render() {
        return (
            <div className="homepage">
                <Container coins={this.state.coins} result={this.state.result} />
            </div>
        );
    }
}

export default Homepage;