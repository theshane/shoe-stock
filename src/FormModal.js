import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal.js";
import Button from "react-bootstrap/Button.js";
import Form from "react-bootstrap/Form.js";
import PropTypes from 'prop-types';

function FormModal(props) {
    const defaultStock = {
        location: props.shelfId,
        brand: '',
        style: '',
        size: 0,
        upcId: '',
        hasStock: false,
    };

    const [stock, setStock] = useState(defaultStock);

    const setField = (field,value) => {
        setStock({...stock, [field]: value});
    }


    useEffect(() => {
        setStock({...props.stock});
    }, [props.stock])


  return (
    <Modal show={props.show}>
      <Modal.Header closeButton onClick={() => props.setShowModal(false)}>
        <Modal.Title>Add Stock To Shelf {props.shelfId}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Label>Brand</Form.Label>
          <Form.Control type="text" placeholder="Enter brand" value={stock.brand} onChange={(event) => setField('brand', event.target.value)}/>
          <Form.Label>Style</Form.Label>
          <Form.Control type="text" placeholder="Enter style" value={stock.style} onChange={(event) => setField('style', event.target.value)} />
          <Form.Label>Size</Form.Label>
          <Form.Control type="text" placeholder="Enter size" value={stock.size} onChange={(event) => setField('size', event.target.value)} />
          <Form.Label>UPC ID</Form.Label>
          <Form.Control type="text" placeholder="Enter UPC ID" value={stock.upcId} onChange={(event) => setField('upcId', event.target.value)} />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.setShowModal(false)}>
          Close
        </Button>
        {props.stock.brand && <Button variant="danger" onClick={() => props.updateStock(props.shelfId, defaultStock)} >Remove</Button>}
        <Button variant="primary" onClick={() => props.updateStock(props.shelfId, stock)}>Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
}

FormModal.propTypes = {
    show: PropTypes.bool.isRequired,
    shelfId: PropTypes.number.isRequired,
    setShowModal: PropTypes.func.isRequired,
    updateStock: PropTypes.func.isRequired,
    stock: PropTypes.object.isRequired,
}

export default FormModal;
