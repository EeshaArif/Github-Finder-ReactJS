To create the files that will actually be deployed

`npm run build`

- rce -> shortcut to generate class based components
- ptor -> shortcut for PropTypes.object.isRequired
- rafc -> shortcut to create arrow function

#### Global Variables

To store global variables in local environment, store them in .env.local

#### http-request

http-request + setState() -> in componentDidMount

`npm i axios`

```
async componentDidMount() {
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
  }
```

#### jsx-difference-from-html

- class -> className
- for -> htmlFor

#### fontawesome.com/start

Add the following script to index.html

`<script src="https://kit.fontawesome.com/c23ead93f1.js" crossorigin="anonymous"></script>`

#### props not provided by upper node but used in the component

Above the render method, inside the class

```
static defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
  };
```

If props will be provided then the provided prop will override the default

#### Type check -> propTypes

`import PropTypes from "prop-types";`

Displays warning if wrong type is used

```
static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
```

### React Router

`npm i react-router-dom`

`import { BrowserRouter as Router, Switch, Route } from "react-router-dom";`

- Keeps state intact

`<a href="/">Home</a>` -> `<Link to='/''>Home</Link>`

### Hooks

Functions that let us hook into react state and lifecycle features from a function component

`Import {useState, useEffect} from 'react'`

- useEffect -> lifecycle hooks
- useReducer -> Without redux

#### useState

```
 state = { text: "" };
 const onChange = (event) =>
    this.setState({ [event.target.name]: event.target.value });

```

converted to

```
const [text,setText] = useState('');
const onChange = (event) => setText(event.target.value);
```

#### useEffect

```
 componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }
```

converted to

```
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);
```

### Context

Removes the centralized state from the root component into a context

- Context
- State
- Reducer

### Production / Deployment -> netlify

// Condition for deployment

```
 if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
```

`npm i -g netlify-cli`

- create netlify.toml
  `netlify init`

- create build folder
  `npm run build`
- deploy
  `netlify deploy --prod`
