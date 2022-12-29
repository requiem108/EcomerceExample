import Alert from "react-bootstrap/Alert"

export default function MessageBox(props){
    return (
        <Alert variant={props.variant || 'info'} className='mt-3'>{props.children}</Alert>                    
        )
}