const appName = 'Indecision app';
let opts = []
const doSubmit = e => {
    e.preventDefault()
    const opt = e.target.elements.option.value
    console.log(`submit: ${opt}`)
    if (opt) {
        opts.push(opt)
        e.target.elements.option.value = ''
        rend()
    }
}
const removeAll = () => {
    opts = []
    rend()
}
const makeSel = () => {
    const choice = Math.floor(Math.random() * opts.length)
    alert(opts[choice])
}

const rend = () => {
let templ = <div>
    <h1>{appName}</h1>
    { opts.length > 0 ? <p>You have these options:</p> : <p>No options</p> }
    <ol>
        { opts.map((x, i) => <li key={i}>{x}</li>) }
    </ol>
    <form onSubmit={ doSubmit }>
        <input type="text" name="option" />
        <button>Add</button>
    </form>
    <button onClick={removeAll}>Remove all</button>
    <button disabled={opts.length == 0} onClick={makeSel}>Select random</button>
    </div>

ReactDOM.render(templ, document.getElementById('app'))
}
rend()