import React from 'react'

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
        return (
            <div>
                <div>{ this.state.err }</div>
                <form key="f" onSubmit={ (e) => this.doSubmit(e) }>
                    <input type="text" name="option" />
                    <button>Add</button>
                </form>
                <button key="click" onClick={ this.removeAll.bind(this) }>Remove all</button>
            </div>
        )
    }
}

export default AddForm