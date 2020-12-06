import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

type THeaderProps = {
  title: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header: React.FC<THeaderProps> = ({ title }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" data-testid="header">
      <Toolbar>
        <Container>
          <Typography component="span" variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Header);
