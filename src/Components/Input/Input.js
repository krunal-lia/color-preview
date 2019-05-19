import React, { Component } from 'react';
import styleClasses from './Input.css';

class Input extends Component {

    change = (event) => {
        this.props.changed(event.target.value);
    }

    
    render() {
        return (
            <div>
                <h2 className={styleClasses.heading}>{this.props.value}</h2>
                <div>
                    <input type="color" onChange={this.change.bind(this)} className={styleClasses.input}></input>
                    
                </div>
            </div>
        );
    }
};

export default Input;