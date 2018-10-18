
import React from 'react';

import RadioInput from '../atoms/inputs/radioInput.jsx';

export default function ListItem(props) {
    return (
        <ul>
            {mapListItems(props.items)}
        </ul>
    )
}

const mapListItems = (items) => {
    return items.map((item) => {
        return (
            <li>
                <RadioInput />
                {item}
            </li>
        )
    })
}

