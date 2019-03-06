import React from 'react';
import { Image,Button,Card,Container, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { bindActionCreators } from "redux";
import actions from "../../actions/card";
import connect from "react-redux/es/connect/connect";
import Loading from "../../images/Loading.png"


class CardsList extends React.Component {
    constructor(props) {
        super(props);
        }

    componentDidMount() {
         if(!this.props.CardsLoadedSuccessful){
             this.props.actions.GetCards();
         }
    }

    render() {
        if (!this.props.CardsLoadedSuccessful) {
            return (
                <div>
                    <Image src={Loading} width="100%" height="100%"/>
                </div>);
        } else {
            const CardsNumber=this.props.Cards.length;
            let CardsLine=[];
            let CardsRender=[];
            for(let i=0; i<CardsNumber; i++){
                if(CardsLine.length>3) {
                    CardsRender.push(CardsLine);
                    CardsLine=[];
                }
                CardsLine.push(this.props.Cards[i]);
            }
            if(CardsNumber<=4) {
                CardsRender.push(CardsLine);
            }

            return (
                <Container> {
                CardsRender.map((obj, i) => {
                    return (
                        <Row key={i}>
                            {obj.map((item,j)=>{
                                return (
                                    <Col md={3} key={j}>
                                        <Card className="CardsContainer">
                                            <Card.Img variant="top" src={item.imageUrl} width="250px" height="250px"/>
                                            <Card.Body>
                                                <Card.Title>{item.name}</Card.Title>
                                                <Card.Text>
                                                  Class: {item.supertype}
                                                </Card.Text>
                                                <LinkContainer to={'/Cards/'+item.id}>
                                                   <Button variant="primary" onClick={this.props.actions.getCard}>See details</Button>
                                                </LinkContainer>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    );
                })}
                </Container>


            );
        }
    }
}

const mapStateToProps = state => ({...state.card});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const Cards = connect (mapStateToProps, mapDispatchToProps)(CardsList);

export default Cards;

