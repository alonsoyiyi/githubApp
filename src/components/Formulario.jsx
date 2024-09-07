import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {Col} from "react-bootstrap";


const URL_GITHUB=`https://api.github.com/users`;

function Formulario(props) {

    async function handleSubmit(e){
        e.preventDefault();
        props.setUser(null);
        const inputUser=e.target.userName.value;
        if(!inputUser) return null;
        const response= await fetch(`${URL_GITHUB}/${inputUser}`);
        if(!response) return null;
        const user = await response.json();
        props.setUser(user);
        e.target.userName.value='';
        
    }
    return (
        <Form onSubmit={handleSubmit} id="formulario" style={{width:'400px',margin:'10px auto'}}>
            <Form.Group as={Col} md="auto">
                <Form.Label>Ingresa tu User de Github:</Form.Label>
                <Form.Control  id="userName" type="text" placeholder="user de GitHub" size="sm" />
            </Form.Group>
            <Button type='submit' variant='success' style={{margin:'10px'}} >Buscar</Button>
        </Form>
    );
}
export default Formulario;