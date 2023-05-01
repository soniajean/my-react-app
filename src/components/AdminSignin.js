import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function AdminSignin(props) {

    const handleSignin = async (e) => {
        e.preventDefault();
        const res = await fetch('http://127.0.0.1:5000/api/signin', {
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                username : e.target[0].value,
                password : e.target[1].value,
            })
        });
        const data = await res.json();
        console.log(data);
        props.setAdmin({'in': true, 'token': data.data.token})
    }
    const handleBasicAuth = async (e) => {
      e.preventDefault();
      console.log(e);
      console.log(props.admin['token'])
      const res = await fetch('http://127.0.0.1:5000/api/token', {
        method : 'POST',
        headers: {
          'Authorization': `Bearer ${btoa(e.target[0].value + ':' + e.target[1].value)}`,
          'Content-Type' : 'application/json'
      },
    });
        const data = await res.json();
        console.log(data);
  }

  return (
    <div className="container justify-content-center">
        <h3>Admin Sign In</h3>
    <Form className="mt-auto mt-5" onSubmit={(e) => {handleBasicAuth(e)}}>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>

  )
}