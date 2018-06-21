const appName = 'Indecision app';
let optstore = []

class AddForm extends React.Component {
    doSubmit(e) {
        e.preventDefault()
        const opt = e.target.elements.option.value
        console.log(`submit: ${opt}`)
        if (opt) {
            this.props.opts.push(opt)
            e.target.elements.option.value = ''
            rend()
        }
    }

    removeAll() {
        let opts = this.props.opts
        opts.splice(0, opts.length)
        rend()
    }

    render() {
        let opts = this.props.opts
        return (
            <div>
                <form onSubmit={ (e) => this.doSubmit(e) }>
                    <input type="text" name="option" />
                    <button>Add</button>
                </form>
                <button onClick={ () => this.removeAll() }>Remove all</button>
            </div>
        )
    }
}

class OptionsView extends React.Component {
    render() {
        let opts = this.props.opts
        return (
            <div>
                { opts.length > 0 ? <p>You have these options:</p> : <p>No options</p> }
                <ol>
                    { opts.map((x, i) => <li key={i}>{x}</li>) }
                </ol>
            </div>
        )
    }
}

class IndecisionApp extends React.Component {
    constructor(props) {
        super(...arguments)
    }

    makeSel() {
        let opts = this.props.opts
        const choice = Math.floor(Math.random() * opts.length)
        alert(opts[choice])
    }

    render() {
        let opts = this.props.opts
        return (
            <div>
                <h1>{appName}</h1>
                <OptionsView opts={opts} />
                <AddForm opts={opts} />
                <button disabled={opts.length == 0} onClick={ () => this.makeSel() }>Select random</button>
            </div>
        )
    }
}

const rend = () => {
    let templ = <IndecisionApp opts={optstore} />
    ReactDOM.render(templ, document.getElementById('app'))
}
rend()