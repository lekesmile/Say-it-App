import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, Redirect} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    links: {
        textTransform: 'upperCase',
        fontSize: 15,
        padding: 20,
        color: 'white',
        textDecoration: 'none',

    }

}));

  const logout = () => {
        localStorage.removeItem('userData');
    }

export default function NavbarCopy() {
    const classes = useStyles();

    let datafrom = JSON.parse(localStorage.getItem('userData'));
    let user = datafrom.data.user.username;

  

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        SAY IT OUT !
                    </Typography>
                    <Link className={classes.links} to="/login">Welcome: {user}</Link>
                    <Link className={classes.links} to="/login" onClick={logout}>logout</Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}