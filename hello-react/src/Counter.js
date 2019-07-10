import React, { Component } from 'react';

class Counter extends Component {
    state = {
        number: 0
    }
    handleIncrease = () => {
        //setState 거쳐야 리랜더링 하도록 설계되어 있다.
        const { number } = this.state;
        this.setState({
            number: number + 1
        })
    }
    handleDecrease = () => {
        // const { number } = this.state;
        this.setState((state) => ({
            number: state.number - 1
        }))
    }

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>값: {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}
export default Counter;