import { PersonProps } from "./Person.types";
    

export const Person =(props: PersonProps) =>{
    return(
        <div>
            <h3>
                {props.name.fname} {props.name.lname}
            </h3>
        </div>
    );
}