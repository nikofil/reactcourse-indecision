import React from 'react'
import Option from './Option'

function OptionsView(props) {
    let ops = props.ops
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">{ ops.length > 0 ? <p>Your options</p> : <p>No options</p> }</h3>
                <div>{ props.children }</div>
            </div>
            { ops.map((x, i) => <Option idx={i+1} deleteItem={ () => props.deleteItem(i) } key={i}><span>{x}</span></Option>) }
        </div>
    )
}

export default OptionsView