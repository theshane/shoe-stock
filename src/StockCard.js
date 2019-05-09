import React from 'react';
import Card from 'react-bootstrap/Card.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Spacing = styled.div`
    padding: 10px;
    margin-right: 10px;
`;

const StyledCard = styled(Card)`
position: relative;
display: -ms-flexbox;
display: flex;
-ms-flex-direction: column;
flex-direction: column;
min-width: 0;
word-wrap: break-word;
background-color: #fff;
background-clip: border-box;
border: 1px solid rgba(0,0,0,.125);
border-radius: .25rem;
min-width: 200px;
cursor: pointer;
`;


function StockCard(props) {
    return (
        <Spacing>
        <StyledCard onClick={() => {
            props.setCurrentShelfId(props.shelf.location);
            props.setShowModal(true);
          }}>
        <Card.Body>
          <Card.Title>Shelf {props.shelf.location}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Shelf{props.shelf.hasStock ? `${props.shelf.brand} ${props.shelf.style}` : 'No Stock'}</Card.Subtitle>
            <div>Size: {props.shelf.size}</div>
            <div>UPC ID: {props.shelf.upcId}</div>
        </Card.Body>
      </StyledCard>
      </Spacing>
    );
}

StockCard.propTypes = {
    setCurrentShelfId: PropTypes.func.isRequired,
    setShowModal: PropTypes.func.isRequired,
    shelf: PropTypes.object.isRequired,
}

export default StockCard;