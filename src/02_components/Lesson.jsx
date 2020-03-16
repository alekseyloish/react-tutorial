import React, { Component } from 'react';

function Welcome() {
    return <h1>Hello world! test123!</h1>
}

class SecondWelcome extends Component {
    render() {
        return <h1>Hello world test1234!</h1>
    }
}

function Lesson() {
    return(
        <div>
            <Welcome />
            <SecondWelcome />
        </div>
    )
}

export default Lesson;