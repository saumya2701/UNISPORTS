import {
    Card, CardImg, CardBody,
    CardTitle, Button
} from 'reactstrap';
import cardstyle from './user.module.css';

const user = (props) => {

    return (
        <div className = {cardstyle.floating}>
        <Card>
            <CardImg top width="100%" src={props.userInfo.avatar_url} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h5">{props.userInfo.login}</CardTitle>
                <Button  color="info" onClick={() => props.userSelectHandler(props.userInfo.id)} className = {cardstyle.btnstyle}>Button</Button>
            </CardBody>
        </Card>
        </div>
    );
}

export default user;