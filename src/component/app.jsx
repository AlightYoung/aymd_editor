import '../css/app.css'
import '../css/atom-one-dark.min.css'
import React from 'react'
import {marked} from "marked"
import hljs from "highlight.js"

class App extends React.Component {

    constructor(props) {
        super(props)
        this.mdSource = React.createRef()
        this.renderArea = React.createRef()
        this.renderIt = this.renderIt.bind(this)
    }

    renderIt = () => {
        this.renderArea.current.innerHTML = marked.parse(this.mdSource.current.value)
        hljs.highlightAll()
    }

    render() {
        return (
            <div id="container">
                <div id="left" className="half">
                    <textarea name="mdSource"
                        id="mdSource"
                        placeholder={this.props.hint}
                        ref={this.mdSource}
                        onChange={this.renderIt}
                        autoFocus>
                    </textarea>
                </div>
                <div id="renderArea" className="half" ref={this.renderArea}></div>
            </div>
        )
    }
}

export default App
