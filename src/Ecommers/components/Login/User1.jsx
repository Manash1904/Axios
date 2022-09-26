import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';


import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function User1() {
  const [name, setName] = React.useState('User Name');
  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">UserName</InputLabel>
        <OutlinedInput id="component-outlined" value={name} onChange={handleChange} label=" user Name as" />
      </FormControl>
      
    </form>
  );
}

export default User1;