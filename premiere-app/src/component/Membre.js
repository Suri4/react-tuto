import React, { Fragment } from 'react';

const Membre = ({age, name, children}) => {
    return ( 
        <Fragment>
            <h2 > {name.toUpperCase()} : {age} </h2>
            { children ? <p>{children}</p> : <Fragment /> }
        </Fragment>
    )
}

export default Membre