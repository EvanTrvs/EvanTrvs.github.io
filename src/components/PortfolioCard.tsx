import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PortfolioCard() {
  return (
    <Card style={{ width: '20vw' }}>
      <Card.Body>
        <Card.Title>Hi!</Card.Title>
        <Card.Text>
          Sofware engineer, I am passionate about web development and new technologies. I am currently looking for a job as a front-end developer.
        </Card.Text>
        <Button variant="primary">Learn more about me...</Button>
      </Card.Body>
    </Card>
  );
}

export default PortfolioCard;