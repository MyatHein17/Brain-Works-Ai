// This is the entry point of the application
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import './styles/style.css';

const App = () => {
    return (
        <div className="app">
            <h1>Click Counter</h1>
            <Counter />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));