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

import { Initial_State } from '../constants/first_state';
import React from "react";

export default function (state = Initial_State, action) {
    switch (action.type) {

        case CARDS_START_LOADING:
            return {...state, CardsLoading: true, CardsLoadedSuccessful: false};

        case CARDS_LOADING_SUCCESFUL:
            const CardsLoaded = action.payload.cards;
            return {...state, CardsLoading: false, Cards: CardsLoaded, InitialCards: CardsLoaded, CardsLoadedSuccessful: true};

        case CARDS_LOADING_FAILED:
            return {...state, CardsLoading: false, CardsLoadingError: action.error, Cards: []};

        case GET_POKEMONS:
            let Pokemons = state.InitialCards.filter((item)=>{
                return item.supertype === 'Pokémon';
            })
            return {...state, Cards: Pokemons};

        case GET_TRAINERS:
            let Trainers = state.InitialCards.filter((item)=>{
                return item.supertype === 'Trainer';
            })
            return {...state, Cards: Trainers};

        case GET_ENERGY:
            let Energy = state.InitialCards.filter((item)=>{
                return item.supertype === 'Energy';
            })

            return {...state, Cards: Energy};

        case GET_ALL_CARDS:
            return {...state, Cards: state.InitialCards};

        case GET_CARD:
            return {...state, ShowNavButtons: false};

        case GO_BACK:
            return {...state, ShowNavButtons: true};

        case SELECTEDCARD_START_LOADING:
            return {...state,  SelectedCardReloaded: false, CardReloading: true};

        case SELECTEDCARD_LOADING_SUCCESFUL:
            const CardReloaded = action.payload.card;
            return {...state, CardReloading: false,
                              SelectedCard: CardReloaded,
                              SelectedCardReloaded: true
                              };

        case SELECTEDCARD_LOADING_FAILED:
            return {...state, CardReloading: false,
                              CardsReloadingError: action.error,
                              SelectedCard: []};
        case RELOAD:
            return {...state, CardReloading: true, SelectedCardReloaded: false
            }

        default:
            return state;


    }
}

