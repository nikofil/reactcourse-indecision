import React from 'react'
import ReactDOM from 'react-dom'
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

let templ = <IndecisionApp appName='Indecision app' />
ReactDOM.render(templ, document.getElementById('app'))