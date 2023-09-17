import { Dialog, Transition } from "@headlessui/react";
import { React, useState, useEffect, Fragment } from "react";
import Swal from "sweetalert2";

// const phoneReg =
//   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
// const schema = yup
//   .object()
//   .shape({
//     firstName: yup
//       .string()
//       .required("First Name is required.")
//       .min(2, "First name must be longer than 1 character")
//       .max(50, "First name must be shorter than 30 characters."),
//     lastName: yup
//       .string()
//       .required("Last Name is required.")
//       .min(2, "Last name must be longer than 1 character")
//       .max(50, "Last name must be shorter than 50 characters."),
//     email: yup
//       .string()
//       .email("Please enter a valid e-mail")
//       .required("Email is required."),
//     phoneNumber: yup
//       .string()
//       .required("Phone number is required")
//       .matches(phoneReg, "Phone Number is not valid."),
//     departament: yup
//       .string()
//       .required("First Name is required.")
//       .min(2, "First name must be longer than 1 character")
//       .max(50, "First name must be shorter than 30 characters."),
//   })
//   .required();

const EditEmployee = ({ employeeId, setResponseEmployee }) => {
  const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/auth/employee";
  let [isOpen, setIsOpen] = useState(false);
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    departament: "",
    jobTitle: "",
    salary: 0,
  });
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm({ resolver: yupResolver(schema) });

  const departamentOptions = ["IT", "Sales", "Operations", "Marketing"];
  const jobTitleOptions = [
    "Banking Operations Manager",
    "Banking Customer Service Representative",
    "Banking Sales Representative",
    "Banking Marketing Manager",
    "Banking IT Manager",
  ];
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(EMPLOYEE_API_BASE_URL + "/" + employeeId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const _employee = await response.json();
        setEmployee(_employee);
        console.log(employee);
        openModal();
      } catch (error) {
        console.log(error);
      }
    };
    if (employeeId) {
      fetchData();
    }
  }, [employeeId]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setEmployee({ ...employee, [event.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    closeModal();
  };

  const updateEmployee = async (e) => {
    const response = await fetch(EMPLOYEE_API_BASE_URL + "/" + employeeId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });
    if (!response.ok) {
      Swal.fire({
        icon: "error",
        title: "Failed to update!",
      });
    }
    const _employee = await response.json();
    setResponseEmployee(_employee);
    console.log(employee);
    Swal.fire("Updated!", "Updated Succesfully!", "success");
    reset(e);
  };

  return (
    <div className="min-h-screen absolute top-1/2 right-1/4">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" m onClose={closeModal}>
          <div className="flex justify-center ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="p-8 m-8 absolute top-0  transition-all transform bg-white shadow-xl rounded-lg">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Update employee
                </Dialog.Title>
                <div className="flex max-w-md max-auto">
                  <div className="py-2">
                    <div className="h-14 mt-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={employee.firstName}
                        onChange={(e) => handleChange(e)}
                        className="h-10  border mt-2 px-2 py-2 w-full"
                      ></input>
                    </div>
                    {/* <small role="alert" className="text-red-500">
                      {errors.firstName?.message}
                    </small> */}
                    <div className="h-14 mt-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={employee.lastName}
                        onChange={(e) => handleChange(e)}
                        className="h-10 border mt-2 px-2 py-2 w-full"
                      ></input>
                    </div>
                    {/* <small role="alert" className="  text-red-500">
                      {errors.lastName?.message}
                    </small> */}
                    <div className="h-14 mt-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={employee.email}
                        onChange={(e) => handleChange(e)}
                        className="h-10 border mt-2 px-2 py-2 w-full"
                      ></input>
                    </div>
                    {/* <small role="alert" className="  text-red-500 ">
                      {errors.email?.message}
                    </small> */}
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={employee.phoneNumber}
                        onChange={(e) => handleChange(e)}
                        className="h-10  outline-none mt-2 p-2 w-full"
                      ></input>
                    </div>
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        Departament
                      </label>
                      <select
                        type="text"
                        name="departament"
                        value={employee.departament}
                        className="h-10  border mt-2 px-2 py-2 w-full"
                        onChange={(e) => handleChange(e)}
                      >
                        {departamentOptions.map((option, index) => {
                          return <option key={index}>{option}</option>;
                        })}
                      </select>
                    </div>
                    <div className="h-14 my-2">
                      <label className="block text-gray-600 text-sm font-semibold">
                        Job Title
                      </label>
                      <select
                        type="text"
                        name="jobTitle"
                        value={employee.jobTitle}
                        className="h-10  border mt-2 px-2 py-2 w-full"
                        onChange={(e) => handleChange(e)}
                      >
                        {jobTitleOptions.map((option, index) => {
                          return <option key={index}>{option}</option>;
                        })}
                      </select>
                    </div>
                    <div className="h-14 my-4 space-x-4 flex justify-center">
                      <button
                        onClick={updateEmployee}
                        className=" bg-emerald-400 hover:bg-emerald-600 rounded text-white font-semibold w-full py-2  px-6"
                      >
                        Update
                      </button>
                      <button
                        onClick={reset}
                        className="rounded text-white font-semibold bg-red-400 w-full hover:bg-red-700 py-2 px-6"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default EditEmployee;
