
import React from 'react';

import styles from './buttons.css';

export default function(props) {
    return (
        <button
            // styleName={`${props.className || ''} button`}
            // styleName={` button`}
            className={`${props.className || ''} ${styles.button}`}
            onClick={props.onClick}
        >
            {`${props.buttonLabel || 'Click Me'}`}
        </button>
    ) 
}
