import React, { Component } from 'react';
import Select from 'react-select';
import './Question.css';

class Question extends Component {

    onChange = (value) => {
        const { onChange, question } = this.props;
        onChange(value, question.number);
    }

    render() {
        const { question } = this.props;
        const { number, text, options, value } = question;
        return (
            <div className="question">
                <div className="form-group">
                    <label htmlFor="number">{number}. {text}</label>
                    <Select
                        name="number"
                        value={value}
                        options={options}
                        onChange={this.onChange}
                        required={true}
                    />
                </div>
            </div>
        );
    }
}

export default Question;
