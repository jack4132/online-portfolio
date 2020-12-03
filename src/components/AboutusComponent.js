import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader} from 'reactstrap';
import { Link } from 'react-router-dom';


function About(props) {

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>ABOUT LEO CRAFTS STUDIO</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <p>A craft studio based in <em><strong>Imphal, Manipur, India</strong></em>, Leo Craft Studio make dreamcatcher. This is an online portfolio which exhibit few of my work. I have started making this handmade craft in 2019 as my hobby. Since then I started getting orders from families and friends. Now, I am commercially taking orders for your favourite dreamcatcher. The best part is you can customize the design.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Info</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-3">Order</dt>
                                <dd className="col-8">Accepting orders. For details DM in Instagram!</dd>
                                <dt className="col-3">Items</dt>
                                <dd className="col-8">Feathers & Crochet set available too.</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default About;    