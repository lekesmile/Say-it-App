import React, { Component } from 'react'
import Axios from 'axios'
import MUIcards from '../components/MUIcards'
import Grid from '@material-ui/core/Grid';


export default class Home extends Component {
    state = {
        getData: []
    }

    componentDidMount() {
        Axios.get('http://localhost:8080/post')
            .then(response => {
                this.setState({ getData: response.data });
                console.log(this.state)
            })
            .catch(error => console.log(`Error fetch API ${error}`))
    }

    render() {
        let { getData } = this.state
        return (
          
                <Grid container direction="row" spacing={3} xl={4} >


                    {getData.map(getd => (
                        <MUIcards
                            headtitle={getd.title}
                            body={getd.body}

                        />
                    ))}
                </Grid>

            
        )
    }
}


