import { useContext } from 'react'
import { AuthContext } from '../../context'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './login.css'

function Login() {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    function loginFn(event) {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('isAuth', 'true')
    }
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col className='login-col'>
                    <Form onSubmit={loginFn} className='login-form'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Введите Ваш e-mail</Form.Label>
                            <Form.Control type="email" placeholder="Введите Ваш e-mail" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Введите Ваш пароль</Form.Label>
                            <Form.Control type="password" placeholder="Введите Ваш пароль" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Вход
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}
export default Login
