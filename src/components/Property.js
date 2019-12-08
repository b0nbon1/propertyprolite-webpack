import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Spinner,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardSubtitle,
  CardBody,
  Button
} from "reactstrap";

import { fetchProperties } from "../store/actions/propertyActions";

export class Properties extends Component {
  componentDidMount() {
    this.props.fetchProperties();
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
  static renderLoading() {
    return (
      <div className="pt-5 m-5 d-flex justify-content-center">
        <Spinner type="grow" color="danger" data-test="spinner-test" />
      </div>
    );
  }

  renderProperties() {
    console.log(this.props.properties);
    return (
      <Container>
        <Row className="pt-5">
          {this.props.properties.map(property => (
            <Col 
            style={{marginBottom: '50px'}}
            sm="4" key={property.id} data-test="property-cards-test">
              <Card>
              <CardImg top width="100%" style={{height: "300px"}} src={property.imageurl} alt="House for sale pic" />
                <CardBody>
                  <CardTitle>{property.status}</CardTitle>
                  <CardSubtitle>Price: ${property.price}</CardSubtitle>
                  <CardText>Location: {property.address} {property.city}, {property.state}</CardText>
                  <CardText>Type: {property.type}</CardText>
                    <CardText>
                      <small className="text-muted">Posted on {property.createdon}</small>
                    </CardText>
                    <Button>More info</Button>
                </CardBody>
            </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  render() {
    return (
      <div>
        {this.props.loading ? Properties.renderLoading() : this.renderProperties()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  properties: state.properties.properties.data,
  loading: state.properties.loading
});

export default connect(
  mapStateToProps,
  { fetchProperties }
)(Properties);