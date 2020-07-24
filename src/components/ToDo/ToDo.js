import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            newItem: "",
            list:[]
        }
    }

    updateInput(key, value){
        this.setState({
            [key]: value
        });
    }

    addItem(){
        const newItem= {
            id: 1 + Math.random(),
            value: this.state.newItem.slice()
        };

        const list = [...this.state.list];

        list.push(newItem);

        this.setState({
            list, newItem: ""
        })
    }

    deleteItem(id){
        const list = [...this.state.list];

        const updatedList = list.filter(item => item.id !== id);

        this.setState({list: updatedList});
    }

    render() {
        return (
            <div>
                <h2>Simple To Do List</h2>

                <p>This code was taken from <a href="https://www.youtube.com/watch?v=e_ZibOe77yo">a short video on Youtube</a>. 
                    No code was altered and the example was used for me to familiarize myself with react components.</p>
                <p>This mini project allowed me to see how to adjust states</p>
                
                <div>
                    <h4>Add an Item</h4>
                    <input
                        type="text"
                        placeholder="Type item here..."
                        value={this.state.newItem}
                        onChange={e => this.updateInput("newItem", e.target.value)}
                    />
                    <button onClick={() => this.addItem()}> Add </button>

                    <br/>
                    <ul>
                    {this.state.list.map(item => {
                        return(
                            <li key={item.id}>{item.value} 
                                <button onClick={() => this.deleteItem(item.id)}>x</button>
                            </li>
                        )
                    })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;