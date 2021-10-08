import React from "react";
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles';
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { SvgIcon } from "@material-ui/core";

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
    }
});

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
            <img src="/images/logo.png" alt="logo" className={classes.img}/>
            <div>
                <Button color='primary' variant='contained'>
                    Novo Post
                </Button>
            </div>
            {/* <div>
                <a href='/'>Conecta Dev - Alteração</a>
            </div>
            <div>
                <Button color='primary' variant='contained'>
                    Novo Post
                </Button>
                <span>Img1</span>
                <span>Img2</span>
            </div> */}
        </Toolbar>
    </AppBar>
    )
}

export default Header;