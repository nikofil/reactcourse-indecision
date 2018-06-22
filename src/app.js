class AddForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { err: undefined }
    }
    doSubmit(e) {
        e.preventDefault()
        const opt = e.target.elements.option.value
        console.log(`submit: ${opt}`)
        if (opt) {
            e.target.elements.option.value = ''
            if (this.props.addItem(opt)) {
                this.setState({ err: undefined })
            } else {
                this.setState({ err: 'This item already exists' })
            }
        } else {
            this.setState({ err: 'Please write a value' })
        }
    }

    removeAll() {
        this.props.clearOps()
    }

    render() {
        return ([
            <div>{ this.state.err }</div>,
            <form key="f" onSubmit={ (e) => this.doSubmit(e) }>
                <input type="text" name="option" />
                <button>Add</button>
            </form>,
            <button key="click" onClick={ this.removeAll.bind(this) }>Remove all</button>
        ])
    }
}

class OptionsView extends React.Component {
    render() {
        let ops = this.props.ops
        return (
            <div>
                { ops.length > 0 ? <p>You have these options:</p> : <p>No options</p> }
                <ol>
                    { ops.map((x, i) => <li key={i}>{x}</li>) }
                </ol>
            </div>
        )
    }
}

class IndecisionApp extends React.Component {
    constructor(props) {
        super(...arguments)
        this.state = {
            ops: []
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

    render() {
        let ops = this.state.ops
        return (
            <div>
                <h1>{this.props.appName}</h1>
                <OptionsView ops={ ops } />
                <AddForm addItem={ this.addItem.bind(this) } clearOps={ this.clearOps.bind(this) } />
                <button disabled={ops.length == 0} onClick={ this.makeSel.bind(this) }>Select random</button>
            </div>
        )
    }
}

let templ = <IndecisionApp appName='Indecision app' />
ReactDOM.render(templ, document.getElementById('app'))