import React, { useState,useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

function EditAna00(props) {
    const [ANA00TipoPersonaTAB04, setANA00TipoPersonaTAB04] = useState('');
    const [ANA00Ragionesociale, setANA00Ragionesociale] = useState(props.ANA00Ragionesociale);
    const [ANA00Ragionesociale2, setANA00Ragionesociale2] = useState(props.ANA00Ragionesociale2);
    const [ANA00Indirizzo, setANA00Indirizzo] = useState('');
    const [ANA00Comune, setANA00Comune] = useState('');
    const [ANA00Cap, setANA00Cap] = useState('');
    const [ANA00Provincia, setANA00Provincia] = useState('');
    const [ANA00Nazione, setANA00Nazione] = useState('');
    const [ANA00Telefono, setANA00Telefono] = useState('');
    const [ANA00Partitaiva, setANA00Partitaiva] = useState('');
    const [ANA00Codicefiscale, setANA00Codicefiscale] = useState('');
    const [ANA00Email, setANA00Email] = useState('');
    const [ANA00Sesso, setANA00Sesso] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [comuni, setComuni] = useState([]);
    const baseURL = "https://pixora-pentapoc-dev.odoo.com/pentapoc/";
    const elencoComuni = () => {
      axios.get(baseURL + "comuni").then((response) => {
          setComuni(response.data.ResComuni);
      }).catch(error => {
        alert("Error Ocurred while loading data:" + error);
      });
    }
    const [tipiPersona, setTipiPersona] = useState([]);
    const elencoTipiPersona = () => {
      axios.get(baseURL + "tipipersona").then((response) => {
        setTipiPersona(response.data);
      }).catch(error => {
        alert("Error Ocurred while loading data:" + error);
      });
    }
    const [nazioni, setNazioni] = useState([]);
    const elencoNazioni = () => {
      axios.get(baseURL + "nazioni").then((response) => {
        setNazioni(response.data);
      }).catch(error => {
        alert("Error Ocurred while loading data:" + error);
      });
    }

    useEffect(() => {
        elencoComuni();
        elencoTipiPersona();
        elencoNazioni();
      }, []);

    return (
        <>
            <a href="#" className="view" title="View" data-toggle="tooltip" style={{ paddingLeft: "10px",paddingRight:"10px" }}  onClick={handleShow}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={(e) => {
                            handleClose();
                            e.preventDefault();
                            props.updateAna00(props.id, ANA00Ragionesociale, ANA00Ragionesociale2);
                            console.log(ANA00Ragionesociale,'where');
                        }}
                        id="editmodal"
                        className="w-full max-w-sm"
                    >
                        <div>
                            <label>Tipo Persona:</label>
                            <select name="persona" id="persona-select" onChange={(e) => setANA00TipoPersonaTAB04(e.target.value)}>
                                <option value="">Scegli un opzione</option>
                                {tipiPersona && tipiPersona.map((row, index) => (
                                        <option key={index} value={row.codice}>{row.descrizione}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   
                                >
                                    ANA00Ragionesociale
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="ANA00Ragionesociale"
                                    type="text"
                                    value={ANA00Ragionesociale}
                                    onChange={(e) => {
                                        setANA00Ragionesociale(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    
                                >
                                    ANA00Ragionesociale 2
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="ANA00Ragionesociale2"
                                    type="text"
                                    value={ANA00Ragionesociale2}
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        setANA00Ragionesociale2(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   
                                >
                                    Indirizzo
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name"
                                    type="text"
                                    value={ANA00Indirizzo}
                                    onChange={(e) => {
                                        setANA00Indirizzo(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="form-label">Comune</label>
                            <input className="form-control" 
                                list="datalistOptions" 
                                id="exampleDataList" 
                                placeholder="Type to search..." 
                                value={ANA00Comune} 
                                onChange={(e) => {
                                    setANA00Comune(e.target.value);
                                    comuni.forEach((comune) => {
                                        //console.log(comune);
                                        if(e.target.value === comune.comune) {
                                            setANA00Cap(comune.cap);
                                            setANA00Provincia(comune.provincia);
                                        }
                                    })
                                    }
                                }/>
                            <datalist id="datalistOptions">
                                {comuni && comuni.map((row, index) => (
                                    <option key={index} value={row.comune}/>
                                ))
                            }
                            </datalist>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   
                                >
                                    Cap
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name"
                                    type="text"
                                    value={ANA00Cap}
                                    onChange={(e) => {
                                        setANA00Cap(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   
                                >
                                    Provincia
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name"
                                    type="text"
                                    value={ANA00Provincia}
                                    onChange={(e) => {
                                        setANA00Provincia(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="form-label">Nazione</label>
                            <input className="form-control" 
                                list="datalistOptions" 
                                id="exampleDataList" 
                                placeholder="Type to search..." 
                                value={ANA00Nazione} 
                                onChange={(e) => {
                                    setANA00Nazione(e.target.value);
                                    }
                                }/>
                            <datalist id="datalistOptions">
                                {nazioni && nazioni.map((row, index) => (
                                    <option key={index} value={row.codice}>{row.nazione}</option>
                                ))
                            }
                            </datalist>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   
                                >
                                    P.Iva
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name"
                                    type="text"
                                    value={ANA00Partitaiva}
                                    onChange={(e) => {
                                        setANA00Partitaiva(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   
                                >
                                    Cod. Fiscale
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name"
                                    type="text"
                                    value={ANA00Codicefiscale}
                                    onChange={(e) => {
                                        setANA00Codicefiscale(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   
                                >
                                    Telefono
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name"
                                    type="text"
                                    value={ANA00Telefono}
                                    onChange={(e) => {
                                        setANA00Telefono(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   
                                >
                                    Email
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name"
                                    type="text"
                                    value={ANA00Email}
                                    onChange={(e) => {
                                        setANA00Email(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" onChange={(e) => {if (e.target.checked) setANA00Sesso('M');}}/>
                        <label className="form-check-label">
                            Uomo
                        </label>
                        <input className="form-check-input" type="radio" name="flexRadioDefault" onChange={(e) => {if (e.target.checked) setANA00Sesso('F');}}/>
                        <label className="form-check-label">
                            Donna
                        </label>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className=" hover:bg-slate-500 font-bold py-2 px-4 rounded"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                    <button
                        className="hover:bg-purple-700 font-bold py-2 px-4 rounded"
                        form="editmodal"
                    >
                        Update
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditAna00;