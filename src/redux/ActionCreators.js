import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (designName, rating, author, comment) => (dispatch) => {

    const newComment = {
        designame: designName,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(baseUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
}


export const fetchLarge = () => (dispatch) => {

    dispatch(largeLoading(true));

    return fetch(baseUrl + 'large')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(large => dispatch(addLarge(large)))
    .catch(error => dispatch(largeFailed(error.message)));
}


export const largeLoading = () => ({
    type: ActionTypes.LARGE_LOADING
});

export const largeFailed = (errmess) => ({
    type: ActionTypes.LARGE_FAILED,
    payload: errmess
});

export const addLarge = (large) => ({
    type: ActionTypes.ADD_LARGE,
    payload: large
});

export const fetchMedium = () => (dispatch) => {

  dispatch(mediumLoading(true));

  return fetch(baseUrl + 'medium')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(medium => dispatch(addMedium(medium)))
  .catch(error => dispatch(mediumFailed(error.message)));
}


export const mediumLoading = () => ({
  type: ActionTypes.MEDIUM_LOADING
});

export const mediumFailed = (errmess) => ({
  type: ActionTypes.MEDIUM_FAILED,
  payload: errmess
});

export const addMedium = (medium) => ({
  type: ActionTypes.ADD_MEDIUM,
  payload: medium
});

export const fetchSmall = () => (dispatch) => {

  dispatch(smallLoading(true));

  return fetch(baseUrl + 'small')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(small => dispatch(addSmall(small)))
  .catch(error => dispatch(smallFailed(error.message)));
}


export const smallLoading = () => ({
  type: ActionTypes.SMALL_LOADING
});

export const smallFailed = (errmess) => ({
  type: ActionTypes.SMALL_FAILED,
  payload: errmess
});

export const addSmall = (small) => ({
  type: ActionTypes.ADD_SMALL,
  payload: small
});


export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchCotton = () => (dispatch) => {
    
    dispatch(cottonLoading());

    return fetch(baseUrl + 'cotton')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(cotton => dispatch(addCotton(cotton)))
    .catch(error => dispatch(cottonFailed(error.message)));
}

export const cottonLoading = () => ({
    type: ActionTypes.COTTON_LOADING
});

export const cottonFailed = (errmess) => ({
    type: ActionTypes.COTTON_FAILED,
    payload: errmess
});

export const addCotton = (cotton) => ({
    type: ActionTypes.ADD_COTTON,
    payload: cotton
});


export const fetchFeather = () => (dispatch) => {

  dispatch(featherLoading(true));

  return fetch(baseUrl + 'feather')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(feather => dispatch(addFeather(feather)))
  .catch(error => dispatch(featherFailed(error.message)));
}


export const featherLoading = () => ({
  type: ActionTypes.FEATHER_LOADING
});

export const featherFailed = (errmess) => ({
  type: ActionTypes.FEATHER_FAILED,
  payload: errmess
});

export const addFeather = (feather) => ({
  type: ActionTypes.ADD_FEATHER,
  payload: feather
});


export const fetchGift = () => (dispatch) => {
    
  dispatch(giftLoading());

  return fetch(baseUrl + 'gift')
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          var errmess = new Error(error.message);
          throw errmess;
    })
  .then(response => response.json())
  .then(gift => dispatch(addGift(gift)))
  .catch(error => dispatch(giftFailed(error.message)));
}

export const giftLoading = () => ({
  type: ActionTypes.GIFT_LOADING
});

export const giftFailed = (errmess) => ({
  type: ActionTypes.GIFT_FAILED,
  payload: errmess
});

export const addGift = (gift) => ({
  type: ActionTypes.ADD_GIFT,
  payload: gift
});




export const postFeedback = (firstname, lastname, telnum,email, agree,contactType,message) => (dispatch) => {

  const newFeedback = {
      firstname: firstname,
      lastname: lastname,
      telnum: telnum,
      email:email,
      agree: agree,
      contactType: contactType,
      message: message,
  };
  newFeedback.date = new Date().toISOString();
  
  return fetch(baseUrl + 'feedback', {
      method: "POST",
      body: JSON.stringify(newFeedback),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => alert("Thank for submitting feedback!\n" + JSON.stringify(response)))
  .catch(error =>  { console.log('post feedback', error.message); alert('Your feedback could not be posted\nError: '+error.message); });
}