import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const cardTitleStyle = {
    textAlign: 'left',
    fontWeight: 'bold'
}

const cardTextStyle = {
    textAlign: 'left',
    fontSize: '1.1em'
}

const FAQElement = ({ question, answer }) => (
    <Card className="faqCard">
        <CardHeader
            title={question}
            actAsExpander={true}
            showExpandableButton={true}
            style={cardTitleStyle}
        />
        <CardText
            expandable={true}
            style={cardTextStyle}
        >
            {answer}
        </CardText>
    </Card>
)

export default FAQElement;