import { Button, Card } from "react-bootstrap";

function UserCard(props) {
    return (
        <div>
            <Card style={{ width: '18rem', margin: '0px auto' }}>
                <Card.Img variant="top" src={props.user?.avatar_url} />
                <Card.Body>
                    <Card.Title> {props.user?.name}</Card.Title>
                    <Card.Text> {props.user?.bio}</Card.Text>
                    <Button as="a" href={props.user?.html_url}>Abrir perfil Github</Button>
                </Card.Body>
            </Card>

        </div>
    );
}
export default UserCard;