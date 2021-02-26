import React from 'react';
import { Card } from 'react-bootstrap';

const ImageCard = ({img}) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 d-flex">
            <Card>
                <Card.Img src={require(`../assets/images/${img}.jpg`)} className="card-image"/>
            </Card>
        </div>
    );
};

export default ImageCard;