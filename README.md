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


