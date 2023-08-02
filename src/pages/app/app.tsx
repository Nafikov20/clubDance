import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { AppHeader } from '../../components/app-header/app-header';
import { MainLayout } from '../../layouts/main-layout/main-layout';
import { ClubPersonsView } from "../../components/club-persons-view/club-persons-view";
import styles from './app.module.css';
import type {} from 'redux-thunk/extend-redux';

import { iPerson } from "../../store/persons-reducer";
import {iTrack} from "../../store/music-reducer";
import { iRootState } from "../../store";
import * as selectors from '../../store/selectors'
import { fetchTracks, fetchPersons } from "../../store/middleware";
import { music } from "../../music";


export interface iClubPersons {
  drinkPersons: iPerson[];
  dancePersons: iPerson[];
}
export function App() {
  const dispatch = useDispatch();
  const currentTrack = useSelector<iRootState, iTrack>(selectors.currentTrack, selectors.isEqualTrack);
  const persons = useSelector<iRootState, iPerson[]>(selectors.persons);
  const tracks = useSelector<iRootState, iTrack[]>(selectors.tracks)
  const [clubPersons, setClubPerson] = useState<{drinkPersons: iPerson[], dancePersons: iPerson[]}>({ drinkPersons: [], dancePersons: [] });

  useEffect(() => {
    dispatch(fetchTracks());
    dispatch(fetchPersons());
  }, [dispatch]);


  useEffect(() => {
    music.init(tracks);
  }, [tracks]);


  useEffect(() => {

    setClubPerson(
      persons.reduce((clubPersons: iClubPersons, person) => {
        person.skills.includes(currentTrack.genre) ? clubPersons.dancePersons.push(person) : clubPersons.drinkPersons.push(person);
        return clubPersons;
      }, { dancePersons: [], drinkPersons: []}),
    );
  }, [currentTrack, persons]);
  return (
    <MainLayout>
      <div className={styles.app}>
        <AppHeader  {...currentTrack}/>
        <ClubPersonsView {...clubPersons} />
      </div>
    </MainLayout>
  );
}
