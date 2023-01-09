import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Alert} from 'react-bootstrap';

import AddForm from '../../components/ana00/create-ana00.js';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from "axios";

 
const Ana00 = () => {
    
  const baseURL = "https://marketechpro.com/phpgest";
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [anaGenerale, setAnaGenerale] = useState([]);

  const setAnaGeneraleData = () => {
    axios.get(baseURL + "/anagrafiche/listaana00.php").then((response) => {
        setAnaGenerale(response.data.ResGenerale);
    }).catch(error => {
      alert("Error Ocurred while loading data:" + error);
    });
  }
  const onDelete = (id) => {
    const data = new FormData()
    data.append('ANA00Codice', id)
    axios.post(baseURL +'/anagrafiche/deleteana00.php',data)
     .then(() => {
      setAnaGeneraleData();
    })
  }

  useEffect(() => {
    setAnaGeneraleData();
  }, []);
 
  return (
 
       <div className="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div className="row ">
           <div className="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
              </div>    
              </div>  
              <div className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{color:"green"}}><h2><b>Ana 00</b></h2></div>
              <div className="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <a href="#" className="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }} onClick={handleShow} >Create</a>
             </div>
           </div>  
            <div className="row">
                <div className="table-responsive " >
                 <table className="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>ANA Ragionesociale</th>
                            <th>ANA Ragionesociale 2</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    anaGenerale &&
                    anaGenerale.map((row, index) => (
                        <tr key={index}>
                            <td>{row.ANA00Ragionesociale}</td>
                            <td>{row.ANA00Ragionesociale2}</td>
                            <td>
                            <Link to={`/details/${row.ANA00Codice}`}>Details</Link>
                                <a href="#" className="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}>Edit<i className="material-icons">&#xE417;</i></a>
                                <a href="#" className="edit" title="Edit" data-toggle="tooltip" onClick={() => onDelete(row.ANA00Codice)}>Delete<i className="material-icons">&#xE254;</i></a>
                            </td>
                        </tr>
                           ))
                        }
                    </tbody>
                </table>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>
                            Add Employee
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddForm />
                    </Modal.Body>
                    <Modal.Footer>
                            <Button onClick={handleClose}>
                                Close Button
                            </Button>
                    </Modal.Footer>
                  </Modal>
            </div>   
        </div>  
       </div>  
      </div> 
  );
}
 
export default Ana00;