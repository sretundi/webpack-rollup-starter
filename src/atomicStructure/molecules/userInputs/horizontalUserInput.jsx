
import React from 'react';

import TextInput from '../../atoms/inputs/textInput.jsx';
import ButtonCommon from '../../atoms/buttons/buttonCommon.jsx';
import { SmallLabel } from '../../atoms/labels.jsx';

import styles from './horizontalUserInput.css';

export default function(props) {
    return (
        <div className={styles.horizontalUserInputContainer}>
            <SmallLabel
                label='Enter Todo Below'
            />
            <div 
                className={styles['l-horizontalInput']}
            >
                <TextInput
                    className={styles['b-largeTextInput']}
                    {...props}
                />
                < ButtonCommon 
                    className={styles['l-horizontalInput_btn']}
                    {...props}
                /> 
            </div>
        </div>
    )
}

