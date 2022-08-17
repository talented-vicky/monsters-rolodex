import {React} from "react";
import { ReactDOM } from "react-dom";

class App extends React.Component {
    constructor() {
        super();
        this.handleClick2 = this.handleClick1.bind(this);
    }

    handleClick1() {
        console.log('button 1 clicked');
    }

    handleClick3 = () => console.log('button 3 clicked');

    render() {
        return ( 
            <div>
                <button onClick={this.handleClick1()}> click1 </button>

                <button onClick={this.handleClick1}> click2 </button>
                
                <button onClick={this.handleClick2}> click3 </button>
                
                <button onClick={this.handleClick3}> click4 </button>
            </div>

        // click1 would run actually bcos we invoked(called) the function as 
        // soon as we call the render method off of the class #checked#
        // for this reason we don't call a function when it's an event
        // handler, TAKE NOT BROTHER 

        // click2 would work because we've already called handleClick1
        // but wouldn't work at all if the previous line didn't exist 
        // (because handleClick1 is a functin declaration)
        
        // click3 would also work fine (bcos it simply is handleClick1 being
        //reasigned to handleClick2

        // click4 would work perfectly b'cos it's a method off of the class
        // and is using arrow function #checked#
        );
    }
}

const rootElement = document.getElementById('root');


