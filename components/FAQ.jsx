import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const cardTitleStyle = {
    textAlign: 'left',
    fontWeight: 'bold'
}

const cardTextStyle = {
    textAlign: 'left',
    fontStyle: 'italic'
}

const FAQ = () => (
    
    <MuiThemeProvider>
    <div>
        <h3>Frequently Asked Questions</h3>
        <Card className="faqCard">
            <CardHeader
                title="This is a question"
                actAsExpander={true}
                showExpandableButton={true}
                style={cardTitleStyle}
            />
            <CardText
                expandable={true}
                style={cardTextStyle}
            >
                Blah blah blah
            </CardText>
        </Card>
    </div>
    </MuiThemeProvider>
)

export default FAQ;