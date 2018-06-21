// let templ = <p>Hello world</p>
let templ = React.createElement('p', null, 'Hello world')

ReactDOM.render(templ, document.getElementById('app'))