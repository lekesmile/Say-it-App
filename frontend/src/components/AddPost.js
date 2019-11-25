import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import Axios from 'axios';

export default class AddPost extends Component {
    state = {
        title: '',
        body: ''
    }
    useStyles = makeStyles(theme => ({
        rootit: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                width: 200,
                margin: theme.spacing(1),
            },
        },
    }));

    handleFormInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const sayIt = {
            title: this.state.title,
            body: this.state.body
        }

        Axios.post('http://localhost:5000/post', sayIt)
            .then(res =>
                console.log(res)
            )
        console.log('submitted')

    }


    render() {
        const classes = this.useStyles;

        return (
            <div className="formA">
                <form className={classes.rootit} onSubmit={this.handleSubmit}>

                    <TextField

                        label="Title"
                        variant="outlined"
                        color="default"
                        name="title"
                        onChange={this.handleFormInput}
                    />

                    {" "}{" "}
                    {" "}{" "}
                    <TextField

                        label="Message "
                        variant="outlined"
                        color="default"
                        name="body"
                        onChange={this.handleFormInput}

                    />
                    {" "}{" "}

                    <Button variant="contained"
                        color="primary"
                        type="submit"
                        size="extended"
                        startIcon={<SaveIcon />}
                    >
                        Primary
                    </Button>


                </form>
            </div>
        )
    }
}