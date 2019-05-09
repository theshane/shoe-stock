import React, {useState} from 'react';
import Card from 'react-bootstrap/Card.js';
import Form from 'react-bootstrap/Form.js';
import styled from 'styled-components';

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

const FieldLabel = styled.span`
`;

const FieldValue = styled.span`
`;

function StockCard(props) {
    const [showForm, setShowForm] = useState(false);
    return (
        <Spacing>
        <StyledCard onClick={() => {
            props.setCurrentShelfId(props.shelf.location);
            props.setShowModal(true);
          }}>
        <Card.Body>
          <Card.Title>{props.shelf.location}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.shelf.hasStock ? `${props.shelf.brand} ${props.shelf.style}` : 'No Stock'}</Card.Subtitle>
          <Card.Text>
            <div><FieldLabel>Size:</FieldLabel> <FieldValue>{props.shelf.size}</FieldValue></div>
            <div><FieldLabel>UPC ID:</FieldLabel> <FieldValue>{props.shelf.upcId}</FieldValue></div>
          </Card.Text>
        </Card.Body>
      </StyledCard>
      </Spacing>
    );
}

export default StockCard;