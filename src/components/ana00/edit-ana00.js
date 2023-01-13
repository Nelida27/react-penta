import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function EditAna00(props) {
    const [ANA00Ragionesociale, setANA00Ragionesociale] = useState(props.ANA00Ragionesociale);
    const [ANA00Ragionesociale2, setANA00Ragionesociale2] = useState(props.ANA00Ragionesociale2);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                                    ANA00Ragionesociale2
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