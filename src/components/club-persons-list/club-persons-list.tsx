import React, { FC }  from "react";
import { iPerson } from "../../store/persons-reducer";
interface iSeparatedPersonsViewProps {
  persons: iPerson[];
  title: string;
}
export const ClubPersonsList: FC<iSeparatedPersonsViewProps> = ({persons, title}: iSeparatedPersonsViewProps) => {
  const skillsFormatted = (skills: string[]) => skills.join(',');
  return (
    <ul>
      <h2 className='text-sky-900'>
        {title}
      </h2>
      {persons.map(({id, name, skills}: iPerson) => (
        <li className='m-6' key={id}>
            <span className='m-1'>
              {name}
            </span>
          <div className='m-1'>
            Умения: {skillsFormatted(skills)}
          </div>
        </li>
      ))}
    </ul>
  )
}

