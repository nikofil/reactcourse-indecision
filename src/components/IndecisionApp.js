import React from 'react'
import OptionsView from './OptionsView'
import AddForm from './AddForm'

class IndecisionApp extends React.Component {
    constructor(props) {
        super(...arguments)
        this.state = {
            ops: this.props.ops
        }
    }

    componentDidMount() {
        console.log('fetching data')
        let data = JSON.parse(localStorage.getItem('ops'))
        if (data) {
            this.setState(() => ({ops: data}))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.ops.length != this.state.ops.length) {
            console.log('saving data')
            let data = JSON.stringify(this.state.ops)
            localStorage.setItem('ops', data)
        } else if (1) {
            console.log('data didn\'t change')
        } else {
        alert(1)
        }
    }

    addItem(item) {
        if (this.state.ops.includes(item)) {
            return false
        }
        this.setState((s) => ({
            ops: [...s.ops, item]
        }))
        return true
    }

    clearOps() {
        this.setState(() => ({
            ops: []
        }))
    }

    makeSel() {
        let ops = this.state.ops
        const choice = Math.floor(Math.random() * ops.length)
        alert(ops[choice])
    }

    deleteItem(i) {
        console.log(`deleting item #${i}`)
        this.setState((s) => ({
            ops: [...s.ops.slice(0, i), ...s.ops.slice(i+1, s.ops.length)]
        }))
    }

    render() {
        let ops = this.state.ops
        return (
            <div>
                <h1>{this.props.appName}</h1>
                <OptionsView deleteItem={ this.deleteItem.bind(this) } ops={ ops } />
                <AddForm addItem={ this.addItem.bind(this) } clearOps={ this.clearOps.bind(this) } />
                <button disabled={ops.length == 0} onClick={ this.makeSel.bind(this) }>Select random</button>
            </div>
        )
    }
}

IndecisionApp.defaultProps = { ops: [] }

export default IndecisionApp