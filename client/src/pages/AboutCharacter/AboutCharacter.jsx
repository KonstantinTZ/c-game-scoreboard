import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './AboutCharacter.css'

function AboutCharacter() {
  return (
    <Container>
        <Row className='about-header'>
            <h1>
                Мэри
            </h1>
            <div className='about-button-box'>
                <Button>
                    Изменить
                </Button>
                <Button variant='danger'>
                    Удалить
                </Button>
            </div>
        </Row>
        <Row>
            <Col className='about-banner' lg={4}>
                <img src="" alt="" />
            </Col>
            <Col>
                <Row>

                </Row>
            </Col>
        </Row>
    </Container>
  )
}
export default AboutCharacter
