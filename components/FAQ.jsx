import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FAQElement from './FAQElement.jsx';
import qa from '../faq.json'

const FAQ = () => (
    
    <MuiThemeProvider>
    <div>
        <h3>Frequently Asked Questions</h3>
        {
            qa.map(element => <FAQElement question={element.question} answer={element.answer} />)
        }
    </div>
    </MuiThemeProvider>
)

export default FAQ;