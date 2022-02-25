import React from 'react';
import './Spinner.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

export default function Spinner(){
    return (
        <div className="contenedorSpinner">
            <FontAwesomeIcon icon={faSpinner} className="spinner"/>
        </div>
    );
};