import React, { useState, useEffect } from "react";
import Navbar from "./NavBar.js";
import Container from "react-bootstrap/Container.js";
import Row from "react-bootstrap/Row.js";
import Col from "react-bootstrap/Col.js";
import styled from "styled-components";
import StockCard from "./StockCard.js";
import FormModal from "./FormModal.js";

const StyledContainer = styled(Container)`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 30px;
`;

function App() {
  const [stock, setStock] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [currentShelfId, setCurrentShelfId] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      fetch("data.json").then(async response => {
        const data = await response.json();
        setStock(data);
      });
    };
    fetchData();
  }, []);

  const updateStock = (shelfId, newValue) => {
    newValue.location = shelfId;
    newValue.hasStock = newValue.brand ? true : false;
    stock[shelfId] = newValue;
    setStock({ ...stock });
    setShowModal(false);
  };

  console.log(currentShelfId, stock[currentShelfId]);

  return (
    <div>
      <FormModal
        show={showModal}
        shelfId={currentShelfId}
        setShowModal={setShowModal}
        updateStock={updateStock}
        stock={stock[currentShelfId] || {}}
      />
      <Navbar />
      <StyledContainer>
        <Row>
          {Object.keys(stock).map(location => {
            return (
              <Col>
                <StockCard
                  shelf={stock[location]}
                  setShowModal={setShowModal}
                  setCurrentShelfId={setCurrentShelfId}
                />
              </Col>
            );
          })}
        </Row>
      </StyledContainer>
    </div>
  );
}

export default App;
