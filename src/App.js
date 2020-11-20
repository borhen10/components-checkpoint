import ProfilPhoto from "./component/profile/ProfilPhoto"
import FullName from "./component/profile/FullName"
import Address from './component/profile/Address'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";





function App() {
  return (
    <div
      className=" d-flex justify-content-center"
      style= {{marginTop: "20px" , backgroundColor: "black" }} 

      >
    <Card style={{ width: "250px", borderRadius: "6px" }} className="shadow"  >
      <ProfilPhoto variant="top" src="holder.js/100px180" />
      <Card.Body >
        <FullName>Issaoui Borhen</FullName>
        <Address>
          isaoui55borhen@gmail
      </Address>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}


export default App;