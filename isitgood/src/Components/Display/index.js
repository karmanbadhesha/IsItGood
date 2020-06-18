import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Search from '../Search';
import Movies from '../Movies';
import axios from 'axios';
import { Button } from '@material-ui/core';

const useStyles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center',
        color: 'black'
    },
    grid: {
        marginTop: "10px",
        marginLeft: "10px",
    }
});



class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: ''
        }
    }

    searchHandler = (e) => {
        this.setState({
            search: e
        }, this.search)

    }

    clearRow = (e) => {
        this.setState({
            rows: ''
        });
    }

    search(searchTerm) {
        const url = "https://api.themoviedb.org/3/search/movie?api_key=680d8abb13fcad839ee173b73986bd48&language=en-US&include_adult=false&sort_by=popularity.desc&query=";
        axios.get(url + this.state.search)
            .then(response => {
                // this.results = response.data.results
                const results = response.data.results;
                var movieRows = [];
                results.forEach((movie) => {

                    const poster = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
                    const eachMovie = <Movies movie={movie} poster={poster} key={movie.id} />
                    movieRows.push(<Grid item xs={2} key={movie.id}>
                        {eachMovie}
                    </Grid>);
                })
                this.setState({ rows: movieRows });
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        const classes = useStyles();
        return (

            <div className={classes.root}>
                <Search searchHandler={this.searchHandler} />
                <Button variant="outlined" color="primary" onClick={this.clearRow}>Clear</Button>
                <Grid container spacing={1} style={classes.grid}>
                    {this.state.rows}
                </Grid >

            </div >

        );
    }
}

export default withStyles(useStyles)(Display);
