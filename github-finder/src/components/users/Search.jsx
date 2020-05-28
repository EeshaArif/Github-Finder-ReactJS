import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../contexts/github/githubContext";

const Search = ({ showClear, clearUsers, setAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");
  const onChange = (event) => setText(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          value={text}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

Search.propTypes = {
  // searchUsers: PropTypes.func.isRequired, // ptfr <- shortcut
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired, // ptbr <- shortcut
  setAlert: PropTypes.func.isRequired,
};
export default Search;
