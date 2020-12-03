import React,{Component} from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, Breadcrumb, BreadcrumbItem,Button,Modal, ModalHeader, ModalBody, Label,Row,Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';


// eslint-disable-next-lin
function RenderDesign({design}) {
            return(
                <div  className="col-12 col-md-5 m-1">
                    <FadeTransform
                        in
                        transformProps={{
                            exitTransform: 'scale(0.5) translateY(-50%)'
                        }}>
                            <Card>
                                <CardImg top src={baseUrl + design.image} alt={design.name} />
                                <CardBody>
                                    <CardTitle>{design.name}</CardTitle>
                                    <CardText>{design.description}</CardText>
                                </CardBody>
                            </Card>
                    </FadeTransform>
                </div>
                
            );
    }
    function RenderComments({comments, postComment, designName}) {
        if (comments != null){
            let list = comments.map((comment)=>{
            return(
                <Fade in>
                    <li key={comment.id} >
                        <p>{comment.comment}</p>
                        <p>--{comment.author},
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                </Fade>
                
            
                );
            });
        
            return(
                <div  className="col-12 col-md-5 m-1">
                    <div><h4>Comments</h4>
                    <ul className="list-unstyled">
                        <Stagger in>
                            {list}
                        </Stagger>   
                    </ul>
                    <CommentForm designName={designName} postComment={postComment} />
                    </div>
                </div>
                    
                    
            );
            }
        else
            return(
                <div></div>
            );
    }



const DesignDetail = (props) => {
    console.log(props.large)
    if (props.isLoadingLarge) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMessLarge) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMessLarge}</h4>
                </div>
            </div>
        );
    }
    if (props.isLoadingMedium) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMessMedium) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMessMedium}</h4>
                </div>
            </div>
        );
    }
    if (props.isLoadingSmall) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMessSmall) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMessSmall}</h4>
                </div>
            </div>
        );
    }

    else if (props.large != null) 
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/collection">Collection</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.large.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.large.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderDesign design={props.large}/>
                    <RenderComments comments={props.comments}
                        postComment={props.postComment}
                        designName={props.large.name}/>    
                </div>
            </div>
            );
    else if (props.medium != null) 
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/collection">Collection</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.medium.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.medium.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderDesign design={props.medium}/>
                    <RenderComments comments={props.comments}
                        postComment={props.postComment}
                        designName={props.medium.name}/>    
                </div>
            </div>
            );
    else if (props.small != null) 
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/collection">Collection</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.small.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.small.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <RenderDesign design={props.small}/>
                    <RenderComments comments={props.comments}
                        postComment={props.postComment}
                        designName={props.small.name}/>    
                </div>
            </div>
            );
}
export default DesignDetail;

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length < len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isModelOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModelOpen: !this.state.isModelOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.designName, values.rating, values.author, values.comment);
    }

    render() {
        return(
            <div>
                <Button  color="primary" onClick={this.toggleModal}>
                    <span className="fa fa-edit fa-lg"></span> Submit Comment
                </Button>
                
                <Modal isOpen={this.state.isModelOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label for="rating" md={12}>rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                <Control.text model=".author" id="author" name="author" 
                                    placeholder="Author" 
                                    className="form-control" 
                                    validators={{
                                        required,
                                        minLength: minLength(3),
                                        maxLength: maxLength(15)
                                    }} 
                                />
                                <Errors className="text-danger" model=".author" show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Should have more than 3 Characters',
                                        maxLength: 'Should have 15 or less Characters'
                                    }}
                                />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="feedback" md={12}>Your feedback</Label>
                                <Col md={12}>
                                <Control.text model=".comment" id="comment" name="comment" 
                                    resize="none"
                                    rows="12" 
                                    className="form-control" 
                                    validators={{
                                        required,
                                    }} 
                                />
                                <Errors className="text-danger" model=".comment" show="touched"
                                    messages={{
                                        required: 'Required'
                                    }}
                                />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>                            
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>

        )
    }
}
