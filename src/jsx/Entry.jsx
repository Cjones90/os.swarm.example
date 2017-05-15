"use strict";

import React from 'react';
import DOM from 'react-dom';

require("../style/Entry.less")

class Entry extends React.Component {

    constructor(props) {
        super(props)
        this.state = { response: "" }
    }

    componentDidMount() {
        setInterval(() => {
            fetch(`${HOST}/api/get/hit`, {method: "GET"})
            .then((r) => r.json())
            .then((data) => {
                this.setState({response: data})
            })
        }, 1000)
    }


    render() {

        return (
            <pre>
                {this.state.response.split("---").join("\n")}
            </pre>
        );
    }

}

DOM.render(<Entry />, document.getElementById("main"))
