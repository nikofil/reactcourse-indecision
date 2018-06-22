class AddForm extends React.Component {
    doSubmit(e) {
        e.preventDefault()
        const opt = e.target.elements.option.value
        console.log(`submit: ${opt}`)
        if (opt) {
            this.props.addItem(opt)
            e.target.elements.option.value = ''
        }
    }

    removeAll() {
        this.props.clearOps()
    }

    render() {
        return ([
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
        this.setState((s) => ({
            ops: [...s.ops, item]
        }))
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