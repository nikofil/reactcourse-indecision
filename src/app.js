const appName = 'Indecision app';
let opts = ['a','b']
let count = 0
const add = () => {
    console.log('add')
    count++
    rend()
}
const sub = () => {
    console.log('sub')
    count--
    rend()
}
const reset = () => {
    console.log('res')
    count = 0
    rend()
}
let rend = () => {
let templ = <div>
    <h1>{appName}</h1>
    <p>Count: {count}</p>
    <button onClick={add} className="button">add</button>
    <button onClick={sub} className="button">sub</button>
    <button onClick={reset} className="button">reset</button>
    </div>

ReactDOM.render(templ, document.getElementById('app'))
}
rend()