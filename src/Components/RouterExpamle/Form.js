import React from 'react';
import {
    Prompt
} from 'react-router-dom';
class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            isBlocking: false
        };
    }
    submitHandle(event) {
        event.preventDefault();
        event.target.reset();
        this.setState({
            isBlocking: false
        });
    }
    changeHandle(event) {
        this.setState({
            isBlocking: event.target.value.length > 0
        });
    }
    render() {
        const { isBlocking } = this.state;

        return (
            <form onSubmit={(event) => { this.submitHandle(event) }}>
                <Prompt when={isBlocking} message={location => (
                    `Are you sure you want to go to ${location.pathname}`
                )} />
                <p>
                    Blocking?{isBlocking ? 'Yes,click a link or back button' : 'Nope'}
                </p>
                <p>
                    <input type="text" size="50" placeholder="type something to block transitions" onChange={(event) => { this.changeHandle(event) }} />
                </p>

                <p>
                    <button>Submit to stop blocking</button>
                </p>
            </form>
        );
    }
}
export default Form;