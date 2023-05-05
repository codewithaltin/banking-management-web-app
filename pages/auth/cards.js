import React, { useState, useRef } from 'react';
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import {
  formatCreditCardNumber,
  formatExpirationDate,
  formatCVC,
} from './utils';
import Auth from "layouts/Auth.js";

export default function cards() {

  const API_BASE_URL = "http://localhost:8080/api/v1/cards";

  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [valid, setValid] = useState('');
  const [cvc, setCVC] = useState('');
  //const [issuer, setIssuer] = useState('');
  const [focused, setFocused] = useState('');
  const [formData, setFormData] = useState(null);
  const formRef = useRef(null);

  const handleCallback = ({ issuer }, isValid) => {
    // if (isValid) {
    //   setIssuer(issuer);
    // }
  };

  const handleInputFocus = ({ target }) => {
    setFocused(target.name);
  };

  const handleInputChange = ({ target }) => {
    if (target.name === 'cardNumber') {
      target.value = formatCreditCardNumber(target.value);
      setCardNumber(target.value);
    } else if (target.name === 'valid') {
      target.value = formatExpirationDate(target.value);
      setValid(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
      setCVC(target.value);
    } else if (target.name === 'name') {
      setName(target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const card = response.json();
    console.log(card);

    setFormData(formData);
    formRef.current.reset();
  };

  return (
    <div>
      <Card
        number={cardNumber}
        name={name}
        expiry={valid}
        cvc={cvc}
        focused={focused}
        callback={handleCallback}
      />
      <form ref={formRef} onSubmit={handleSubmit}
        className="relative py-6 flex flex-col items-center"
      >
        <div className="p-2 w-1/2">
          <input
            type="tel"
            name="cardNumber"
            className="w-full rounded-lg"
            placeholder="Card Number"
            pattern="[\d| ]{16,22}"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="p-2 w-1/2">
          <input
            type="text"
            name="name"
            className="w-full rounded-lg"
            placeholder="Name"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="p-2 w-1/2">
          <input
            type="tel"
            name="valid"
            className="w-full rounded-lg"
            placeholder="Valid Thru"
            pattern="\d\d/\d\d"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="p-2 w-1/2">
          <input
            type="tel"
            name="cvc"
            className="w-full rounded-lg"
            placeholder="CVC"
            pattern="\d{3,4}"
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        {/* <input type="hidden" name="issuer" value={issuer} /> */}
        <div className="p-2 w-1/2 ">
          <button className="bg-white w-full rounded-lg">Submit</button>
        </div>
      </form>
    </div>
  );
}

cards.layout = Auth;    