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

//https://www.npmjs.com/package/react-multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

/*--------------------------------------------------------------------------------------*/

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
	
//render del carrousel con scroll horizontal
	render() {
        return this.state.loading ?
			<p>Loading...</p> :
			<div>
				<Carousel
					additionalTransfrom={0}
					arrows
					autoPlaySpeed={3000}
					centerMode={false}
					className=""
					containerClass="container"
					dotListClass=""
					draggable
					focusOnSelect={false}
					infinite
					itemClass=""
					keyBoardControl
					minimumTouchDrag={80}
					partialVisible
					renderButtonGroupOutside={false}
					renderDotsOutside={false}
					responsive={{
						desktop: {
							breakpoint: {
								max: 3000,
								min: 1024
							},
							items: 5,
							partialVisibilityGutter: 20
						},
						mobile: {
						  breakpoint: {
							max: 464,
							min: 0
						  },
						  items: 2,
						  partialVisibilityGutter: 30
						},
						tablet: {
						  breakpoint: {
							max: 1024,
							min: 464
						  },
						  items: 2,
						  partialVisibilityGutter: 30
						}
					}}
					showDots={false}
					sliderClass=""
					slidesToSlide={5}
					swipeable
				>
					{this.state.movies.filter(movies => movies.title.includes(this.state.filter)).map(movie =>
						<Card style={{ width: '12rem' }}>
							<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} />
						</Card>
					)}
				</Carousel>	
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
