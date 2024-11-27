
type Props = {
    name: string;
    msgCount: number;
    isLoggedIn: boolean;
}


export const Greet = (props: Props) =>{
    return(
        <div>
            <h2>
                { props.isLoggedIn 
                    ? `Welcome to ${props.name} Blog | You have ${props.msgCount} unread messages`
                    : 'Welcome Guest'
                }
            </h2>
        </div>
    )

}