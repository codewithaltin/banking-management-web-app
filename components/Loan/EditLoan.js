import { Dialog, Transition } from "@headlessui/react";
import { React, useState, useEffect, Fragment } from "react";
import Swal from "sweetalert2";

const EditLoan = ({ loanId, setResponseLoan }) => {
  const LOAN_API_BASE_URL = "http://localhost:8080/api/v1/auth/loan";

  const [isOpen, setIsOpen] = useState(false);
  const [loan, setLoan] = useState({
    id: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    monthlyIncome: "",
  });

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(LOAN_API_BASE_URL + "/" + loanId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const _loan = await response.json();
        setLoan(_loan);
        setIsOpen(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (loanId) {
      fetchData();
    }
  }, [loanId]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setLoan({ ...loan, [event.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const updateLoan = async (e) => {
    e.preventDefault();
    const response = await fetch(LOAN_API_BASE_URL + "/" + loanId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loan),
    });
    if (!response.ok) {
      Swal.fire({
        icon: "error",
        title: "Failed to update!",
      });
    }
    const _loan = await response.json();
    setResponseLoan(_loan);
    reset(e);
    Swal.fire("Updated!", "Updated Succesfully!", "success");
  };

  return (
    <div className="min-h-screen absolute top-1/2 right-1/4">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div"  onClose={closeModal}>
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
              <div className="inline-block  p-5  max-w-md text-left absolute top-0 right-1/3 mt-36 transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Update Loan
                </Dialog.Title>
                <div className="flex max-w-md max-auto">
                  <div className="py-2">
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-normal">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={loan.fullName}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2"
                      ></input>
                    </div>
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-normal">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={loan.email}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2"
                      ></input>
                    </div>
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-normal">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={loan.phoneNumber}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2"
                      ></input>
                    </div>
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-normal">
                        Monthly Income
                      </label>
                      <input
                        type="text"
                        name="monthlyIncome"
                        value={loan.monthlyIncome}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2"
                      ></input>
                    </div>

                    <div className="h-14 my-4 space-x-4 pt-4">
                      <button
                        onClick={updateLoan}
                        className=" bg-emerald-400 hover:bg-emerald-600 rounded text-white font-semibold   py-2 px-6"
                      >
                        Update
                      </button>
                      <button
                        onClick={reset}
                        className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
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

export default EditLoan;
