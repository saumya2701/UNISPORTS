import React from 'react'
import { Container } from 'reactstrap'
import logo from './logo.png'
function Header() {

    return (
        <Container>
       
            <img src={logo} style={{ "width": "25%" }} alt="logo" />
      
        </Container>
    )
}
export default Header
