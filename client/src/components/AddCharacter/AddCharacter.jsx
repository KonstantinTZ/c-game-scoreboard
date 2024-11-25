import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router-dom'
import addIcon from '../../assets/add-icon.png'
import Col from 'react-bootstrap/Col'
import './addCharacter.css'

// eslint-disable-next-line react/prop-types
function AddCharacter() {
    const router = useNavigate()
    return (
        <Col lg={2}>
            <Card style={{ width: '100%' , aspectRatio: 1 }} onClick={() => router(`/about/`)} >
                <Card.Body className="add-character-body">
                    <img src={addIcon} alt="картинка добавления" />
                </Card.Body>
            </Card>
        </Col>
    )
}
export default AddCharacter
