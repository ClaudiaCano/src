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
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//https://www.npmjs.com/package/react-multi-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// https://reacttraining.com/react-router/web/guides/quick-start
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  useLocation,
} from "react-router-dom";

import { createBrowserHistory } from 'history';

/*--------------------------------------------------------------------------------------*/

const urlCover = "https://api.themoviedb.org/3/find/tt8623904?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&external_source=imdb_id";
const urlNew = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year=2019";
const urlAction = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28";
const urlAdventure = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12";
const urlAnimation = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16";
const urlComedy = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35";
const urlCrime = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80";
const urlDrama = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18";
const urlFamily = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10751";
const urlFantasy = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14";
const urlHistory = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=36";
const urlTerror = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27";
const urlMusical = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10402";
const urlMystery = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=9648";
const urlRomance = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749";
const urlSyfy = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878";
const urlThriller = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=53";
const urlWar = "https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10752";

const history = createBrowserHistory();

/*--------------------------------------------------------------------------------------*/

class TitleList extends React.Component{
	render(){
		return <h2>{this.props.title}</h2>;
	}
}
class CoverCarrousel extends React.Component{
	render(){
		return <Carousel
					additionalTransfrom={0}	
                    arrows={false}
					className=""
					containerClass="container"
					dotListClass=""
					draggable={false}
					focusOnSelect={false}
					infinite
					itemClass=""
					keyBoardControl
					minimumTouchDrag={80}
					renderButtonGroupOutside={false}
					renderDotsOutside={false}
					responsive={{
						desktop: {
							breakpoint: {
								max: 3000,
								min: 1024
							},
							items: 1,
							
						},
						mobile: {
							breakpoint: {
								max: 464,
								min: 0
							},
							items: 1,
						},
						tablet: {
							breakpoint: {
								max: 1024,
								min: 464
							},
							items: 1,
						}
					}}
					showDots={false}
					sliderClass="" 
				>
					{this.props.items}
				</Carousel>;
	}
}
class OurCarousel extends React.Component{
	render(){
		return <Carousel
					additionalTransfrom={0}
					arrows
					removeArrowOnDeviceType="mobile, tablet"
					autoPlaySpeed={3000}
					centerMode
					className=""
					containerClass="container"
					dotListClass=""
					draggable={false}
					focusOnSelect={false}
					infinite
					itemClass=""
					keyBoardControl
					minimumTouchDrag={80}
					renderButtonGroupOutside={false}
					renderDotsOutside={false}
					responsive={{
						desktop: {
							breakpoint: {
								max: 3000,
								min: 1024
							},
							items: 5,
							partialVisibilityGutter: 40,
							slidesToSlide:5
						},
						mobile: {
							breakpoint: {
								max: 464,
								min: 0
							},
							items: 1,
							partialVisibilityGutter: 30,
							slidesToSlide:1
						},
						tablet: {
							breakpoint: {
								max: 1024,
								min: 464
							},
							items: 2,
							partialVisibilityGutter: 30,
							slidesToSlide:1
						}
					}}
					showDots={false}
					sliderClass=""
					swipeable  
				>
					{this.props.items}
				</Carousel>;
	}
}

/*class MovieList extends React.Component{
    render(){
        return <div>
			<TitleList title = {this.props.title}/>
				
            <OurCarousel 
                items = {this.state.{this.props.genre}.filter({this.props.genre} => {this.props.genre}.title.includes(this.state.filter)).map(movie => 
                    <Card>
                         <Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
                    </Card>
                )}
            />
		</div>;
    }
}*/

/*--------------------------------------------------------------------------------------*/
//imagen de fondo  src={'https://image.tmdb.org/t/p/original/' + movie.backdrop_path}

class Cover extends React.Component{
    constructor() {
        super();
        this.state = {
            movieCover: [],
            loading: true,
        }
    }
    
    componentDidMount() {
        fetch(urlCover)

      .then(resCover => resCover.json())
      .then(json =>{
          this.setState({
              movieCover: json.movie_results,
              loading: false,
          });
      });
    }
    
	render() {
        return this.state.loading ?
			<p>Loading...</p> :
			<div className = "w-screen">
                {this.state.movieCover.map(movie =>
                        <div>
                            <div></div>
                            <img className = "Cover-image" style = {{width: "100%"}} src={'https://image.tmdb.org/t/p/original/' + movie.backdrop_path} alt="" fluid={true}/>
                        </div>
                )}
			</div>;
	}
}
        
        /*<CoverCarrousel
                    items = {this.state.movieCover.map(movie =>
                        <div>
                            <img className="w-100" src={'https://image.tmdb.org/t/p/original/' + movie.backdrop_path} alt=""/>
                            <h3>{movie.title}</h3>
                        </div>
                    )}
                />
        */

        // <h3 className = "Movie-title">{movie.title}</h3>


/*--------------------------------------------------------------------------------------*/

function App() {
  return (
      <div>
        <Navbar id = "navbargrad" scrolling dark expand = "md" fixed="top" variant="dark">
			<Navbar.Brand href="#home">MovieSearch</Navbar.Brand>
			<Nav className="mr-auto">
			</Nav>
			<Form inline>
			  <Button size = "sm" variant="outline-light">Search</Button>
			</Form>
        </Navbar>

        <Router>
        	<ModalSwitch />
        </Router>
      </div>
  );
}

// <FormControl size = "sm" type="text" placeholder="Title" className="mr-sm-2 transparent-input" />

function ModalSwitch() {
  let location = useLocation();

  return (
    <div>
      <Switch location={location}>
        <Route exact path="/" children={<Home />} />
	    <Route path="/movie/:id" component = {Movie}/>
	  	<Route path="/search" children={<Search />} />
      </Switch>
    </div>
  );
}

class Home extends React.Component{
    constructor() {
        super();
        this.state = {
            movieCover: [], moviesNew: [], moviesAction: [], moviesAdventure: [], moviesAnimation: [], moviesComedy: [], moviesCrime: [], moviesDrama: [], moviesFamily: [], moviesFantasy: [], moviesHistory: [], moviesTerror: [], moviesMusical: [], moviesMystery: [], moviesRomance: [], moviesSyfy: [], moviesThriller: [], moviesWar: [],
            loading: true,
            filter: "",
        }
        this.filterChange = this.filterChange.bind(this);
    }

    componentDidMount() {
    Promise.all([
        fetch(urlCover), fetch(urlNew), fetch(urlAction), fetch(urlAdventure), fetch(urlAnimation), fetch(urlComedy), fetch(urlCrime), fetch(urlDrama), fetch(urlFamily), fetch(urlFantasy), fetch(urlHistory), fetch(urlTerror), fetch(urlMusical), fetch(urlMystery), fetch(urlRomance), fetch(urlSyfy), fetch(urlThriller), fetch(urlWar)])

      .then(([resCover, resNew, resAction, resAdventure, resAnimation, resComedy, resCrime, resDrama, resFamily, resFantasy, resHistory, resTerror, resMusical, resMystery, resRomance, resSyfy, resThriller, resWar]) => { 
         return Promise.all([resCover.json(), resNew.json(), resAction.json(), resAdventure.json(), resAnimation.json(), resComedy.json(), resCrime.json(), resDrama.json(), resFamily.json(), resFantasy.json(), resHistory.json(), resTerror.json(), resMusical.json(), resMystery.json(), resRomance.json(), resSyfy.json(), resThriller.json(), resWar.json()]) 
      })
      .then(([resCover, resNew, resAction, resAdventure, resAnimation, resComedy, resCrime, resDrama, resFamily, resFantasy, resHistory, resTerror, resMusical, resMystery, resRomance, resSyfy, resThriller, resWar]) => {
        this.setState({
            movieCover: resCover.movie_results,
            moviesNew: resNew.results,
            moviesAction: resAction.results,
            moviesAdventure: resAdventure.results,
            moviesAnimation: resAnimation.results,
            moviesComedy: resComedy.results,
            moviesCrime: resCrime.results,
            moviesDrama: resDrama.results,
            moviesFamily: resFamily.results,
            moviesFantasy: resFantasy.results,
            moviesHistory: resHistory.results,
            moviesTerror: resTerror.results,
            moviesMusical: resMusical.results,
            moviesMystery: resMystery.results,
            moviesRomance: resRomance.results,
            moviesSyfy: resSyfy.results,
            moviesThriller: resThriller.results,
            moviesWar: resWar.results,
            loading: false,
        });
      });
}
   /* 
    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    moviesAction: json.results,
                    loading: false,
                });
            });
    }
    */

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
                <Cover />
			
				<Link to="/search">
					<Button size = "sm" variant="outline-light">Search</Button>
				</Link>
            
                <div className = "container">
                    <div className = "row mt-5 mb-5">
					
						<TitleList title = "Novedades"/>
							<OurCarousel 
								items = {this.state.moviesNew.filter(moviesNew => moviesNew.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />
					</div>
		
					<div className = "row mt-5 mb-5">
						 <TitleList title = "Acción"/>
							<OurCarousel 
								items = {this.state.moviesAction.filter(moviesAction => moviesAction.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />                        
                    </div>
		
					<div className = "row mt-5 mb-5">
						 <TitleList title = "Aventuras"/>
							<OurCarousel 
								items = {this.state.moviesAdventure.filter(moviesAdventure => moviesAdventure.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />                        
                    </div>
		
					<div className = "row mt-5 mb-5">
						 <TitleList title = "Animación"/>
							<OurCarousel 
								items = {this.state.moviesAnimation.filter(moviesAnimation => moviesAnimation.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />                        
                    </div>
		
					<div className = "row mt-5 mb-5">
						 <TitleList title = "Comedia"/>
							<OurCarousel 
								items = {this.state.moviesComedy.filter(moviesComedy => moviesComedy.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />                        
                    </div>
		
					<div className = "row mt-5 mb-5">
						 <TitleList title = "Crimen"/>
							<OurCarousel 
								items = {this.state.moviesCrime.filter(moviesCrime => moviesCrime.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />                        
                    </div>
					
					<div className = "row mt-5 mb-5">
						 <TitleList title = "Drama"/>
							<OurCarousel 
								items = {this.state.moviesDrama.filter(moviesDrama => moviesDrama.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />                        
                    </div>
		
					<div className = "row mt-5 mb-5">
						 <TitleList title = "Familia"/>
							<OurCarousel 
								items = {this.state.moviesFamily.filter(moviesFamily => moviesFamily.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />                        
                    </div>
		
					<div className = "row mt-5 mb-5">
						 <TitleList title = "Fantasía"/>
							<OurCarousel 
								items = {this.state.moviesFantasy.filter(moviesFantasy => moviesFantasy.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />                        
                    </div>
		
					<div className = "row mt-5 mb-5">
						 <TitleList title = "Historia"/>
							<OurCarousel 
								items = {this.state.moviesHistory.filter(moviesHistory => moviesHistory.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />                        
                    </div>
		
					<div className = "row mt-5 mb-5">
						 <TitleList title = "Terror"/>
							<OurCarousel 
								items = {this.state.moviesTerror.filter(moviesTerror => moviesTerror.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />                        
                    </div>
		
					<div className = "row mt-5 mb-5">
						 <TitleList title = "Musical"/>
							<OurCarousel 
								items = {this.state.moviesMusical.filter(moviesMusical => moviesMusical.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />                        
                    </div>
		
					<div className = "row mt-5 mb-5">
						 <TitleList title = "Misterio"/>
							<OurCarousel 
								items = {this.state.moviesMystery.filter(moviesMystery => moviesMystery.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />                        
                    </div>
		
					<div className = "row mt-5 mb-5">
						 <TitleList title = "Romance"/>
							<OurCarousel 
								items = {this.state.moviesRomance.filter(moviesRomance => moviesRomance.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />                        
                    </div>
		
					<div className = "row mt-5 mb-5">
						 <TitleList title = "Ciencia-Ficción"/>
							<OurCarousel 
								items = {this.state.moviesSyfy.filter(moviesSyfy => moviesSyfy.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />                        
                    </div>
		
					<div className = "row mt-5 mb-5">
						 <TitleList title = "Thriller"/>
							<OurCarousel 
								items = {this.state.moviesThriller.filter(moviesThriller => moviesThriller.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />                        
                    </div>
		
					<div className = "row mt-5 mb-5">
						 <TitleList title = "Bélicas"/>
							<OurCarousel 
								items = {this.state.moviesWar.filter(moviesWar => moviesWar.title.includes(this.state.filter)).map(movie =>
									<div>
										<Link to={'/movie/' + movie.id}>
											<Card>
												<Card.Img src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + movie.poster_path} alt=''  />
											</Card>
										</Link>
									</div>
								)}
						 />                        
                    </div>
		
                </div>
			</div>;
	}
}
		
class Search extends React.Component{
    constructor() {
        super();
        this.state = {
            moviesSearch: [],
            loading: true,
			filter: "",
        }
			
		this.filterChange = this.filterChange.bind(this);
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es_ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
            .then(response => response.json())
            .then(json => {
                this.setState({
                    moviesSearch: json.results,
                    loading: false,
                });
            });
    }
	
	filterChange(event) {
        this.setState({
            filter: event.target.value	// changes the filter value (which is empty at the beggining) to the value of the text input
        });
    }
	
	render() {
        return this.state.loading ?
			<p>Loading...</p> :
			<div>		
				<div className = "container">
                	<div className = "row mt-5 mb-5">
						<Form onSubmit={this.handleSubmit} className = "SearchForm">
						    <Row>
								<Col className = "">
								  <FormControl className = "transparent-input" size = "sm" ref={node => (this.inputNode = node)} type="text" name="query" placeholder="Title" />
									<input type = "text" onChange = {this.filterChange} value={this.state.text} />
								</Col>
								<Col>
								<Link to={'/search/' + this.state.filter}>
								    <p>Search</p>
								</Link>
								</Col>
						    </Row>
						</Form>
		
						<Switch>
							<Route exact path="/search">
								<CardColumns>
									{this.state.moviesSearch.map(movie =>
									<Card style={{ width: '18rem' }} className = "text-white bg-secondary">
										<Card.Img variant="top" src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'+movie.poster_path} />
										<Card.Body>
											<Card.Title>{movie.title}</Card.Title>
											<Card.Text>Nota: {movie.vote_average}</Card.Text>
											<Link to={'/movie/' + movie.id}>
												<Button variant="outline-dark">Details</Button>
											</Link>
										</Card.Body>
									</Card>
									)}
								</CardColumns>
							</Route>
							<Route path="/search/:query" component = {SearchResults} />
								
					  	</Switch>
					</div>
                </div>
			</div>;
	}
}

// type="submit"
/* <Col className = "">
								  <FormControl className = "transparent-input" size = "sm" ref={node => (this.inputNode = node)} type="text" name="query" placeholder="Title" />
								</Col>
								<Col>
								    <Button to="/search/:query" size = "sm" variant="outline-light">Search</Button>
								</Col>
								*/

class Movie extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            moviedetails: null,
            loading: true,
			id: this.props.match.params.id
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/' + this.state.id + '?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    moviedetails: json,
                    loading: false,
                });
            });
		console.log(this.state.id);
    }
	
	render() {
        return this.state.loading ?
			<p>Loading...</p> :
			<div>	
				<div className = "w-screen">
						<img className = "Bg-image" style = {{width: "100%"}} src={'https://image.tmdb.org/t/p/original/' + this.state.moviedetails.backdrop_path} alt="" fluid={true}/>
				</div>
				<div className = "container">
					<div className = "row">
						<div className = "col-3">
							<img className = "Poster-image" style = {{width: "100%"}} src={'https://image.tmdb.org/t/p/original/' + this.state.moviedetails.poster_path} alt=""/>
						</div>
						<div className = "col">
							<h1 className = "Movie-title">{this.state.moviedetails.title}</h1>
							<p>Release date: {this.state.moviedetails.release_date}</p>
							<p className = "Sinopsis">{this.state.moviedetails.overview}</p>
						</div>
					</div>
				</div>
			</div>;
	}
}

class SearchResults extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            loading: true,
			query: this.props.match.params.query
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES&query=' + this.state.query + '&page=1')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    searchResults: json.results,
                    loading: false,
                });
            });
		console.log(this.state.query);
    }
	
	render() {
        return this.state.loading ?
			<p>Loading...</p> :
			<div>	
				<div className = "container">
					<div className = "row mt-5 mb-5">
						<CardColumns>
							{this.state.searchResults.map(movie =>
							<Card style={{ width: '18rem' }} className = "text-white bg-secondary">
								<Card.Img variant="top" src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'+movie.poster_path} />
								<Card.Body>
									<Card.Title>{movie.title}</Card.Title>
									<Card.Text>Nota: {movie.vote_average}</Card.Text>
									<Link to={'/movie/' + movie.id}>
										<Button variant="outline-dark">Details</Button>
									</Link>
								</Card.Body>
							</Card>
							)}
						</CardColumns>
					</div>
				</div>
			</div>;
	}
}

export default App;
