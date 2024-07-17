{/* single react JSX element */ }
const component = <div></div>;

{/* rect comments */ }


{/* rect component 1 */ }
const MyComponent = function () {
    return (
        <div>
            <p>data text</p>
        </div>
    );
}

{/* react component 1 */ }
class MyReactComponentClas extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        {/* react composition component */ }
        <MyComponent />
    }
};


{/* defining props to a stateless functional component */ }
const Welcome = (props) => <h1>Hello, {props.name}</h1>



{/* rendering JSX element */ }
ReactDOM.render(component, document.getElementById("root"));

{/* rendering functional components */ }
{/* rendering ES6 class components */ }
ReacDOM.render(<MyReactComponentClas />, document.getElementById("parent"));




{/* using props */ }

const currentDate = (props) => {
    return (
        <div>
            <p>The current date is: {props.date}</p>
        </div>
    );
}

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>What date is it?</h1>
                <currentDate date={Date()} />
            </div>
        );
    }
}

React.render(<Calendar />, document.getElementById("node"));




{/* using array with props */ }

const List = (props) => {
    return (
        <p>{props.task.join(", ")}</p>
    );
}

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>----- To Do List -----</h1>
                <h2>Today:</h2>
                <List tasks={["walk, workout"]} />
                <h2>Tomorrow</h2>
                <List tasks={["watch movie", "listen music", "buy food"]} />
            </div>
        );
    }
}

React.render(<ToDo />, document.getElementById("node1"));




{/* using default values */ }

const ShoppingCart = () => {
    return <h1>Shopping Cart Component</h1>
}

ShoppingCart.defaultProps = { items: 0 }

React.render(<ShoppingCart />, document.getElementById("node2"));




{/* overriding default values */ }

const Items = (props) => {
    return <h1>Current items: {props.items}</h1>;
}

Items.defaultProps = { quantity: 0 }

class ShoppingCartt extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Items quantity={10} />
    }
}

React.render(<ShoppingCartt />, document.getElementById("node2"));



// using PropTypes to define expecteds props

const Items = (props) => {
    return <h1>Current quantity of items {props.quantity}</h1>
}

// defining the property to type number and require it
Items.propTypes = { quantity: Proptype.number }

Items.defaultProps = { quantity: 0 }

class ShoppingCarttt extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <Items />
    }
}

// accesing props when the component is an ES6 class component

class Welcomer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/* accessing throug -this.props.propertyname- */}
                <p>Hello,<strong>{this.props.name}</strong>!</p>
            </div>
        );
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Welcomer name="" />
            </div>
        );
    }
}


/*

======== A STATELESS FUNCTIONAL COMPONENT: 
is any function you write which accepts props and returns JSX.

======== A STATELESS COMPONENT:
on the other hand, is a class that extends React.Component,
but does NOT use internal state.

======== A STATEFUL COMPONENT: 
is a class component that DOES maintain its own internal state

*/

// stateful component 

class StateFulComponent extends React.Component {
    constructor(props) {
        super(props);

        {/* defining state */ }
        this.state = {
            name: "No name",
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.firstName}</h1>
            </div>
        );
    }
}

ReactDOM.render(<StateFulComponent />, document.getElementById("nodechild"));

// rendering state in the User Interface in another way

class MyComponentt extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        {/* saving state in const */ }
        const name = this.state.name;

        return (
            <div>
                {/* rendering const value */}
                <h1>{name}</h1>
            </div>
        )
    }
}

ReactDOM.render(<MyComponentt />, document.getElementById("nodechild"));



// Setting state with: this.setState

class ReactStateComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Isac",
        }

        // BIND METHOD CODE HERE
    }

    handleClick() {
        { /* set new state */ }
        this.setState({
            name: "John117"
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

ReactDOM.render(<ReactStateComponent />, document.getElementById("space"));



// Binding 'this' to a Class Method

class ReactStateComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Isac",
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        { /* set new state */ }
        this.setState({
            name: "John117"
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
}

ReactDOM.render(<ReactStateComponent />, document.getElementById("space"));




// using state to toggle an element

class MyComponentR extends React.Component {
    constructor(props) {
        super(props);

        this.setState = {
            visibility: false,
        }

        // binding toggle method
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    // toggle visibility
    toggleVisibility() {
        this.setState(state => {
            if (state.visibility) {
                return { visibility: false }
            } else {
                return { visibility: true }
            }
        });
    }

    render() {
        return (
            <div>
                <button>click me</button>
                <h2></h2>
            </div>
        );
    }
}

ReactDOM.render(<MyComponentR />, document.getElementById("container"));




// -- counter app --


class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = { count: 0 }

        // bind methods
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    increment() {
        this.setState(state => {
            return state.count += 1;
        });
    }

    decrement() {
        this.setState(state => {
            return state.count -= 1;
        });
    }

    reset() {
        this.setState({ count: 0 });
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>increment +</button>
                <button onClick={this.decrement}>decrement -</button>
                <h2>Current count: {this.state.count}</h2>
                <br />
                <button onClick={this.reset}>- rest -</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("box2"));




// Creating a Controlled Input

// import ...

class ControlledInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = { input: '' }

        // binding handler method
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value,
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.input} onChange={this.handleChange} />
                <h4>Controlled input:</h4>
                <p>{this.state.input}</p>
            </div>
        );
    }
}

ReactDOM.render(<ControlledInput />, document.getElementById("box"));




// creating a controlled form

class MyForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            submit: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value,
        });
    }

    handleSubmit(event) {
        this.setState({
            submit: this.state.input
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.input} onChange={this.handleChange} />
                    <button type="submit">submit</button>
                    <h1>{this.state.submit}</h1>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<MyForm />, document.getElementById("box4"));




// Pass State as Props to Child Components

class MyAppSec extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Camper bot"
        }
    }

    render() {
        return (
            <div>
                <Nabvar name={this.state.name} />
            </div>
        )
    }
}

class Nabvar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>My name is: {this.props.name}</h1>
        );
    }
}

ReactDOM.render(<MyAppSec />, document.getElementById("cont"));




// Passing a Callback as Props

class MyAppThree extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
        });
    }

    render() {
        return (
            <div>
                {/* sending handler and data throug props */}
                <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
                <RenderInput input={this.sate.inputValue} />
            </div>
        );
    }

}

class GetInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Get Input:</h3>
                {/* getting the handler method from the parent throug props */}
                <input value={this.props.input} onChange={this.props.handleChange} />
            </div>
        );
    }
}

class RenderInput extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Input render:</h3>
                <p>{this.props.iput}</p>
            </div>
        );
    }
}

ReactDOM.render(<MyAppThree />, document.getElementById("container"));

/*

This pattern illustrates some important paradigms in React.
 The first is unidirectional data flow. State flows in one direction down the tree of
 your application's components, from the stateful parent component to child components.
 The child components only receive the state data they need.
 The second is that complex stateful apps can be broken down into just a few,or maybe a single, stateful component. 
 The rest of your components simply receive state from the parent as props, and render a UI from that state.
 It begins to create a separation where state management is handled in one part of code and UI rendering in another.
 This principle of separating state logic from UI logic is one of React's key principles.
 When it's used correctly, it makes the design of complex, stateful applications much easier to manage.

*/







// using the Lifecycle Method componentWillMount

class MyComponentt extends React.Component {
    constructor(props) {
        super(props);
    }

    // The componentWillMount() method is called before the render() method when a component is being mounted to the DOM.
    // log message during render
    componentWillMount() {
        console.log("component will mount - component did mount");
    }

    render() {
        return (
            <div />
        );
    }
}

ReactDOM.render(<MyComponentt />, document.getElementById("conter"));




// Using the Lifecycle Method componentDidMount

class MyComponent3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeUsers: null
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 1273
            });
        }, 2500);
    }

    render() {
        return (
            <div>
                <h1>Active users: {this.state.activeUsers}</h1>
            </div>
        );
    }
}

ReactDOM.render(<MyComponent3 />, document.getElementById("container3"));

/*
componentDidMount()
- the method is also the best place to attach any event listeners you need to add for specific functionality
*/




// Adding Event Listeners

class MyComponentEve extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
        }

        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleEnter() {
        this.setState((state) => ({
            message: state.message + 'You pressed the enter key!'
        }));
    }

    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
}

/*
It's good practice to use this lifecycle method to do any clean up on React components
before they are unmounted and destroyed.
Removing event listeners is an example of one such clean up action.
*/


// Optimizing Re-Renders with shouldComponentUpdate

class OnlyEvents extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('should I update ?');
        return nextProps.value % 2 == 0;
    }

    render() {
        return <h1>{this.props.value}</h1>
    }
}

class Controller extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        }

        this.addValue = this.addValue.bind(this);
    }

    addValue() {
        this.setState((state) => ({ value: state.value + 1 }));
    }

    render() {
        return (
            <div>
                <button onClick={this.addValue}>click</button>
                <OnlyEvents value={this.satet.value} />
            </div>
        );
    }
}

ReactDOM.render(<Controller />, document.getElementById("conter"));




// adding styles

class StyledComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{ color: "red", fontSize: "72px" }}>stylized text</div>
        )
    }
}

ReactDOM.render(<StyledComponent />, document.getElementById("boxx"));



// adding styles with object

const styles = {
    color: "purple",
    fontSize: 40,
    border: "2px solid purple",
}

class Colorful extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={styles}>stylized div</div>
        );
    }
}

ReactDOM.render(<Colorful />, document.getElementById("containerBox"));



// Using Advanced JavaScript in React Render Method
// othe ways to use javascript in react components

const inputStyle = {
    widht: 235,
    marign: 5,
}

class MagicEightBall extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            randomIndex: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.ask = this.ask.bind(this);
    }

    handleChange(event) {
        this.setState({
            userInput: event.target.value,
        });
    }

    ask() {
        if (this.state.userInput) {
            this.setState({
                // update user input back to empty
                userInput: '',
                randomIndex: Math.floor(Math.random() * 20),
            });
        }
    }

    render() {

        const possibleAnswer = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            "Don't count on it",
            'My reply is no',
            'My sources say no',
            'Most likely',
            'Outlook not so good',
            'Very doubtful'
        ];

        const answer = this.state.randomIndex;

        return (
            <div>
                <input type="text" style={inputStyle} value={this.state.userInput} onChange={this.handleChange} />
                <br />
                <button onClick={this.ask}>ask</button>
                <br />
                <h3>Answer:</h3>
                <p>{possibleAnswer[answer]}</p>
            </div>
        );
    }
}

// Render with an If-Else Condition

class MyComponetn105 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: true,
        }

        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay() {
        this.setState((state) => ({
            display: !state.display
        }));
    }

    render() {
        if (this.state.display) {
            return (
                <div>
                    <button onClick={this.toggleDisplay}></button>
                    <h2>displayed</h2>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleDisplay}></button>
                </div>
            );
        }
    }
}

ReactDOM.render(<MyComponetn105 />, document.getElementById("cfx1"));

// Use && for a More Concise Conditional

class MyComponetn105 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            display: true,
        }

        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay() {
        this.setState((state) => ({
            display: !state.display
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleDisplay}></button>
                {this.state.display && <h2>displayed</h2>}
            </div>
        );
    }
}

ReactDOM.render(<MyComponetn105 />, document.getElementById("cfx2"));




// Use a Ternary Expression for Conditional Rendering

class CheckUserAge extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            userAge: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    submit() {
        this.setState(state => ({
            userAge: state.input,
        }));
    }

    handleChange(e) {
        this.setState({
            input: e.target.value,
            userAge: '',
        });
    }

    render() {

        const buttonOne = <button onClick={this.submit}>submit</button>;
        const buttonTwo = <button>you may not enter</button>;
        const buttonThree = <button>you shall not pass</button>;

        return (
            <div>
                <h3>Enter your age to continue:</h3>
                <input type="text" onChange={this.handleChange} />
                { /* render button based on condition */}
                {this.state.userAge == '' ? buttonOne : this.state.userAge >= 18 ? buttonThree : buttonTwo}
            </div>
        );
    }
}

ReactDOM.render(<CheckUserAge />, document.getElementById("boxx"));




// Render Conditionally from Props

class Results extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>{this.props.expression == 0 ? 'You win!' : 'You loose!'}</h1>
    }
}

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => {
            return { counter: state.counter + 1 }
        });
    }

    render() {

        const expression = Math.random() >= .5;

        return (
            <div>
                <button onClick={this.handleClick}>play again</button>
                <Results fiftyFifty={expression} />
                <p>{`turn: ` + this.state.counter}</p>
            </div>
        );
    }
}

ReactDOM.render(<GameOfChance />, document.getElementById('box'));




// Change Inline CSS Conditionally Based on Component State

class GateKeeper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        });
    }

    render() {

        let inputStyle = {
            border: '1px solid black',
        }

        // change input style based on condition 
        if (this.state.input.length > 15) {
            inputStyle.border = '3px solid red';
        }

        return (
            <div>
                <h3>Don't type too much</h3>
                <input
                    type="text"
                    value={this.state.input}
                    onChange={this.handleChange}
                    style={inputStyle}
                />
            </div>
        );
    }
}

ReactDOM.render(<GateKeeper />, document.getElementById("container"));




// user Array.map() to Dynamically Render Elements

const textAreaStyles = {
    width: 235,
    margin: 5,
}

class MyToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInput: '',
            toDoList: [],
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            toDoList: itemsArray
        });
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value,
        });
    }

    render() {
        // mapping over toDoList array to return data with <li>
        const data = this.state.toDoList.map((item) => <li>{item}</li>);

        return (
            <div>
                <textarea
                    value={this.state.userInput}
                    onChange={this.handleChange}
                    placeholder="separate items with commas"
                    style={textAreaStyles}
                />
                <br />
                <button onClick={this.handleSubmit}>create list</button>
                <h1>To Do list:</h1>
                <ul>{data}</ul>
            </div>
        );
    }
}




// Giving Sibling Elements a Unique Key Attribute

const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
];

const Frameworks = () => {
    const renderFrameworks = frontEndFrameworks.map((item, i) => <li key={i}>{item}</li>);

    return (
        <div>
            <h1>Popular front end framewors:</h1>
            <ul>{renderFrameworks}</ul>
        </div>
    );
}

ReactDOM.render(Frameworks(), document.getElementById("box"));




// U    ilter an Array

class MyUsersComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    username: 'Jeff',
                    online: true,
                },
                {
                    username: 'Alan',
                    online: false
                },
                {
                    username: 'Mary',
                    online: true
                },
                {
                    username: 'Jim',
                    online: false
                },
                {
                    username: 'Sara',
                    online: true
                },
                {
                    username: 'Laura',
                    online: true
                }
            ],
        }
    }

    render() {

        const usersOnline = this.state.users.filter((users) => users.online);
        const renderOnline = usersOnline.map((user, index) => <li key={index}>{user}</li>);

        return (
            <div>
                <h1>Current online users:</h1>
                <ul>{renderOnline}</ul>
            </div>
        );
    }
}

ReactDOM.render(<MyUsersComponent />, document.getElementById("box"));


// Render React on the Server with renderToString

class MyServerComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div />
    }
}

ReacDOMServer.renderToString(<MyServerComponent />);