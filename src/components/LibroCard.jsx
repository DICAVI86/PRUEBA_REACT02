import {useContext} from 'react';
import { LibrosContexto } from '../context/LibroProvider';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LibroCard() {

    const {libros} = useContext(LibrosContexto);
    const navigate = useNavigate();

  return (
    <>
    {libros.map((libro)=>(
    <Card key={libro.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={libro.imagen} />
      <Card.Body>
        <Card.Title>{libro.titulo}</Card.Title>
        <Card.Text>
          {libro.descripcion}
        </Card.Text>
        <Button variant="primary" onClick={()=>navigate(`/libros/${libro.id}`)}>Ver más</Button>
      </Card.Body>
    </Card>
     ))};
    </>

  )
}

export default LibroCard