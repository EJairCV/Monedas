import { useEffect, useState } from "react";
import { callConvert, conversionAll } from "../services/MonedasServices";

import Accordion from "react-bootstrap/Accordion";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Col from 'react-bootstrap/Col';

function MonedasItem({ data }) {
  const calcular = () => {
    conversionAll(valueChange, data.symbol, monedaChanges).then((res) =>
      setMonedaChanges(res)
    );
  };

  const [monedaChanges, setMonedaChanges] = useState([]);
  const [monedaInfo, setMonedaInfo] = useState({});
  const [valueChange, setValueChange] = useState(1);

  useEffect(() => {
    callConvert(data).then((x) => {
      setMonedaChanges(x.rates);
      setMonedaInfo(x.data);
    });
  }, []);

  return (
    <Col md={4} style={{marginTop:10,marginBottom:10}}>
      <Accordion >
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Cambios de {data.name} {"(" + data.symbol + ")"}{" "}
          </Accordion.Header>
          <Accordion.Body>
            <Form.Control
              type="number"
              onChange={(e) => {
                setValueChange(e.target.value);
              }}
            />
            <Button style={{marginBottom:10, marginTop:10}} onClick={calcular}>Cambiar</Button>
            {monedaChanges.map((moneda) => {
              return (
                <div key={moneda.symbol}>
                  <h5>
                    {moneda.symbol} : {moneda.change}
                  </h5>
                </div>
              );
            })}
            Ultima actualización de cambio de moneda: {monedaInfo.date}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Col>
  );
}

export default MonedasItem;
