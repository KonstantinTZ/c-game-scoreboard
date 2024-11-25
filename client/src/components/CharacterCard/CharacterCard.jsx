import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/esm/Col'
import { useNavigate } from 'react-router-dom'


// eslint-disable-next-line react/prop-types
function CharacterCard({ title, descr, id }) {
    const router = useNavigate()
    return (
        <Col lg={2} >
            <Card style={{ width: '100%', aspectRatio: 1 }} onClick={() => router(`/about/${id}`)} >
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {descr}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default CharacterCard
