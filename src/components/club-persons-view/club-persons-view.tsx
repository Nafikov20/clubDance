import React, { memo } from "react";
import { iClubPersons } from "../../pages/app/app";
import { ClubPersonsList } from "../club-persons-list/club-persons-list";

export const ClubPersonsView = memo((clubPersons: iClubPersons) => {
  return (
    <div className='flex gap-10 justify-center items-start'>
        <ClubPersonsList persons={clubPersons.dancePersons} title="На танцполе"/>
        <ClubPersonsList persons={clubPersons.drinkPersons} title="Возле бара"/>
    </div>
  )
});

