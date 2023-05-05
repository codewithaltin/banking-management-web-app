import React from 'react';
import Card from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
//import "../../styles/cards.css"


import {
  formatCreditCardNumber,
  formatExpirationDate,
  formatCVC,
  formatFormData,
} from './utils';

import Auth from "layouts/Auth.js";

export default class cards extends React.Component {
  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null,
  };

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name,
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };


  handleSubmit = e => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    console.log(formData);
    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

    return (
      <div>
        <Card
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focused}
          callback={this.handleCallback}
        />
        <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}
          className="relative py-6 flex flex-col items-center"
        >
          <div className="p-2 w-1/2">
            <input
              type="tel"
              name="number"
              className="w-full rounded-lg"
              placeholder="Card Number"
              pattern="[\d| ]{16,22}"
              required
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
          <div className="p-2 w-1/2">
            <input
              type="text"
              name="name"
              className="w-full rounded-lg"
              placeholder="Name"
              required
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
          <div className="p-2 w-1/2">
            <input
              type="tel"
              name="expiry"
              className="w-full rounded-lg"
              placeholder="Valid Thru"
              pattern="\d\d/\d\d"
              required
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
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
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </div>
          <input type="hidden" name="issuer" value={issuer} />
          <div className="p-2 w-1/2 ">
            <button className="bg-white w-full rounded-lg">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

cards.layout = Auth









// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import Auth from "layouts/Auth.js";


// import Card from "react-credit-cards";
// import "react-credit-cards/es/styles-compiled.css";

// import {
//   formatCreditCardNumber,
//   formatExpirationDate,
//   formatCVC,
//   formatFormData,
// } from './utils';

// export default class App extends React.Component {
//   state = {
//     number: '',
//     name: '',
//     expiry: '',
//     cvc: '',
//     issuer: '',
//     focused: '',
//     formData: null,
//   };

//   handleCallback = ({ issuer }, isValid) => {
//     if (isValid) {
//       this.setState({ issuer });
//     }
//   };

//   handleInputFocus = ({ target }) => {
//     this.setState({
//       focused: target.name,
//     });
//   };

//   handleInputChange = ({ target }) => {
//     if (target.name === 'number') {
//       target.value = formatCreditCardNumber(target.value);
//     } else if (target.name === 'expiry') {
//       target.value = formatExpirationDate(target.value);
//     } else if (target.name === 'cvc') {
//       target.value = formatCVC(target.value);
//     }

//     this.setState({ [target.name]: target.value });
//   };


//   handleSubmit = e => {
//     e.preventDefault();
//     const { issuer } = this.state;
//     const formData = [...e.target.elements]
//       .filter(d => d.name)
//       .reduce((acc, d) => {
//         acc[d.name] = d.value;
//         return acc;
//       }, {});

//     console.log(formData);
//     this.setState({ formData });
//     this.form.reset();
//   };

//


// const phoneReg =
//     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// const schema = yup
//     .object()
//     .shape({
//         fullName: yup
//             .string()
//             .required("Full Name is required.")
//             .min(5, "Full name must be longer than 5 characters")
//             .max(50, "Full name must be shorter than 50 characters."),
//         email: yup
//             .string()
//             .email("Please enter a valid e-mail")
//             .required("Email is required."),
//         phoneNumber: yup
//             .string()
//             .required("Phone number is required")
//             .matches(phoneReg, "Phone Number is not valid."),
//         password: yup
//             .string()
//             .required("Password is required.")
//             .min(5, "Password must be 5 characters long")
//             .max(35, "Password must be shorter than 35 characters"),
//         confirmPassword: yup
//             .string()
//             .oneOf([yup.ref("password"), null], "Passwords do not match.")
//             .required("Confirm Password field is required."),
//     })
//     .required();
// export default function Register() {
//     const {
//         register,
//         handleSubmit,
//         watch,
//         formState: { errors },
//     } = useForm({ resolver: yupResolver(schema) });
//     const onSubmit = (data) => console.log(data);

//
// }

