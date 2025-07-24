import MyCard from '../../my-app/src/Card.jsx'; // renamed local card component
import './App.css';
import { blog } from './blog.jsx';
import Footer from './footer.jsx';
import Header from './header.jsx';
import { Col, Card, Button, Container, Row } from 'react-bootstrap'; // ✅ import react-bootstrap components


function App() {
  return (
    <>
      {/* Border examples using Bootstrap */}
      <span className="border m-3 p-3">Border</span>
      <span className="border-top m-3 p-3">Top Border</span>
      <span className="border-end m-3 p-3">Right Border</span>
      <span className="border-bottom m-3 p-3">Bottom Border</span>
      <span className="border-start m-3 p-3">Left Border</span>

      <Header email="riya.sahrma@gmail.com" />
      <h1 style={{ color: 'black', backgroundColor: 'aqua' }}>Welcome</h1>

      {/* Custom Card component */}
      <div className="card border border-primary" style={{ width: '18rem', fontSize: '18px' }}>
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: '18px' }}>This is my card</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary" style={{ fontSize: '20px' }}>
            This is my new card. Use it if you want.
          </h6>
          <p className="card-text">Hope you enjoy it.</p>

          <a href="#" className="card-link">Card link</a>

          <div className="buttons mt-2">
            <button type="button" className="btn btn-secondary btn-lg">Large button</button>
            <button type="button" className="btn btn-secondary btn-sm ms-2">Small button</button>
          </div>
        </div>
      </div>

      <Container>
        <Row>
         {blog.map((v,i)=>{
          return(
            <ProductItems />
          )
         })}
         
        </Row>
      </Container>

      {/* Bootstrap card example */}
      

      <Footer />
    </>
  );
}

export default App;

function ProductItems() {
  return (
    <Col lg={3} md={6} className="m-3">
      <Card>
        <Card.Body>
          <Card.Title>Course 1</Card.Title>
          <Card.Text>
            Here is quick example of card.
          </Card.Text>
          <Button variant="primary">Let's Go</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
