import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import { useContext } from 'react'
import { AuthContext } from '../../context'
import Button from 'react-bootstrap/Button'
import './characters.css'
import AddCharacter from '../../components/AddCharacter/AddCharacter'

function CharacterList() {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    function logOut (event) {
        event.preventDefault()
        setIsAuth(false)
        localStorage.setItem('isAuth', 'false')
    }

  return (
    <Container>
        <Row>
            <Col className='characters-nav'>
                <Button onClick={logOut} variant="danger">
                    Выход
                </Button>
            </Col>
        </Row>
        <Row className='h-auto'>
            <CharacterCard title={'Персонаж Мэри'} descr={"За меня не переживай.Ранено только тело"} id={1}/>
            <AddCharacter/>
        </Row>
    </Container>
  )
}
export default CharacterList
