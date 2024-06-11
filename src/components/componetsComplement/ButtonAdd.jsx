import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import addImg from '../../img/add64.png'
import { Link } from 'react-router-dom';
const ButtonAdd = () => {
    return (
        <div className='buttonAdd'>
            <Container>
                <Row>
                    <Col>
                        <Link to={'/añadirPlato'}><Image src={addImg} rounded /></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ButtonAdd