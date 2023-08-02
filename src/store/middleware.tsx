import { iTrack } from "./music-reducer";
import { iPerson } from "./persons-reducer";
import { ThunkAction } from "redux-thunk";
import songsJSON from '../data/songs.json';
import personsJSON from '../data/persons.json';
import { setPersons, setTracks, tSetPersonsAction, tSetTracksAction } from "./actions";
import { iRootState } from ".";


export function fetchPersons(): ThunkAction<void, iRootState, unknown, tSetPersonsAction> {
    return function(dispatch){
        Promise.resolve(personsJSON)
        .then((persons: iPerson[]) => {
            dispatch(setPersons(persons))
        })
    }
}


export function fetchTracks(): ThunkAction<void, iRootState, unknown, tSetTracksAction> {
    return function(dispatch){
        return Promise.resolve(songsJSON)
        .then((tracks: iTrack[]) => {
            dispatch(setTracks(tracks))
        })
    }
}
