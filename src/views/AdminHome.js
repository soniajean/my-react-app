import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AdminHome = props => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        console.log(props.admin['token'])
        const res = await fetch('http://127.0.0.1:5000/api/admincreatepost', {
          method : 'POST',
          headers: {
            'Authorization': `Bearer ${props.admin['token']}`,
            'Content-Type' : 'application/json'
        },
            body : JSON.stringify({
                title : e.target[0].value,
                img_url : e.target[1].value,
                body : e.target[2].value,
            })
        });
        const data = await res.json();
        console.log(data);
      }


    return (
        <div className="container text-align-center">
            <div className="row">
                <h2>Admin HOMEPAGE!</h2>
            </div>
            <div className="row">
                <Form className="col-8 mt-auto mt-5" onSubmit={(e) => {handleSubmit(e)}} >
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Title" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image Address/url</Form.Label>
                        <Form.Control type="text" placeholder="Enter Image Address/url" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Body</Form.Label>
                        <Form.Control type="text" placeholder="Enter Body" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}
export default AdminHome;