

import { Container, Row, Col } from 'reactstrap';
import infostyle from './Info.module.css';

const info = (props) => {
    const users = JSON.parse(localStorage.getItem('users'));
    const id = parseInt(props.match.params.id);
    return (<div>
        {users.filter(user => user.id === id).map(user => {
            return <div key={user.id}>
                <Container>
                    <Row>
                        <Col>
                            <div className={infostyle.outborder}>
                                <div className={infostyle.img}><img src={user.avatar_url} /></div>
                                <div className={infostyle.contentstyle}><h3>{user.login}</h3>
                                    <p>type : {user.type}</p>
                                    <h5><u>More Information</u></h5>
                                    <ul>
                                        <li>{user.gists_url}</li>
                                        <li>{user.starred_url}</li>
                                        <li>{user.subscriptions_url}</li>
                                        <li>{user.organizations_url}</li>
                                        <li>{user.followers_url}</li>
                                    </ul>
                                   
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        })
        }
    </div>);
}

export default info;