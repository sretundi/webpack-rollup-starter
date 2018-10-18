
import React from 'react';

import styles from './inputs.css';

export default function(props) {
    return ( 
        <input type='text' 
            // styleName={`${props.className || ''} b-textInput`}
            className={`${props.className} ${styles['b-textInput']}`}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
        /> 
    )
}
