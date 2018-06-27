import React from 'react'
import Modal from 'react-modal'

export default class RandomSelector extends React.Component {
    state = {
        selectedOpt: undefined
    }

    makeSel = () => {
        let ops = this.props.ops
        const choice = Math.floor(Math.random() * ops.length)
        console.log(`Selected: ${ops[choice]}`)
        this.setState((s) => ({ selectedOpt: ops[choice] }))
    }
    
    closeModal = () => {
        this.setState((s) => ({ selectedOpt: undefined }))
    }

    render() {
        return [
            <Modal key="modal"
                contentLabel="Selected option"
                onRequestClose={ this.closeModal }
                appElement={ document.getElementById('app') }
                isOpen={ !!this.state.selectedOpt }>
                <h3>Selected option</h3>
                <div>{ this.state.selectedOpt }</div>
                <button onClick={ this.closeModal }>Close</button>
            </Modal>,
            <button className="big-button" key="btn" disabled={ this.props.ops.length == 0 } onClick={ this.makeSel }>Select random</button>
        ]
    }
}