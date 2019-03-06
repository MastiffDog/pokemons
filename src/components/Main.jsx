import React from 'react';
import Cards from './Cards/Cards';
import Header from './Header/Header';
import Card from './Cards/Card';
import {bindActionCreators} from "redux";
import actions from "../actions/card";
import connect from "react-redux/es/connect/connect";
import { Route, Switch } from 'react-router-dom';


class Assembly extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
             <div>
                <Header/>
                <div className="cardsArea">
                <Switch>
                     <Route path='/' exact component={Cards}/>
                     <Route
                        path="/cards/:id"
                        exact
                        render={(props) => {
                            const cardId = props.match.params.id;
                            const selectedCard = this.props.Cards.find((card) => card.id === cardId);
                            return <Card data={selectedCard}/>
                        }}/>
                </Switch>
             </div>
             </div>
        );
    }
}

const mapStateToProps = state => ({...state.card});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

const Main = connect (mapStateToProps, mapDispatchToProps)(Assembly);

export default Main;
