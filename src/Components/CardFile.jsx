import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DataFile } from "../Redux/Api";
import Card from "react-bootstrap/Card";

function CardFile() {
  const [first, setfirst] = useState([]);

  const dispatch = useDispatch();

  const handleclick = (e) => {
    e.preventDefault();

    DataFile(dispatch);
  };

  const take = useSelector((state) => state.Collector.Data);
  

  useEffect(() => {
    setfirst(take);
  }, [handleclick]);

  return (
    <div>
      <button onClick={handleclick}>Click for Data</button>

      {first ?
        first[0].map((display) => (
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{display.title}</Card.Title>
                <Card.Text>{display.body}</Card.Text>
              </Card.Body>
            </Card>
          </div>
          
        )):<p>No data</p>}
    </div>
  );
}

export default CardFile;
