
import React, { useState , useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

function AddAna00(props) {
    const [ANA00TipoPersonaTAB04, setANA00TipoPersonaTAB04] = useState('');
    const [ANA00Ragionesociale, setANA00Ragionesociale] = useState('');
    const [ANA00Ragionesociale2, setANA00Ragionesociale2] = useState('');
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

    const baseURL = "https://marketechpro.com/phpgest";
    const [comuni, setComuni] = useState([]);
    const elencoComuni = () => {
      axios.get(baseURL + "/tabelle/listatab32.php").then((response) => {
          setComuni(response.data.ResComuni);
      }).catch(error => {
        alert("Error Ocurred while loading data:" + error);
      });
    }
    const [tipiPersona, setTipiPersona] = useState([]);
    const elencoTipiPersona = () => {
      axios.get(baseURL + "/tabelle/listatab04.php").then((response) => {
        setTipiPersona(response.data.ResTipipersona);
      }).catch(error => {
        alert("Error Ocurred while loading data:" + error);
      });
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //comuni.map((row, index) => {return console.log(row.TAB32Comune)});

    useEffect(() => {
        elencoComuni();
        elencoTipiPersona();
      }, []);    

    return (
        <>
            <button
                onClick={handleShow}
                className="block mx-auto m-2 font-bold py-2 px-4 rounded"
            >
                + Add Ana Generale
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Ana Generale</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            setANA00TipoPersonaTAB04('');
                            setANA00Ragionesociale('');
                            setANA00Ragionesociale2('');
                            setANA00Indirizzo('');
                            setANA00Comune('');
                            setANA00Cap('');
                            setANA00Provincia('');
                            setANA00Nazione('');
                            setANA00Telefono('');
                            setANA00Partitaiva('');
                            setANA00Codicefiscale('');
                            setANA00Email('');
                            setANA00Sesso('');
                            props.newAna00(ANA00TipoPersonaTAB04,ANA00Ragionesociale,ANA00Ragionesociale2,ANA00Indirizzo,ANA00Cap,ANA00Comune,ANA00Provincia,ANA00Partitaiva,ANA00Codicefiscale,ANA00Telefono,ANA00Email,ANA00Sesso);
                        }}
                        id="editmodal"
                        className="w-full max-w-sm"
                    >
                        <div>
                            <label>Tipo Persona:</label>
                            <select name="persona" id="persona-select" onChange={(e) => setANA00TipoPersonaTAB04(e.target.value)}>
                                <option value="">Scegli un opzione</option>
                                {tipiPersona && tipiPersona.map((row, index) => (
                                        <option key={index} value={row.TAB04Codice}>{row.TAB04Descrizione}</option>
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
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name"
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
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="role"
                                    type="text"
                                    value={ANA00Ragionesociale2}
                                    onChange={(e) => {
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
                                        if(e.target.value === comune.TAB32Comune) {
                                            setANA00Cap(comune.TAB32Cap);
                                            setANA00Provincia(comune.TAB32Provincia);
                                        }
                                    })
                                    }
                                }/>
                            <datalist id="datalistOptions">
                                {comuni && comuni.map((row, index) => (
                                    <option key={index} value={row.TAB32Comune}/>
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
                        {/* <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                   
                                >
                                    Nazione
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="name"
                                    type="text"
                                    value={ANA00Nazione}
                                    onChange={(e) => {
                                        setANA00Nazione(e.target.value);
                                    }}
                                />
                            </div>
                        </div> */}
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
                        className="font-bold py-2 px-4 rounded"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                    <button
                        className="font-bold py-2 px-4 rounded"
                        onClick={handleClose}
                        form="editmodal"
                    >
                        Add
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddAna00;