import React from 'react'
import OptionsView from './OptionsView'
import AddForm from './AddForm'
import RandomSelector from './RandomSelector'
import Header from './Header'

export default class IndecisionApp extends React.Component {
    state = {
        ops: this.props.defOps
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
        } else {
            console.log('data didn\'t change')
        }
    }

    addItem = (item) => {
        if (this.state.ops.includes(item)) {
            return false
        }
        this.setState((s) => ({
            ops: [...s.ops, item]
        }))
        return true
    }

    clearOps = () => {
        this.setState(() => ({
            ops: []
        }))
    }

    deleteItem = (i) => {
        console.log(`deleting item #${i}`)
        this.setState((s) => ({
            ops: [...s.ops.slice(0, i), ...s.ops.slice(i+1, s.ops.length)]
        }))
    }

    render() {
        let ops = this.state.ops
        return (
            <div>
                <Header title={this.props.appName} subtitle="Put your life in the hands of a computer" />
                <div className="container">
                    <OptionsView deleteItem={ this.deleteItem } ops={ ops } />
                    <AddForm addItem={ this.addItem } clearOps={ this.clearOps } />
                    <RandomSelector ops={ ops } />
                </div>
            </div>
        )
    }
}

IndecisionApp.defaultProps = { defOps: ['Default 1', 'Default 2', 'Default 3'] }