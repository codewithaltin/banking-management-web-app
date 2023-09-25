import React from "react";
import Card from "react-credit-cards";
import TokenCheck from "components/TokenCheck";
import "react-credit-cards/es/styles-compiled.css";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

import {
  formatCreditCardNumber,
  formatExpirationDate,
  formatCVC,
} from "./utils";

import Auth from "layouts/Auth.js";
import TableAuth from "layouts/TableAuth";

export default class cards extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    cardNumber: "",
    name: "",
    valid: "",
    cvc: "",
    issuer: "",
    focused: "",
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
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter((d) => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    const response = fetch("http://localhost8080/api/v1/auth/cards", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    setDecoded(decodedToken);
  }, []);

  useEffect(() => {
    if (decoded) {
      if (decoded.authorities != "ROLE_USER") {
        Swal.fire({
          title: "Unauthorized page!",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/");
      }
    } else console.log("decoding failed.");
  }, [decoded]);

    this.setState({ formData });
    this.form.reset();
  };

  render() {
    const { name, cardNumber, valid, cvc, focused, issuer, formData } =
      this.state;

    return (
      <TokenCheck>
        <div>
          <Card
            number={cardNumber}
            name={name}
            expiry={valid}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form
            ref={(c) => (this.form = c)}
            onSubmit={this.handleSubmit}
            className="relative py-6  flex flex-col items-center"
          >
            <div className="p-2 w-1/2">
              <input
                type="tel"
                name="cardNumber"
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
                name="valid"
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
            <div className="p-2 w-1/2 flex justify-center">
              <button className="bg-white px-4 py-2 rounded-lg">Submit</button>
            </div>
          </form>
        </div>
      </TokenCheck>
    );
  }
}

cards.layout = TableAuth;

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
//     valid: '',
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
//     } else if (target.name === 'valid') {
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
