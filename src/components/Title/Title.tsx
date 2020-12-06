import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

type TTitleProps = {
  title: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  })
);

const Title: React.FC<TTitleProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <Typography component="h1" variant="h3" align="center" className={classes.title} data-testid="title">
      {title}
    </Typography>
  );
};

export default React.memo(Title);
