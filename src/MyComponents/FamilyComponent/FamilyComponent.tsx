import {simpsons} from "../../data/data-simpsons.ts";
import {CharacterComponent} from "../CharacterComponent/CharacterComponent.tsx";

export const FamilyComponent = () => {
    return (
        <div>
            {
                simpsons.map( (value,index)  => <CharacterComponent key={index}  item = {value}>
                    {value.info}
                </CharacterComponent>)
            }
                </div>
           );

        };
