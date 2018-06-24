import React from 'react'

function Option(props) {
    return <li><span>{ props.children || '-' }</span><button onClick={ props.deleteItem } style={ {color: 'red'} }>-</button></li>
}

export default Option