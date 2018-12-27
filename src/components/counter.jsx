import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    styles = {
        color: 'red',
        fontSize: 20,
        fontWeight: 600
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    handleIncrement = (product) => {
        this.setState({ count: this.state.count + 1 });
    }

    handleResetCounter = () => {
        this.setState({ count: 0 });
    }

    // one solution: wrapper function
    doHandldeIncrement = () => {
        this.handleIncrement({ id: 1 });
    };

    render() {
        const product = { id: 1 };
        return (
            <React.Fragment>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={this.handleResetCounter} className="btn btn-secondary btn-sm m-2">Reset</button>
                {this.renderTags()}
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";

        return classes;
    }

    formatCount() {
        const { count } = this.state;
        const x = 'Zero';
        return count === 0 ? x : count;
    }
}

export default Counter;

//1:17:31 Composing Components
 /*
  * bind call to have access to 'this'
    constructor() {
        super(); // constructor of Component object
        this.handleIncrement = this.handleIncrement.bind(this);
    } */