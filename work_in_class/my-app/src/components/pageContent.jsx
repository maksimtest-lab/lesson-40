import { Component } from "react";

export class PageContent extends Component {

    constructor(props) {
        super(props);
        this.title = props.title;
        this.content = props.content;
        this.state = {
            // Define your state variables here
        };
    }

    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <p>{this.content}</p>
            </div>
        );
    }
}