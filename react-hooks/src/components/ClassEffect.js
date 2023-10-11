import {Component} from "react";

export default class ClassEffect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        document.title = `Clicked ${this.state.count} times`;
    }

    render() {
        return (
            <div>
                <p>Count - {this.state.count}</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Click</button>
            </div>
        )
    }
}