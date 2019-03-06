import React from 'react';
import { Navbar,Button } from 'react-bootstrap';
import { bindActionCreators } from "redux";
import actions from "../../actions/card";
import connect from "react-redux/es/connect/connect";


class HeaderNavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.ShowNavButtons && this.props.CardsLoadedSuccessful) {
        return (
        <Navbar bg="dark" expand="lg" fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Button variant="link" className="navButtonFirst" onClick={this.props.actions.getPokemons}>Pokemons</Button>
                <Button variant="link" className="navButtons" onClick={this.props.actions.getTrainers}>Trainers</Button>
                <Button variant="link" className="navButtons" onClick={this.props.actions.getEnergy}>Energy</Button>
                <Button variant="link" className="navButtons" onClick={this.props.actions.getAllCards}>All cards</Button>
                <Button variant="link"  className="navButtons" onClick={this.props.actions.GetCards}>Reload cards</Button>
            </Navbar.Collapse>
        </Navbar>);
    }
        return (
            <Navbar bg="dark" expand="lg" fixed="top">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                        <h3>Pokemons SPA</h3>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = state => ({...state.card});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const Header = connect (mapStateToProps, mapDispatchToProps)(HeaderNavBar);

export default Header;
