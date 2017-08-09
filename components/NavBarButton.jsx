import FlatButton from 'material-ui/FlatButton';
import React from 'react';

const buttonStyle = {
    position: 'relative',
    top: '10px',
    margin: '0px'
};

const NavBarButton = ({title, push}) => (
    <FlatButton
        label={title}
        style={buttonStyle}
        onClick={() => push(title.toLowerCase().replace(/ /g,''))}
    />
)

export default NavBarButton;