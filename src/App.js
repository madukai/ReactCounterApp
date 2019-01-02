import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {

    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    constructor(props) {
        super(props);
        console.log('App - Constructor');
        //this.state = this.props.something;
    }

    componentDidMount() {
        // Ajax call
        console.log('App - Mounted');
    }

    // reset
    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    // delete 
    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };

    // increment
    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    // decrement
    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);

        counters[index] = { ...counter };

        // check
        if (counters[index].value > 0) {
            // decrement
            counters[index].value--;
        }

        this.setState({ counters });
    };

      render() {
          return (
              <React.Fragment>
              <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
              <main className="container">
                      <Counters
                          counters={this.state.counters}
                          onReset={this.handleReset}
                          onIncrement={this.handleIncrement}
                          onDecrement={this.handleDecrement}
                          onDelete={this.handleDelete}
                  />
              </main>
              </React.Fragment>
        );
      }
}

export default App;
