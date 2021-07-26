import React, { Component } from 'react'
import Form from './Form'
import langContext from './langContext';

export class Translate extends Component {
    constructor(props) {
        super(props)
       
        this.state = {
             language: "english"
        }
    }
    handleLanguageChange = e => {
        this.setState({language: e});
    }
    
    render() {

        return (
            <div>
                <h2>Select language : </h2>
                <div><img src={process.env.PUBLIC_URL + "img/united-kingdom.png"} width="30px" onClick={() => this.handleLanguageChange('english')} alt=""/></div>
                <div><img src={process.env.PUBLIC_URL + "img/india.png"} width="30px" onClick={() => this.handleLanguageChange('hindi')} alt="" /></div>
                <div>
                    <langContext.Provider value={this.state.language} >
                    <Form/>
                    </langContext.Provider>
                </div>
            </div>
        )
    }
}

export default Translate
