import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Users from './Users/Users';
import Info from "./Users/Info/Info";
import { Container } from 'reactstrap';

class Home extends Component {

    state = {
        users: [],
        isloaded: false,
        isAllUser: true
    }

    componentDidMount() {
        fetch('https://api.github.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isloaded: true,
                    users: json.slice(0, 10),
                    isAllUser: true
                });
                localStorage.setItem('users', JSON.stringify(json.slice(0, 10)));
            });
    }

    render() {
        let { users, isloaded } = this.state;
        let userList = null;
        if (this.state.isAllUser) {
            userList = <Users userList={users} userSelectHandler={this.userSelectHandler}> </Users>
        }
        if (!isloaded) {
            return <Container>Loading...</Container>
        } else {
            return (
                <div>
                    {userList}
                    <Route path={this.props.match.url + '/:id'} exact component={Info} />
                </div>
            );
        }
    }

    userSelectHandler = (id) => {
        this.setState({ isAllUser: false })
        this.props.history.push('/users/' + id);
    }
}

export default Home
