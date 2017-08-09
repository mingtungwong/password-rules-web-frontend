import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import FAQElement from './FAQElement.jsx';

const qa = {
    question: "What is my purpose?",
    answer: "Destroy all humans."
}

const FAQ = () => (
    
    <MuiThemeProvider>
    <div>
        <h3>Frequently Asked Questions</h3>
        <FAQElement question={qa.question} answer={qa.answer} />
    </div>
    </MuiThemeProvider>
)

export default FAQ;