import React from 'react'
import Option from './Option'

function OptionsView(props) {
    let ops = props.ops
    return (
        <div>
            { ops.length > 0 ? <p>You have these options:</p> : <p>No options</p> }
            <ol>
                { ops.map((x, i) => <Option deleteItem={ () => props.deleteItem(i) } key={i}><span>{x}</span></Option>) }
            </ol>
        </div>
    )
}

export default OptionsView