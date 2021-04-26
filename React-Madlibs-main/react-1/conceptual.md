# Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a front end Javascript framework. One would use React when building out a web app and because of its workflows are really good for any type of project.

- What is Babel?
Babel is the transpiler that turns JSX into JS and HTML. This is how javascript can render html from inside the JSX file

- What is JSX?
JSX is the type of javascript file that includes (X)tra features, particularly returning html

- How is a Component created in React?
A component is a function that returns html.
<!-- ie: const Component = () => { return (<div><p>Hi!</p></div>)} -->

- What are some difference between state and props?
props are imutable while state is mutable. State upon change will trigger a re-render. We can also trigger useEffect on a state change

- What does "downward data flow" refer to in React?
This refers to the nesting of child components inside parent components and setting props in the parent component thus having a reusable child component that can be unique based on the data being passed down

- What is a controlled component?
A controlled component is one where the state is set and stored by the React app ( a react form built around useState and onChange )

- What is an uncontrolled component?
an uncontrolled component is one where the state is not stored (a vanilla form )

- What is the purpose of the `key` prop when rendering a list of components?
the key prop serves the same purpose as an id for a row in a database; it gives the item a unique value

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
if the array changes on an update the key could change and any dependency upon that could fail

- Describe useEffect.  What use cases is it used for in React components?
useEffect is the hook that is called either, on mount or on some state change that allows for logic based on some action. Use cases are typically getters and setters on page load or button click or some DOM manipulation again based on the user taking an action that will have a side effect.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef stores a value like a global variable (but not) and it is mutable and does not cause a re-render

- When would you use a ref? When wouldn't you use one?
use a ref to store an underlying DOM element or timerID's. Dont use a ref to store something that would want to re-render like a visible counter

- What is a custom hook in React? When would you want to write one?
a custom hook is simply a React function built around built-in hooks that can abstract repeatable (or lengthy/cumbersome ) business logic that returns an array inluding the state saved in the hook and the function that calls the setState.