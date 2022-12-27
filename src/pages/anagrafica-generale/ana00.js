import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
 
const Ana00 = () => {
    
  const baseURL = "https://marketechpro.com/phpgest";
  const [anaGenerale, setAnaGenerale] = useState([]);

  const setAnaGeneraleData = () => {
    axios.get(baseURL + "/anagrafiche/listaana00.php").then((response) => {
        setAnaGenerale(response.data.ResGenerale);
    }).catch(error => {
      alert("Error Ocurred while loading data:" + error);
    });
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
                        <tr>
                            <td>{row.ANA00Ragionesociale}</td>
                            <td>{row.ANA00Ragionesociale2}</td>
                            <td>
                            <Link to={`/details/${row.ANA00Codice}`}>test</Link>
                            <a href="#" className="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}>Details<i className="material-icons">&#xE872;</i></a>
                                <a href="#" className="view" title="View" data-toggle="tooltip" style={{ color: "#10ab80" }}>Edit<i className="material-icons">&#xE417;</i></a>
                                <a href="#" className="edit" title="Edit" data-toggle="tooltip">Delete<i className="material-icons">&#xE254;</i></a>
                                

                            </td>
                        </tr>
                           ))
                        }
                    </tbody>
                </table>
            </div>   
        </div>  
       </div>  
      </div> 
  );
}
 
export default Ana00;