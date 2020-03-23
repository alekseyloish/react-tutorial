import React, { Component } from 'react';

const Counter = ({ counter, func, number, string}) => {
    console.log(counter, func, number, string);
    return <h1>{`Counter component. Counter value is: ${counter}`}</h1>
}

class CounterButton extends Component {
    state = {
        counter: 0,
    }

    handleClick = () => {
        this.setState( ({ counter }) => ({
            counter: ++counter,
        }));
    }

    render() {
        const { counter } = this.state;

        return(
            <div>
                <Counter
                    counter={counter}
                    func={() => {}}
                    number={10}
                    string={"test123"}
                />
                <button onClick={this.handleClick} >+1</button>
            </div>

        );
    }
}

export default CounterButton;