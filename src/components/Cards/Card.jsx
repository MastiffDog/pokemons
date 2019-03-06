import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {Container, Row, Col, Button, Image} from 'react-bootstrap';
import {bindActionCreators} from "redux";
import actions from "../../actions/card";
import connect from "react-redux/es/connect/connect";

class ShowCard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
            this.props.actions.reloadCard(this.props.data.id);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.CardReloading) {
            this.props.actions.reloadCard(this.props.data.id);
        }
    }

    render() {
            if (this.props.CardReloading) {
               return (
                    <div className="LoadingCard">
                        <h1>Selected card loading, please wait...</h1>
                    </div>);
            }
            if (this.props.SelectedCardReloaded) {
                return (
                    <div className="selectedCard">
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <h1 className="headerName">{this.props.SelectedCard.name}</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <Image src={this.props.SelectedCard.imageUrlHiRes} width="500px" height="500px"
                                           rounded/>
                                </Col>
                                <Col md={6}>
                                    <div className="options">
                                        <h1>Specification:</h1>
                                        <div className="detailsList">
                                            <ul>
                                                <li>Artist: {this.props.SelectedCard.artist}</li>
                                                <li>Set: {this.props.SelectedCard.set}</li>
                                                <li>SetCode: {this.props.SelectedCard.setCode}</li>
                                                <li>Series: {this.props.SelectedCard.series}</li>
                                                <li>Type: {this.props.SelectedCard.supertype}</li>
                                            </ul>
                                        </div>
                                        <div className="Back">
                                            <LinkContainer to="/">
                                                <Button variant="info" className="cardButton"
                                                        onClick={this.props.actions.goBack}
                                                >Back to main page</Button>
                                            </LinkContainer>
                                        </div>
                                                <Button variant="info" className="cardButton"
                                                        onClick={this.props.actions.Reload}
                                                >Reload</Button>
                                        </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                )
            }
        return <div> Гыгыгыгы </div>;
    }
}

const mapStateToProps = state => ({...state.card});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const Card = connect (mapStateToProps, mapDispatchToProps)(ShowCard);

export default Card;
