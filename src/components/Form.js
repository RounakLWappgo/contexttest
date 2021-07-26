import React, { Component } from 'react'
import langContext from './langContext';

export class Form extends Component {
    static contextType = langContext;
    constructor(props) {
        super(props)

       
        this.state = {
             
        }
    }
    
    render() {

        const text = this.context === "english" ? "Name" : "नाम" ;
        const btntext = this.context === "english" ? "Submit" : "प्रस्तुत" ;
        return (
           
            <div>
                <input type="text" placeholder={text} />
                <button>{btntext}</button>
            </div>
        )
    }
}

export default Form
