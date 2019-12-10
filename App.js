import React from 'react';
import logo from './logo.svg';
import './App.css';

//https://react-bootstrap.github.io/getting-started/introduction
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
//import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            movies: [],
            loading: true,
            filter: "",
        }
        this.filterChange = this.filterChange.bind(this);
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    movies: json.results,
                    loading: false,
                });
            });
    }

    filterChange(event) {
        this.setState({
            filter: event.target.value
        });
    }

    render() {
        return this.state.loading ?
			<p>Loading...</p> :
			<div>
                <Form.Control type="text" className="mt-2 mb-5" placeholder="Filter..." onChange={this.filterChange} value={this.state.text} />
				<CardColumns>
					{this.state.movies.filter(movies => movies.title.includes(this.state.filter)).map(movie =>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} />
							<Card.Body>
								<Card.Title>{movie.title}</Card.Title>
								<Card.Text>{movie.overview}</Card.Text>
								<Button variant="outline-dark">Details</Button>
							</Card.Body>
						</Card>
					)}
				</CardColumns>
            </div>;
    }
}

class FilterBox extends React.Component{
    constructor() {
        super();
        this.state = {
            text: "this is the filter",
        }
        // (3. And the binding!!)
        this.filterChange = this.filterChange.bind(this);
    }

    // 2: Method that updates the state by using the new value
    //    in the <input> box.
    filterChange(event) {
        this.setState({
            text: event.target.value
        });
    }

    render() {
        // 1: <input> with an attribute "value" taken from the
        //    state of the component.
        return <div>
            Filter:
            <input type="text" onChange={this.filterChange}
                value={this.state.text} />
        </div>
    }
}


export default App;
