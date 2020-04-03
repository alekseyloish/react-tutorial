import React, { Component, Fragment } from 'react';

const POSITIONS = [
    {
        id: 'fe',
        value: 'Front-End Developer',
        title: 'Front-End Developer',
    },
    {
        id: 'be',
        value: 'Back-End Developer',
        title: 'Back-End Developer',
    },
    {
        id: 'fs',
        value: 'Fullstack Developer',
        title: 'Fullstack Developer',
    }
];

class Form extends Component {

    state = {
        inputText: '',
        textareaText: '',
        selectText: POSITIONS[0].value,
        showData: {
            name: '',
            text: '',
            position: '',
        }
    }

    inputRef = React.createRef();
    textareaRef = React.createRef();
    selectRef = React.createRef();

    handleChange = () => {
        this.setState({
            inputText: this.inputRef.current.value,
            textareaText: this.textareaRef.current.value,
            selectText: this.selectRef.current.value,
        });
    }

    handleShow = (e) => {
        e.preventDefault();

        const { inputText, textareaText, selectText } = this.state;

        this.setState({
            inputText: '',
            textareaText: '',
            selectText: '',
            showData: {
                name: inputText,
                text: textareaText,
                position: selectText,
            }
        });
    }

    render() {
        const {inputText, textareaText, selectText, showData} = this.state;
        const {name, text, position} = showData;

        return(
            <Fragment>
                <form >
                    {/* Input */}
                    <label>
                        Name:
                        <input
                            ref={this.inputRef}
                            type="text"
                            name="name"
                            id="name"
                            value={inputText}
                            onChange={this.handleChange}
                        />
                    </label>

                    {/* TextArea */} <br/>
                    <label htmlFor="text">Text:</label>
                    <textarea
                        ref={this.textareaRef}
                        name="text"
                        id="text"
                        value={textareaText}
                        onChange={this.handleChange}
                    />

                    {/* Select */} <br/>
                    <select
                        ref={this.selectRef}
                        value={selectText}
                        onChange={this.handleChange}>
                        {POSITIONS.map( ({id, value, title}) => (
                            <option key={id} value={value}>{title}</option>
                        ))}
                    </select>

                    {/* Button */} <br/>
                    <button onClick={this.handleShow}>Show</button>
                </form>
                <hr/>

                <h2>{name}</h2>
                <h3>{text}</h3>
                <h4>{position}</h4>
            </Fragment>
        );
    }
}

export default Form;