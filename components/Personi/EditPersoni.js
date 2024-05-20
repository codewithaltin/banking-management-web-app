import { Dialog, Transition } from "@headlessui/react";
import { React, useState, useEffect, Fragment } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import * as yup from "yup";

const EditPersoni = ({ personiId, setResponsePersoni }) => {
  const PERSONI_API_BASE_URL = "http://localhost:8080/api/v1/auth/personi/";
  const BANKA_API_BASE_URL = "http://localhost:8080/api/v1/auth/banka";
  const [banks, setBanks] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [personi, setPersoni] = useState({
    id: "",
    firstName: "",
    lastName: "",
    banka: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(PERSONI_API_BASE_URL + personiId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const _personi = await response.json();
        setPersoni(_personi);
        setIsOpen(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (personiId) {
      fetchData();
    }
  }, [personiId]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BANKA_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const banks = await response.json();

        setBanks(banks);
      } catch (error) {
        console.log(error);
      }
      console.log(banks);
    };

    fetchData();
  }, []);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const reset = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "banka") {
      const selectedBank = banks.find(
        (bank) => bank.id === parseInt(value, 10)
      );

      setPersoni({ ...personi, [name]: selectedBank });
    } else {
      setPersoni({ ...personi, [name]: value });
    }
  };

  const updatePersoni = async (e) => {
    e.preventDefault();

    // Ensure personi.banka is a valid object
    const selectedBanka = personi.banka;

    if (!selectedBanka) {
      // Handle the case where banka is not selected
      console.error("Please select a Director");
      return;
    }

    const url = `http://localhost:8080/api/v1/auth/personi/${personiId}`;

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...personi, banka: selectedBanka }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const _personi = await response.json();
      setResponsePersoni(_personi);
      reset(e);
      Swal.fire("Updated!", "Updated Successfully!", "success");
    } catch (error) {
      console.log(error);
    }
  };

  // ...

  return (
    <div className="min-h-screen absolute top-1/2 right-1/4">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" m onClose={closeModal}>
          <div className="flex justify-center self-center">
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
                  Update Movie
                </Dialog.Title>
                <form
                  onSubmit={updatePersoni}
                  className="flex max-w-md max-auto"
                >
                  <div className="py-2">
                    <div className="h-14 mt-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={personi.title}
                        onChange={(e) => handleChange(e)}
                        className="h-10  border mt-2 p-4 w-full rounded-md"
                        required
                      ></input>
                    </div>
                    <div className="h-14 mt-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        Release Year
                      </label>
                      <input
                        type="number"
                        name="releaseYear"
                        value={personi.releaseYear}
                        onChange={(e) => handleChange(e)}
                        className="h-10  border mt-2 p-4 w-full rounded-md"
                        required
                      ></input>
                    </div>
                    <div className="h-14 mt-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                      Director
                      </label>
                      <select
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={personi.banka.id}
                        onChange={(e) => handleChange(e)}
                        name="banka"
                      >
                        <option value={personi.banka.id}>
                          {personi.banka.name}
                        </option>
                        {banks &&
                          banks
                            .filter((bank) => bank.id !== personi.banka.id)
                            .map((bank) => (
                              <option key={bank.id} value={bank.id}>
                                {bank.name}
                              </option>
                            ))}
                      </select>
                    </div>

                    <div className="h-14 my-4 space-x-4 flex justify-center">
                      <button
                        type="submit"
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
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
export default EditPersoni;
