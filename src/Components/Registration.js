import React, { Component } from 'react';
import { Form, Label, Input, FormGroup, FormFeedback, Button } from 'reactstrap';
import { isEmail, isMobilePhone } from 'validator';
import { Container, Row, Col } from 'reactstrap';

class Registration extends Component {

    state = {
        data: {
            firstname: '',
            lastname: '',
            email: '',
            mobilenumber: ''
        },
        error: {}
    };

    handleInput = (e) => {
        this.setState({
            data: {
                ...this.state.data,
                [e.target.name]: e.target.value
            },
            error: {
                ...this.state.error,
                [e.target.name]: ''
            }
        })
    }

    validate = () => {
        const { data } = this.state;
        let error = {};

        if (data.firstname === '') error.firstname = "First Name can not be blank.";
        if (data.lastname === '') error.lastname = "Last Name can not be blank.";
        if (!isEmail(data.email)) error.email = "Email must be valid";
        if (data.email === '') error.email = "Email can not be blank.";
        if (!isMobilePhone(data.mobilenumber, 'en-IN')) error.mobilenumber = "Mobile Number must be valid.";
        if (data.mobilenumber === '') error.mobilenumber = "Mobile Number can not be blank.";


        return error;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const error = this.validate()
        if (Object.keys(error).length === 0) {
            this.props.history.replace('/users');
        } else {
            this.setState({ error });
        }
    }

    render() {
        const { data, error } = this.state
        return (
            <div>
                <Container>
                    <Row >
                        <Col>
                            <Form onSubmit={this.handleSubmit} style={{ "padding": "18px" }}>
                                <h3 style={{ "marginBottom": "20px" }}>Registration Form</h3>
                                <FormGroup>
                                    <Label for="firstname">First Name</Label>
                                    <Input id="firstname" value={data.firstname} invalid={error.firstname ? true : false} name="firstname" onChange={this.handleInput}></Input>
                                    <FormFeedback>{error.firstname}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="lastname">Last Name</Label>
                                    <Input id="lastname" value={data.lastname} invalid={error.lastname ? true : false} name="lastname" onChange={this.handleInput}></Input>
                                    <FormFeedback>{error.lastname}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input id="email" value={data.email} invalid={error.email ? true : false} name="email" onChange={this.handleInput}></Input>
                                    <FormFeedback>{error.email}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="mobilenumber">Mobile Number</Label>
                                    <Input type="number" value={data.mobilenumber} id="mobilenumber" invalid={error.mobilenumber ? true : false} name="mobilenumber" onChange={this.handleInput}></Input>
                                    <FormFeedback>{error.mobilenumber}</FormFeedback>
                                </FormGroup>
                                <Button color="primary">Register</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Registration