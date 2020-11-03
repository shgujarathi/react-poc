React Imp Points

React Components can be declared as function or class (This project have example TimeTick.JS)

Functions components can be written/modified as class components

Instance(Component) Properties
  State
  Props 

super(props) - should be first line in constructor of component and mandatory

When state or props of component updated/changed react will invoke render function.

Props(properties) are Read-Only - Whether you declare a component as a function or a class, it must never modify its own props.Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs

If we are writing a component which alters or modifies props they are called impure 

Never modify state(of component) directy.

Flow in components

Mounting
  constructor()
  static getDerivedStateFromProps()
  render()
  componentDidMount() - Life cycle method

Updating
  static getDerivedStateFromProps()
  shouldComponentUpdate()
  render()
  getSnapshotBeforeUpdate()
  componentDidUpdate() - Life cycle method

Unmounting
  componentWillUnmount()
  
Error handling
  static getDerivedStateFromError()
  componentDidCatch()

Class Properties
  defaultProps
  displayName

Each component also provides some other APIs:
  setState()
  forceUpdate()

There are three things you should know about setState().
  1.Do Not Modify State Directly
    Wrong - this.state.comment = 'Hello';
    Correct - this.setState({comment: 'Hello'});
    
  2.State Updates May Be Asynchronous
    Wrong -
    this.setState({
      counter: this.state.counter + this.props.increment,
    });
    correct - 
    this.setState((state, props) => ({
      counter: state.counter + props.increment
    }));
    
  3.State Updates are Merged
  For example, your state may contain several independent variables:
  this.state = {
      posts: [],
      comments: []
  };
  Then you can update them independently with separate setState() calls:
  componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
  The merging is shallow, so this.setState({comments}) leaves this.state.posts intact, but completely replaces this.state.comments.
  
Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class. 
This is why state is often called local or encapsulated. It is not accessible to any component other than the one that owns and sets it.
A component may choose to pass its state down as props to its child components:

You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default. If you forget to bind this.handleClick and pass it to onClick, this will be undefined when the function is actually called.

This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without () after it, such as onClick={this.handleClick}, you should bind that method.

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

If calling bind annoys you, there are two ways you can get around this. If you are using the experimental public class fields syntax, you can use class fields to correctly bind callbacks

class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log('this is:', this);
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click me
      </button>
    );
  }
}

If you aren’t using class fields syntax, you can use an arrow function in the callback:
class LoggingButton extends React.Component {
  handleClick() {
    console.log('this is:', this);
  }

  render() {
    // This syntax ensures `this` is bound within handleClick
    return (
      <button onClick={() => this.handleClick()}>
        Click me
      </button>
    );
  }
}
The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.

A good rule of thumb is that elements inside the map() call need keys.
Keys Must Only Be Unique Among Siblings

React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.



