type PersonProps = {
    name:{
        lname: string;
        fname: string;  
        }
}
    

export const Person =(props: PersonProps) =>{
    return(
        <div>
            <h3>
                {props.name.fname} {props.name.lname}
            </h3>
        </div>
    );
}