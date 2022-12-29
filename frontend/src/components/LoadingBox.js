import Spinner from 'react-bootstrap/Spinner';
export default function LoadingBox(){
    return (
        <Spinner animation="border" role ="status" className='mt-3'>
            <span className="visually-hidden">Cargando...</span>
        </Spinner>
    )
}

