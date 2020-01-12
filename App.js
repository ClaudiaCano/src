import React from 'react';
import logo from './logo.svg';

// Our own styles
import './App.css';

// Import library Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import CardDeck from 'react-bootstrap/CardDeck';

// Import Library Multi-Carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Import Library Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  useLocation,
  withRouter,
} from "react-router-dom";

// Import Libraries for animated progress bar that shows punctuation of a movie
import { Animate }  from 'react-move';
import { CircularProgressbar } from 'react-circular-progressbar';
import { buildStyles } from 'react-circular-progressbar';
import { easeQuadInOut } from "d3-ease";
import 'react-circular-progressbar/dist/styles.css';

/*--------------------------------------------------------------------------------------*/

// url's for fetch in home page

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

/*--------------------------------------------------------------------------------------*/

// Our personal class components

// Title of each carousel
class TitleList extends React.Component {
	render(){
		return <h2>{this.props.title}</h2>;
	}
}

// Customized Carousel for each list in home page
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

// Animated Progress Bar Base
class AnimatedProgressProvider extends React.Component {
  interval = undefined;

  state = {
    isAnimated: false
  };

  static defaultProps = {
    valueStart: 0
  };

  componentDidMount() {
    if (this.props.repeat) {
      this.interval = window.setInterval(() => {
        this.setState({
          isAnimated: !this.state.isAnimated
        });
      }, this.props.duration * 1000);
    } else {
      this.setState({
        isAnimated: !this.state.isAnimated
      });
    }
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <Animate
        start={() => ({
          value: this.props.valueStart
        })}
        update={() => ({
          value: [
            this.state.isAnimated ? this.props.valueEnd : this.props.valueStart
          ],
          timing: {
            duration: this.props.duration * 1000,
            ease: this.props.easingFunction
          }
        })}
      >
        {({ value }) => this.props.children(value)}
      </Animate>
    );
  }
}

// Customized animated Progress Bar for movie rating
class Rating extends React.Component {
	render() {
		const value = this.props.rating;
		return <AnimatedProgressProvider
        valueStart={0}
        valueEnd={this.props.rating}
        duration={3}
        easingFunction={easeQuadInOut}
      >
        {value => {
          const roundedValue = Math.round(value*10);
          return (
            <CircularProgressbar
              value={value}
              text={roundedValue}
			  maxValue={10}
              /* This is important to include, because if you're fully managing the
        animation yourself, you'll want to disable the CSS animation. */
              styles={buildStyles({ 
				  pathTransition: "none",
				  // Colors
				  pathColor: '#ff0080',
				  textColor: '#ffffff',
				  trailColor: '#505050',
				  backgroundColor: '#151515',
				  
				  textSize: '35px',
			  })}
            />
          );
        }}
      </AnimatedProgressProvider>
	}
}

/* The Cover class shows a custom cover in top of the home page.
 * It isn't a fetch of data because of aesthetic reasons.
 */
class Cover extends React.Component{
	render() {
        return <div className = "w-screen">
			<img className = "Cover-image" style = {{width: "100%"}} src="https://image.tmdb.org/t/p/original/skvI4rYFrKXS73BJxWGH54Omlvv.jpg" alt="" fluid={true}/>
		</div>;
	}
}

/*--------------------------------------------------------------------------------------*/

/* We tried to create a class that would implement the OurCarousel class in which we would only 
 * have to define the genre of the list in order to optimize the code; but it was impossible for us to 
 * concatenate the variables because the gender prop had to be included in the map state.
 */

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

/* The function App is the base of all the page. It is the only component that renders.
 * It consists of a navigation bar with a searchbox and the space where the different sites are rendered.
 */
function App() {
  return (
      <div>
	  	<Router>
			<Navbar id = "navbargrad" scrolling dark expand = "md" fixed="top" variant="dark">
				<Link to="/">			
	  				<Navbar.Brand>MovieSearch</Navbar.Brand>
	  			</Link>
				<Nav className="mr-auto">
				</Nav>
				<Form inline>
					<Link to="/search">
						<Button size = "sm" variant="outline-light">Search</Button>
					</Link>
				</Form>
			</Navbar>
	  
        	<ModalSwitch />
        </Router>
      </div>
  );
}

// Routes switch for main Router in App component.
function ModalSwitch() {
  let location = useLocation();

  return (
    <div>
      <Switch location={location}>
        <Route exact path="/" children={<Home />} />
	    <Route path="/movie/:id" component = {Movie}/>
	  	<Route path="/search" component={Search} />
      </Switch>
    </div>
  );
}

// Route switch for Search Router.
function ModalSwitchSearch() {
  let location = useLocation();

  return (
    <div>
		<Switch location={location}>
			<Route path="/search/:query" component = {withRouter(SearchResults)} />
		</Switch>
    </div>
  );
}

/*--------------------------------------------------------------------------------------*/

/* The Home class renders the main page in the App component.
 * It consists of the component Cover and the carousels for each list.
 */
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
	
	// fetch of the url's with a promise
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

    filterChange(event) {
        this.setState({
            filter: event.target.value
        });
    }
	
	// While the page loads, a spinner is shown.
	render() {
        return this.state.loading ?
			<Spinner className = "spinner" animation="grow" variant="light" role="status">
			  <span className="sr-only">Loading...</span>
			</Spinner> :  <div>
                <Cover />
            
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
		
/*--------------------------------------------------------------------------------------*/
		
// The Movie class renders the movie details page in the App component.
class Movie extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            moviedetails: null,
			moviecredits: [],
            loading: true,
			id: this.props.match.params.id
        }
    }

	// Fetch of the movie details and credits url's.
    componentDidMount() {
		Promise.all([
			fetch('https://api.themoviedb.org/3/movie/' + this.state.id + '?api_key=23bc25e075bc85d71e198eee635d5bf9&language=es-ES'), fetch('https://api.themoviedb.org/3/movie/' + this.state.id + '/credits?api_key=23bc25e075bc85d71e198eee635d5bf9')])

		  .then(([resDetails, resCredits]) => { 
			 return Promise.all([resDetails.json(), resCredits.json()]) 
		  })
		  .then(([resDetails, resCredits]) => {
			this.setState({
				moviedetails: resDetails,
				moviecredits: resCredits,
				loading: false,
			});
		  });
	}
	

	// While the page loads, a spinner is shown.
	render() {
        return this.state.loading ?
			<Spinner className = "spinner" animation="grow" variant="light" role="status">
			  <span className="sr-only">Loading...</span>
			</Spinner> :
			<div className = "MovieDetailPage">	
				<div className = "w-screen">
						<img className = "Bg-image" style = {{width: "100%"}} src={'https://image.tmdb.org/t/p/original/' + this.state.moviedetails.backdrop_path} alt="" fluid={true}/>
				</div>
				
				<div className = "container">
					
					<div className = "row">
						<div className = "col-3">
							<img className = "Poster-image" style = {{width: "100%"}} src={'https://image.tmdb.org/t/p/original/' + this.state.moviedetails.poster_path} alt=""/>
						</div>
						<div className = "col">
							
							<div className = "row title">
								<div className = "col-1">
									<Rating rating = {this.state.moviedetails.vote_average}> </Rating>
								</div>

								<div className = "col">
									<h1> {this.state.moviedetails.title} <span className = "year"> {`${`${this.state.moviedetails.release_date}`.substring(0, 4)}`}</span> </h1>
								</div>
							</div>
							
							<div className = "row pl-3">
								<p className = "Tagline">{this.state.moviedetails.tagline}</p>
								<p className = "Sinopsis">{this.state.moviedetails.overview}</p>
								<ButtonToolbar>
									{this.state.moviedetails.genres.map(movie =>
										<div>
											<Button className = "mr-2" variant="outline-secondary" size="sm">{movie.name}</Button>
										</div>
									)}
								</ButtonToolbar>
							</div>

							<div className = "row pl-3">
								<h3 className = "CastTitle">Cast</h3>
								<CardDeck className = "mt-4 mb-4">
									{this.state.moviecredits.cast.slice(0, 5).map(actor =>
										<Card className = "ActorCard" text = "white">
											<Card.Img variant="top" src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + actor.profile_path} />
											<Card.Body>
												<Card.Title>{actor.name}</Card.Title>
												<Card.Text>{actor.character}</Card.Text>
											</Card.Body>
										</Card>
									)}
								</CardDeck>
							</div>

						</div>
							
					</div>

				</div>

			</div>;
	}
}
		
/*--------------------------------------------------------------------------------------*/

// The Search class renders a search box in the App component.		
class Search extends React.Component{
    constructor() {
        super();
        this.state = {
			filter: "",
        }
			
		this.filterChange = this.filterChange.bind(this);
    }
	
	filterChange(event) {
        this.setState({
            filter: event.target.value	// changes the filter value (which is empty at the beggining) to the value of the text input
        });
    }
	
	/* To search, the value in the form input is saved everytime the text is changed.
	 * This value is then passed to the link as a GET parameter. The query is automatically URI encoded.
	 * Below the form there is the ModalSwitchSearch (commented previously) that loads the SearchResults component.
	 */
	render() {
        return <div>		
				<div className = "container">
                	<div className = "row mt-5 mb-5">
						<Form onSubmit={this.handleSubmit} className = "SearchForm">
						    <Row>
								<Col className = "">
								    <FormControl className = "transparent-input" size = "sm" type="text" placeholder="Title" onChange = {this.filterChange} value={this.state.text}/>
								</Col>
								<Col>
								<Link to={'/search/' + this.state.filter}>
								    <Button size = "sm" variant="outline-light">Search</Button>
								</Link>
								</Col>
						    </Row>
						</Form>

						<ModalSwitchSearch />
					</div>
                </div>
			</div>;
	}
}

/*--------------------------------------------------------------------------------------*/

// The SearchResults class renders the results of the search query.
class SearchResults extends React.Component{
	// In the query state, the query (passed by GET) is saved.
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            loading: true,
			query: this.props.match.params.query
        }
    }

	// In the fetch url, the query state, which has the query given, is concatenated.
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
	
	// When the page loads, a spinner is shown.
	render() {
        return this.state.loading ?
			<Spinner className = "spinner" animation="grow" variant="light" role="status">
			  <span className="sr-only">Loading...</span>
			</Spinner> :
			<div>	
				<div className = "container">
					<div className = "row mt-5 mb-5">
						<CardColumns>
							{this.state.searchResults.map(movie =>
							<Card style={{ width: '18rem' }} className = "MovieCard" text = "white">
								<Card.Img variant="top" src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/'+movie.poster_path} />
								<Card.Body>
									<Card.Title>{movie.title}</Card.Title>
									<Card.Text>Nota: {movie.vote_average}</Card.Text>
									<Link to={'/movie/' + movie.id}>
										<Button variant="outline-light" size = "sm">Details</Button>
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

/*--------------------------------------------------------------------------------------*/

export default App;
