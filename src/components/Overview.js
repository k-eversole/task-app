import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Overview = (props) => {
    const { tasks, taskRemove } = props;

    return (
        <div>
        <ul>
            {tasks.map((element) =>
                <li key={element.id}>
                    {element.count}: {element.text}
                    <FontAwesomeIcon icon={ faCoffee } onClick={taskRemove(element.id)}></FontAwesomeIcon>
                    </li> )}
        </ul>
        </div>
        );
}

export default Overview;