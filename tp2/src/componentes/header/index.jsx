import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


const estilos={        
        color:"red"    
}


const Header = ({titulo}) =>{
    return(
        <>
        <header>
            <Container>
                <Row className="justify-content-center">
                    <Col></Col>
                    <Col>
                        <h1 style={estilos}> {titulo} </h1>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </header>
    </>
    )
}

export default Header