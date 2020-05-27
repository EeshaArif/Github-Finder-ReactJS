To create the files that will actually be deployed

```npm run build```

// rce -> shortcut to generate class based components
#### jsx-difference-from-html
- class -> className
- for -> htmlFor
#### fontawesome.com/start
Add the following script to index.html

```<script src="https://kit.fontawesome.com/c23ead93f1.js" crossorigin="anonymous"></script>```
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
```import PropTypes from "prop-types";```

Displays warning if wrong type is used

``` 
static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
```

