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

const rend= () => {
let templ = <div>
    <h1>{appName}</h1>
    { opts.length > 0 ? <p>You have these options:</p> : <p>No options</p> }
    <ol>
        { opts.map((x, i) => <li key={i}>{x}</li>) }
    </ol>
    <form onSubmit={ doSubmit }>
        <input type="text" name="option" />
        <button submit>Add</button>
    </form>
    </div>

ReactDOM.render(templ, document.getElementById('app'))
}
rend()