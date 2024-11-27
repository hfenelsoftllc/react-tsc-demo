
type Props = {
    name: string;
    msgCount?: number;
    isLoggedIn: boolean;
}


export const Greet = (props: Props) =>{
    const{msgCount = 0} = props

    return(
        <div>
            <h2>
                { props.isLoggedIn 
                    ? `Welcome to ${props.name} Blog | You have ${msgCount} unread messages`
                    : 'Welcome Guest'
                }
            </h2>
        </div>
    )

}