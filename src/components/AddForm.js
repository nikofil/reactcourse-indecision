import React from 'react'

export default class AddForm extends React.Component {
    state = { err: undefined }

    doSubmit = (e) => {
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

    removeAll = () => {
        this.props.clearOps()
    }

    render() {
        return (
            <div>
                <form key="f" onSubmit={ this.doSubmit }>
                    <input className="widget__input" type="text" name="option" />
                    <button className="button">Add</button>
                </form>
                <button className="button--link" key="click" onClick={ this.removeAll }>Remove all</button>
                {this.state.err && <p className="widget__message">{ this.state.err }</p>}
            </div>
        )
    }
}