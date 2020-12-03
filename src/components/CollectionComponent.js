import React from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
 
/* Two ways of declaring function is shown */
//last function contains the first function

function RenderDesignItem({item}){
  return(
    <Card color="info">
      <Link to={`/collection/${item.name}`}>
      <CardImg width="100%" src={baseUrl + item.image} alt={item.name} />
        <CardImgOverlay >
            <CardTitle tag="h5">{item.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>

  );
}

/* This is similar to declaring function as in above. Just replace const with function and use props as function argument just like the former one.*/

const Collection = (props) => { 
    const large = props.large.large.map((large) => {
          return (
            <div key={large.id} className="col-12 col-md-5 m-1">
              <RenderDesignItem item={large} />
            </div>
          );
      });
      const medium = props.medium.medium.map((medium) => {
        return (
          <div key={medium.id} className="col-12 col-md-5 m-1">
            <RenderDesignItem item={medium} />
          </div>
        );
    });
    const small = props.small.small.map((small) => {
      return (
        <div key={small.id} className="col-12 col-md-5 m-1">
          <RenderDesignItem item={small} />
        </div>
      );
  });
      if (props.large.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
      else if (props.large.errMess) {
          return(
              <div className="container">
                  <div className="row"> 
                      <div className="col-12">
                          <h4>{props.large.errMess}</h4>
                      </div>
                  </div>
              </div>
          );
      }
      else
        return (
          <div className="container">
            <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                  <BreadcrumbItem active>Collection</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>Large</h3>
                  <hr />
              </div>                
            </div>
            <div className="row">
              {large}
            </div> 
            <div className="row">
            <div className="col-12">
                <h3>Medium</h3>
                <hr />
              </div>
            </div>
            <div className="row">
              {medium}
            </div> 
            <div className="row">
            <div className="col-12">
                <h3>Small</h3>
                <hr />
              </div>
            </div>
            <div className="row">
              {small}
            </div>      
          </div>
        );
}

export default Collection;