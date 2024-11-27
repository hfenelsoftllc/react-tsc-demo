type PersonListProps = {
    names:{
        lname: string;
        fname: string;  
        }[]
}
    

export const PersonList =(props: PersonListProps) =>{
    return(
        <div>
            {
                props.names.map((name) =>{
                    return(
                        <h3 key={name.fname}>
                            {name.fname} {name.lname}
                        </h3>
                    )
                   })
            }        
        </div>
    );
}