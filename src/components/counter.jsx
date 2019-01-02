import React, { Component } from 'react';

class Counter extends Component {
    
    styles = {
        color: 'red',
        fontSize: 20,
        fontWeight: 600
    };

    // Dynamic HTML element
    renderTags() {
        if (this.state.tags.length === 0) return <p>There are no tags!</p>

        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    }

    /*
    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 });
    } */

    handleDecrement = () => {
        // check
        if (this.state.value > 0) {
            this.setState({ value: this.state.value - 1 });
        }
    }

    render() {
        return (
            <div>
                <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
                <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">Decrement</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";

        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        const x = 'Zero';
        return value === 0 ? x : value;
    }
}

export default Counter;

// 1:54:44 Multiple Components in Sync 

 /*
  // one solution: wrapper function to pass arguments
    doHandldeIncrement = () => {
        this.handleIncrement({ id: 1 });
    }; 

   // bind call to have access to 'this'
    constructor() {
        super(); // constructor of Component object
        this.handleIncrement = this.handleIncrement.bind(this);
    } 

    // calling a reference to a function and passing an arguments
    <button onClick={() => this.handleIncrement(product)} className="btn btn-secondary btn-sm">Increment</button>

    // dynamically create an html element
    tags: ['tag1', 'tag2', 'tag3']
    {this.renderTags()}

    // adding inline style
    style={this.styles}

     // wrap react component without using div
     <React.Fragment> </React.Fragment>

     -- props: data that can be access by another component, read-only (public)
     -- state: data that can only be access by the component who owns it (local)
*/