import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeParas, getParag ,getParag2} from "./redux/paragraf/randomParagrafsSlice";
import { Container, Row, Col, Card, Input } from "reactstrap";

import "./App.css";
function App() {
  const parag = useSelector((state) => state.parag.paragraf);
  const paras = useSelector((state) => state.parag.paras);
  
  const [test, settext] = useState("html")
  const dispatch = useDispatch();
  useEffect(() => {
   if(test==="html"){
     dispatch(getParag(paras));
   }else if(test==="text"){
     dispatch(getParag2(paras))
   }
    
  }, [dispatch,paras,test]);
 
  
  return (
    <div className="gray">
      <Container>
        <Row className="mt-5">
          <Col xs="8">
            <h1 className="text-white">React sample text generator app</h1>
          <Row> 
            <Col xs="4">
              <Input
                placeholder="Params"
                value={paras}
                onChange={(e)=>dispatch(changeParas(e.target.value)) }
              />
            
              <select name="text" value={test} onChange={(e)=>settext(( e.target.value))}> 
                <option value="html">Html</option>
                <option value="text">Text</option>
              </select>
              
            </Col>
            
            </Row>
            <hr />
            <Card className="bg-dark py-5 px-5">
              <p className="text-white">{parag}</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
