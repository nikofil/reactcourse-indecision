import React from 'react'

function Option(props) {
    return <div className="option"><p className="option__text">{props.idx}. { props.children || '-' }</p><button className="button--link" onClick={ props.deleteItem }>Remove</button></div>
}

export default Option