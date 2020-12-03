import React from 'react';
import { Card, CardImg, CardBody,
    CardText} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item, isLoading, errMess}) {
    console.log(item)
        if (isLoading) {
            return(
                    <Loading />
            );
        }
        else if (errMess) {
            return(
                    <h4>{errMess}</h4>
            );
        }
        else 
            return(
                <FadeTransform
                    in
                    transformProps={{
                        exitTransform: 'scale(0.5) translateY(-50%)'
                    }}>
                    
                    <Card >
                        <CardImg  src={baseUrl + item.image} alt={item.name} />
                        <CardBody>
                        <CardText>{item.description}</CardText>
                        </CardBody>
                    </Card>
                    
                </FadeTransform>
        );
    
}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                <RenderCard item={props.gift} isLoading={props.giftLoading} errMess={props.giftErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                <RenderCard item={props.cotton} isLoading={props.cottonLoading} errMess={props.cottonErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                <RenderCard item={props.feather} isLoading={props.featherLoading} errMess={props.featherErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;