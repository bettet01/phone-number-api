import {AppBar, Hidden, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

export interface HeaderProps {
    children: any;
}

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
        color: "black"
    },
    menuButtons: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
    },
}));

const Header = ({children}: HeaderProps) => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <div className={classes.title}>
                    <Link className={classes.link} to={"/"}>
                        <Typography variant="h3">
                            App Name
                        </Typography>
                    </Link>
                </div>
                <div className={classes.menuButtons}>
                    <Hidden mdDown>
                        {children}
                    </Hidden>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;