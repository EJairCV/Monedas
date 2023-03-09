import { useEffect, useState } from "react";
import MonedasItem from "./MonedasItem";
import {call} from "../services/MonedasServices"

import Row from 'react-bootstrap/Row';


function MonedasList() {
  const [listMonedas, setlistMonedas] = useState([]);

  useEffect(() => {
    
    call().then(x=>setlistMonedas(x))
    
  }, []);

  return (
    <Row >{listMonedas.map((x) => {
        return <MonedasItem key={x.symbol} data={x}></MonedasItem>;
      })}</Row>
    
      
    
  );
}

export default MonedasList;
