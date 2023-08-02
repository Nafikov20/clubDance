import { iRootState } from ".";
import { iTrack } from "./music-reducer";

export const persons = (state: iRootState) => state.persons.persons;
export const tracks = (state: iRootState) => state.music.tracks;
export const currentTrack = (state: iRootState) => state.music.currentTrack;
// equality function for useselector, to prevent needless render
export const isEqualTrack = (prevTrack: iTrack, nextTrack: iTrack): boolean => prevTrack.id === nextTrack.id;
