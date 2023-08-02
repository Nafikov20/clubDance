import { store } from '../src/store';
import { setCurrentTrackAction } from '../src/store/actions';
import { iTrack } from '../src/store/music-reducer';

class Music {
  private _queue: iTrack[];
  private _indexCurrentTrack: number;

  constructor() {
    this._queue = [];
    this._indexCurrentTrack = 0;
  }

  init(tracks: iTrack[]) {
    if (tracks.length === 0) {
      return;
    }
    this._indexCurrentTrack = 0;
    this._queue = tracks;
    this._play();
  }

  private _play(): void {
    const currentTrack = this._queue[this._indexCurrentTrack];
    store.dispatch(setCurrentTrackAction(currentTrack));
    setTimeout(() => {
      this._next();
    }, currentTrack.duration);
  }

  private _next(): void {
    this._indexCurrentTrack++;
    if(this._indexCurrentTrack > this._queue.length - 1){
      this._indexCurrentTrack = 0;
    }
    this._play();
  }
}

export const music = new Music();
