import React, { Component } from 'react'
import Axios from 'axios'
import MUIcards from '../components/MUIcards'


export default class Home extends Component {
    state = {
        getData: []
    }

    componentDidMount() {
        Axios.get('http://localhost:5000/post')
            .then(response => {
                this.setState({ getData: response.data });
                console.log(this.state)
            })
            .catch(error => console.log(`Error fetch API ${error}`))
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        let { getData } = this.state
        return (


            <div>
                {getData.map(getd => (

                    <MUIcards
                        key={getd._id}
                        headtitles={getd.title}
                        body={getd.body}

                    />

                ))}

            </div>
        )
    }
}


