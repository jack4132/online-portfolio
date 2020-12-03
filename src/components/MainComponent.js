import React,{Component} from 'react';
import Collection from './CollectionComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import DesignDetail from './DesigndetailComponent';
import About from './AboutusComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { postComment,postFeedback, fetchLarge,fetchMedium,fetchSmall, fetchComments, fetchCotton, fetchGift, fetchFeather } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    large: state.large,
    medium: state.medium,
    small: state.small,
    gift: state.gift,
    comments: state.comments,
    cotton: state.cotton,
    feather: state.feather
  }
}

const mapDispatchToProps = dispatch => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchLarge: () => { dispatch(fetchLarge())},
  fetchMedium: () => { dispatch(fetchMedium())},
  fetchSmall: () => { dispatch(fetchSmall())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  fetchComments: () => dispatch(fetchComments()),
  fetchCotton: () => dispatch(fetchCotton()),
  fetchGift: () => dispatch(fetchGift()),
  fetchFeather: () => dispatch(fetchFeather()),
  postFeedback: (firstname,lastname,telnum,email,agree,contactType,message) => dispatch(postFeedback(firstname,lastname,telnum,email,agree,contactType,message))
});



class Main extends Component {
  componentDidMount() {
    this.props.fetchLarge();
    this.props.fetchMedium();
    this.props.fetchSmall();
    this.props.fetchComments();
    this.props.fetchCotton();
    this.props.fetchGift();
    this.props.fetchFeather();
  }
 
  
 /* HomePage: we can instead chose to go like the one with "menu component below". Bothe method are same.*/
 // Both these are required methods so we can add arguments like dishes.
  render() {
    const DesignWithId = ({match}) => {
      return(
        <DesignDetail large={this.props.large.large.filter((large) => large.name === (match.params.designName))[0]}
            isLoadingLarge={this.props.large.isLoading}
            errMessLarge={this.props.large.errMess}
            medium={this.props.medium.medium.filter((medium) => medium.name === (match.params.designName))[0]}
            isLoadingMedium={this.props.medium.isLoading}
            errMessMedium={this.props.medium.errMess}
            small={this.props.small.small.filter((small) => small.name === (match.params.designName))[0]}
            isLoadingSmall={this.props.small.isLoading}
            errMessSmall={this.props.small.errMess}
            comments={this.props.comments.comments.filter((comment) => comment.designame === (match.params.designName))} /*match.params.dishId : this dishId is from link provided to DishWithId.*/
            commentsErrMess={this.props.comments.errMess}
            postComment={this.props.postComment}
          />
  );
};
    const HomePage = () => {  
        return(
          <Home 
              large={this.props.large.large.filter((large) => large.featured)[0]}
              largeLoading={this.props.large.isLoading}
              largeErrMess={this.props.large.errMess}
              feather={this.props.feather.feather.filter((feather) => feather.featured)[0]}
              featherLoading={this.props.feather.isLoading}
              featherErrMess={this.props.feather.errMess}
              cotton={this.props.cotton.cotton.filter((cotton) => cotton.featured)[0]}
              cottonLoading={this.props.cotton.isLoading}
              cottonErrMess={this.props.cotton.errMess}
              gift={this.props.gift.gift.filter((gift) => gift.featured)[0]}
              giftLoading={this.props.gift.isLoading}
              giftErrMess={this.props.gift.errMess}
          />
      );
    }
  return (
    <div className="App">
      <Header />
      <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location}>
                  <Route path='/home' component={HomePage} />
                  <Route exact path='/about' component={() => <About />} />
                  <Route exact path='/collection' component={() => <Collection large={this.props.large} medium={this.props.medium} small={this.props.small} />} />
                  <Route path='/collection/:designName' component={DesignWithId} />
                  <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback}/>} />
                  <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
      <Footer />
    </div>
  );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
