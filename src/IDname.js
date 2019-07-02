import React from 'react';

const IDname = props => {
    return (
        <div className='container'>
            <h1 className='ui center aligned header'>
                {props.idname}
            </h1>
        </div>
    )
}

export default IDname;