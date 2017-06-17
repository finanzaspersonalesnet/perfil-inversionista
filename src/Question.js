import React, { Component } from 'react';
import Select from 'react-select';
import './Question.css';

class Question extends Component {

    render() {
        const { question } = this.props;
        const { number, text, options, value } = question;
        return (
            <div className="question">
                <div class="form-group">
                    <label for="age">{number}. {text}</label>
                    <Select
                        name="number"
                        value={value}
                        options={options}
                        onChange={onChange}
                    />
                </div>
            </div>
        );
    }
}

export default Question;
