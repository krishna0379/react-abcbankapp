import { Card, CardDeck } from "react-bootstrap";

export function Contact() {
  return (
    <div className="body">
      <div className="m-2 p-1">
        <h1>Contact Us</h1>
        <img
          src="https://th.bing.com/th/id/OIP.oME-F8lHSTJ22wY8sUH0wAHaDd?pid=ImgDet&rs=1"
          style={{ backgroundSize: "cover", width: "100vw" }}
        />
      </div>
      <CardDeck className="mt-4 p-3">
        <Card>
          <Card.Body>
            <Card.Title>Saptarshi Chakraborty</Card.Title>
            <Card.Text>
              Customer Service Department ABC bank of India State Bank Bhavan,
              16th Floor Madam Cama Road, Mumbai 400 021 Tel: 022-22029456 Fax:
              022 22742431
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>M D V Ajay Kumar</Card.Title>
            <Card.Text>
              Customer Service Department ABC bank of India State Bank Bhavan,
              16th Floor Madam Cama Road, Mumbai 400 021 Tel: 022-22029456 Fax:
              022 22742431
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>P Sai Krishna</Card.Title>
            <Card.Text>
              Customer Service Department ABC bank of India State Bank Bhavan,
              16th Floor Madam Cama Road, Mumbai 400 021 Tel: 022-22029456 Fax:
              022 22742431
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Prashant Phulera</Card.Title>
            <Card.Text>
              Customer Service Department ABC bank of India State Bank Bhavan,
              16th Floor Madam Cama Road, Mumbai 400 021 Tel: 022-22029456 Fax:
              022 22742431
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}
