import { iTrack, SET_CURRENT_TRACK, SET_TRACKS } from "./music-reducer";
import { iPerson, SET_PERSONS } from "./persons-reducer";

export type tSetPersonsAction = {
    type: string,
    payload: iPerson[]
}

export type tSetTracksAction = {
    type: 'SET_TRACKS',
    payload: iTrack[]
}
export type tSetCurrentTrackAction = {
    type: 'SET_CURRENT_TRACK'
    payload: iTrack
}
export type tMusicActions = tSetTracksAction | tSetCurrentTrackAction;
export const setTracks = (payload: iTrack[]): tSetTracksAction => ({type: SET_TRACKS, payload: payload});
export const setCurrentTrackAction = (payload: iTrack): tSetCurrentTrackAction => ({type: SET_CURRENT_TRACK, payload: payload});
export const setPersons = (payload: iPerson[]) => ({type: SET_PERSONS, payload: payload});
