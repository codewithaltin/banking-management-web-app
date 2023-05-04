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

//   render() {
//     const { name, number, expiry, cvc, focused, issuer, formData } = this.state;

//     return (
//       <div className="container mx-auto px-4 h-full">
//         <Card
//           number={number}
//           name={name}
//           expiry={expiry}
//           cvc={cvc}
//           focused={focused}
//           callback={this.handleCallback}
//         />
//         <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <input
//               type="tel"
//               name="number"
//               className="form-control"
//               placeholder="Card Number"
//               pattern="[\d| ]{16,22}"
//               required
//               onChange={this.handleInputChange}
//               onFocus={this.handleInputFocus}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               name="name"
//               className="form-control"
//               placeholder="Name"
//               required
//               onChange={this.handleInputChange}
//               onFocus={this.handleInputFocus}
//             />
//           </div>
//           <div className="row">
//             <div className="col-6">
//               <input
//                 type="tel"
//                 name="expiry"
//                 className="form-control"
//                 placeholder="Valid Thru"
//                 pattern="\d\d/\d\d"
//                 required
//                 onChange={this.handleInputChange}
//                 onFocus={this.handleInputFocus}
//               />
//             </div>
//             <div className="col-6">
//               <input
//                 type="tel"
//                 name="cvc"
//                 className="form-control"
//                 placeholder="CVC"
//                 pattern="\d{3,4}"
//                 required
//                 onChange={this.handleInputChange}
//                 onFocus={this.handleInputFocus}
//               />
//             </div>
//           </div>
//           <input type="hidden" name="issuer" value={issuer} />
//           <div className="form-actions">
//             <button className="btn btn-primary btn-block">Submit</button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// Register.layout = Auth;


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

//     return (
//         <>
//             <div className="container mx-auto px-4 h-full">
//                 <div className="flex content-center items-center justify-center h-full">
//                     <div className="w-full lg:w-6/12 px-4">
//                         <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
//                             {/* <div className="rounded-t mb-0 px-6 py-6">
//                                 <div className="text-center mb-3">
//                                     <h6 className="text-blueGray-500 text-sm font-bold">
//                                         Sign up with
//                                     </h6>
//                                 </div>
//                                 <div className="btn-wrapper text-center">
//                                     <button
//                                         className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
//                                         type="button"
//                                     >
//                                         <img alt="..." className="w-5 mr-1" src="/img/github.svg" />
//                                         Github
//                                     </button>
//                                     <button
//                                         className="bg-white active:bg-blueGray-50 text-blueGray-700 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
//                                         type="button"
//                                     >
//                                         <img alt="..." className="w-5 mr-1" src="/img/google.svg" />
//                                         Google
//                                     </button>
//                                 </div>
//                                 <hr className="mt-6 border-b-1 border-blueGray-300" />
//                             </div> */}

//                             {/* <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
//                                 <form onSubmit={handleSubmit(onSubmit)}>
//                                     {" "}
//                                     <div className="relative w-full mb-3">
//                                         <label
//                                             className="block uppercase text-blueGray-900 text-xs font-bold mb-2"
//                                             htmlFor="grid-password"
//                                         >
//                                             Full Name
//                                         </label>
//                                         <input
//                                             {...register("fullName")}
//                                             className="border-0 px-3 py-3 placeholder-blueGray-300
//                                             text-blueGray-900 bg-white rounded text-sm shadow
//                                             focus:outline-none focus:ring w-full ease-linear
//                                                 transition-all duration-150"
//                                             placeholder="p.s Altin Morina"
//                                         />
//                                         <small role="alert" className="text-red-500 ">
//                                             {errors.fullName?.message}
//                                         </small>
//                                     </div>
//                                     <div className="relative w-full mb-3">
//                                         <label
//                                             className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                                             htmlFor="grid-password"
//                                         >
//                                             Email
//                                         </label>
//                                         <input
//                                             {...register("email")}
//                                             type="email"
//                                             className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                                             placeholder="p.s example@gmail.com"
//                                         />
//                                         <small role="alert" className="text-red-500 ">
//                                             {errors.email?.message}
//                                         </small>
//                                     </div>
//                                     <div className="relative w-full mb-3">
//                                         <label
//                                             className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                                             htmlFor="grid-password"
//                                         >
//                                             Phone number
//                                         </label>
//                                         <input
//                                             {...register("phoneNumber")}
//                                             type="tel"
//                                             className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                                             placeholder="p.s 049-588-814"
//                                         />
//                                         <small role="alert" className="text-red-500 ">
//                                             {errors.phoneNumber?.message}
//                                         </small>
//                                     </div>
//                                     <div className="relative w-full mb-3">
//                                         <label
//                                             className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                                             htmlFor="grid-password"
//                                         >
//                                             Password
//                                         </label>
//                                         <input
//                                             {...register("password")}
//                                             type="password"
//                                             className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                                             placeholder="Password"
//                                         />
//                                         <small role="alert" className="text-red-500 ">
//                                             {errors.password?.message}
//                                         </small>
//                                     </div>
//                                     <div className="relative w-full mb-3">
//                                         <label
//                                             className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
//                                             htmlFor="grid-password"
//                                         >
//                                             Confirm Password
//                                         </label>
//                                         <input
//                                             {...register("confirmPassword")}
//                                             type="password"
//                                             className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
//                                             placeholder="Comfirm Password"
//                                         />
//                                         <small role="alert" className="text-red-500 ">
//                                             {errors.confirmPassword?.message}
//                                         </small>
//                                     </div>
//                                     <div>
//                                         <label className="inline-flex items-center cursor-pointer">
//                                             <input
//                                                 {...register("category")}
//                                                 id="customCheckLogin"
//                                                 type="checkbox"
//                                                 className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
//                                             />
//                                             <small role="alert" className="text-red-500 ">
//                                                 {errors.category?.message}
//                                             </small>
//                                             <span className="ml-2 text-sm font-semibold text-blueGray-600">
//                                                 I agree with the{" "}
//                                                 <a
//                                                     href="#pablo"
//                                                     className="text-lightBlue-500"
//                                                     onClick={(e) => e.preventDefault()}
//                                                 >
//                                                     Privacy Policy
//                                                 </a>
//                                             </span>
//                                         </label>
//                                     </div>
//                                     <div className="text-center mt-6">
//                                         <input
//                                             className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
//                                             type="submit"
//                                             value="Submit"
//                                         />
//                                     </div>
//                                 </form>
//                             </div> */}




//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// Register.layout = Auth;
