import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const Search = ({ setSearchTerm }) => {
  const classes = useStyles();

  const changeHandler = event => {
    const searchTerm = event.target.value;
    console.log('hello', searchTerm);
    setSearchTerm(searchTerm);
  };

  return (
    <form className={classes.root}>
      <TextField
        id='standard-basic'
        label='Standard'
        onChange={changeHandler}
      />
    </form>
  );
};

export default Search;
