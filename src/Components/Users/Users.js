import User from './User/User';
import { Container } from 'reactstrap';

const users = (props) => {

    const userList = props.userList;

    return (
        <Container>
                    {userList.map(user => { return <User key={user.id} userInfo={user} userSelectHandler={props.userSelectHandler}></User> })}
        </Container>
    )
}

export default users;