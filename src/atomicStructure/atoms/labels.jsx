
import React from 'react';

import styles from './atoms.css';

export const SmallLabel = (props) => {
    return (
        <div
            className={styles['b-smallLabel']}
        >
            {`${props.label || 'oops something went wrong'}`}
        </div>
    )
}


