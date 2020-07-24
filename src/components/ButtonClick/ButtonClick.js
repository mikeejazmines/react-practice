import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            number: 0
        };
    }

    updateValue(val) {
        let num = this.state.number;


        if(val === 0){
            num = 0;
        } else if (val === 1){
            num += 1;
        } else if (val === -1) {
            num -= 1;
        }

        this.setState({number: num});
    }

    render() {
        return (
            <div>
                <h2>Button Click</h2>

                <p>The number on display should change based on the button clicked</p>
                <p>This small app would help me practice buttons and changing states</p>
                
                <div>
                    <h3>{this.state.number}</h3>
                    <button onClick={() => this.updateValue(1)}>+1</button> <button onClick={() => this.updateValue(0)}>0</button> <button onClick={() => this.updateValue(-1)}>-1</button>
                </div>
            </div>
        );
    }
}

export default App;