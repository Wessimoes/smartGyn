import React from 'react';

const style = {
    color: '#b1b1b1',
    fontSize: '11pt',
    marginTop: 15,
    marginBottom: 5,
};

export const TextFieldReadOnly = (props) => {
    return (
        <div style={{marginBottom: 15}}>
            <label style={style}>{props.rotulo}</label>
            <br/>
            <div style={{ fontSize: '15px', whiteSpace: 'pre-wrap', wordWrap: 'break-word' }} >
                {props.valor}
            </div>
        </div>
    );
};
