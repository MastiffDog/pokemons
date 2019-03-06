import {
  CARDS_START_LOADING,
  CARDS_LOADING_SUCCESFUL,
  CARDS_LOADING_FAILED,
  GET_POKEMONS,
  GET_TRAINERS,
  GET_ENERGY,
  GET_ALL_CARDS,
  GET_CARD,
  GO_BACK,
  SELECTEDCARD_START_LOADING,
  SELECTEDCARD_LOADING_SUCCESFUL,
  SELECTEDCARD_LOADING_FAILED,
  RELOAD

} from '../constants';
import axios from "axios";


const actions = {

    GetCards() {
        return (dispatch, getStore) => {
            dispatch({
                type: CARDS_START_LOADING
            });
            axios
                .get('https://api.pokemontcg.io/v1/cards')
                .then(response => {
                    dispatch({
                        type: CARDS_LOADING_SUCCESFUL,
                        payload: response.data
                    })
                })
                .catch(reason => {
                    dispatch({
                        type: CARDS_LOADING_FAILED,
                        error: reason.message
                    })
                })
        }
    },
    getPokemons () {
        return {
            type: GET_POKEMONS
        }
    },
    getTrainers () {
        return {
            type: GET_TRAINERS
        }
    },
    getEnergy () {
        return {
            type: GET_ENERGY
        }
    },
    getAllCards () {
        return {
            type: GET_ALL_CARDS
        }
    },
    getCard () {
        return {
            type: GET_CARD
        }
    },
    goBack () {
        return {
            type: GO_BACK
        }
    },
    reloadCard(cardPath) {
        return (dispatch, getStore) => {
            dispatch({
                type: SELECTEDCARD_START_LOADING
            });
            axios
                .get('https://api.pokemontcg.io/v1/cards/'+cardPath)
                .then(response => {
                    dispatch({
                        type: SELECTEDCARD_LOADING_SUCCESFUL,
                        payload: response.data, cardPath
                    })
                })
                .catch(reason => {
                    dispatch({
                        type: SELECTEDCARD_LOADING_FAILED,
                        error: reason.message
                    })
                })
        }
    },
    Reload() {
        return {
            type: RELOAD
        }
    },

}

export default actions;
