import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Swal from "sweetalert2";

const ShowDetails = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowDetails(data);
      });
  }, [id]);

  const customButtonStyle = {
    background: "linear-gradient(30deg, #0891b2, #a21caf)",
  };
  const customStyle = {
    background: "linear-gradient(30deg, #e9d5ff, #e0e7ff)",
    marginTop: '20px'
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) =>{
    e.preventDefault()
    const bookingData ={
        name: showDetails?.name || "",
    summary: showDetails?.summary || ""
    }
    localStorage.setItem('bookingData',JSON.stringify(bookingData))
    handleClose()
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Movie Ticket booking successfully!!",
        showConfirmButton: false,
        timer: 1500
      });
  }

  return (
    <div>
      <Card style={customStyle}>
      {showDetails?.image ? (
              <Card.Img
                variant="top"
                src={showDetails?.image?.original}
                style={{ height: "650px" }}
              />
            ) : (
              <Card.Img
                variant="top"
                src=""
                alt="Image not available"
                style={{ height: "250px" }}
              />
            )}
        <Card.Header>{showDetails?.name}</Card.Header>
        <Card.Body>
          <Card.Title>Type: {showDetails?.type}</Card.Title>
          <Card.Text>
            {showDetails?.summary}
          </Card.Text>
          <Card.Body>
        <Card.Link href={showDetails?.officialSite}>OfficialSite</Card.Link>
        <Card.Link href={showDetails?._links?.self?.href}>Self Link</Card.Link>
      </Card.Body>
          <Button onClick={handleShow} style={customButtonStyle}>Booking Movie Ticket</Button>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter your name"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Summary</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button style={customButtonStyle} type="submit">
            Submit
          </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={customButtonStyle} onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ShowDetails;
