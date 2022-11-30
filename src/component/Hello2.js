import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import {input} from "react-bootstrap";
import React, {useState, useEffect} from "react";


export default Hello2;

function Hello2() {
    return (
        <div>
            <h1>Hello World</h1>
            <Button variant="primary">Primary</Button>
            <input type="text" placeholder="Enter text" />
        </div>
    );
};