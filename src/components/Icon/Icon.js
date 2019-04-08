import React from 'react';

const Icon = (props) => {
    return (
        <i className={"material-icons-outlined " + props.style}>
            {props.children}
        </i>
    )
}

export default Icon;