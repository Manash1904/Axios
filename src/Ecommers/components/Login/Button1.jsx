import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function Button1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Button disabled>Disabled</Button>
      
    </div>
  );
}
export default Button1;
