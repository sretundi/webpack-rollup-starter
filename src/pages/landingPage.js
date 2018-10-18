import React from 'react';

import TodoOrganism from '../atomicStructure/organisms/todo/todoOrganism.jsx';

// import { landingPage, widgetOneContainer } from './styles/landingPage.css';
import styles from './styles/landingPage.css';


export default class LandingPage extends React.Component {
    render() {
        return (
            <div
                className={styles.landingPage}
            >
                <div
                    className={styles.widgetOneContainer}
                >
                    <TodoOrganism />
                </div>
            </div>
        )
    }
}
