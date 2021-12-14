import React from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"





const styles={
    display:"inline",
    
    li:{
        margin:"10px"
    }
    
}

export default function Nav() {
    
    return (
        <Container> 
            <Row>
                <ul>
                    
                    <li style={styles}><a href="/">ORO</a></li>
                    
                    
                    <li style={styles}><a href="/">PLATA</a></li>
                    
                    
                    <li style={styles}><a href="/">ACERO</a></li>                
                    
                </ul>
            </Row>
        </Container>
    )
}
