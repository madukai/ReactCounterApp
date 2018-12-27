import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };

    /*
    constructor() {
        super(); // constructor of Component object
        this.handleIncrement = this.handleIncrement.bind(this);
    } */

    styles = {
        color: 'red',
        fontSize: 20,
        fontWeight: 600
    };

    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    handleIncrement = () => {
        this.state.count++;
    }

    render() {
        return (
            <React.Fragment>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
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