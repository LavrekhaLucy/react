import {ICharacter} from "../../models/ICharacter.ts";
import {ReactNode} from "react";

interface CharacterComponentProps {
    item: ICharacter,
    children: ReactNode,
}

export const CharacterComponent = ({item,children}: CharacterComponentProps) => {
    return (
        <div className='my-10 border-2'>
          <h2 className='text-2xl'>{item.name} {item.surname}</h2>
            <img src={item.photo} alt={item.name} />
            <p>{children}</p>
        </div>
    );
};