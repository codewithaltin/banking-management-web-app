import { Dialog, Transition } from "@headlessui/react";
import { React, useState, useEffect, Fragment } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import * as yup from "yup";

const EditBanka = ({ bankaId, setResponseBanka }) => {
  const BANKA_API_BASE_URL = "http://localhost:8080/api/v1/auth/banka/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isOpen, setIsOpen] = useState(false);
  const [banka, setBanka] = useState({
    name: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BANKA_API_BASE_URL + bankaId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const _banka = await response.json();
        setBanka(_banka);
        setIsOpen(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (bankaId) {
      fetchData();
    }
  }, [bankaId]);

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
    const value = event.target.value;
    setBanka({ ...banka, [event.target.name]: value });
  };
  const updateBanka = async (e) => {
    e.preventDefault();

    console.log(banka.city);
    const response = await fetch(BANKA_API_BASE_URL + bankaId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(banka),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _banka = await response.json();
    setResponseBanka(_banka);
    reset(e);
    Swal.fire("Updated!", "Updated Succesfully!", "success");
  };

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
                  Update Bank
                </Dialog.Title>
                <div className="flex max-w-md max-auto">
                  <div className="py-2">
                    <div className="h-14 mt-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={banka.name}
                        onChange={(e) => handleChange(e)}
                        className="h-10  border mt-2 p-4 w-full rounded-md"
                        required
                      ></input>
                    </div>

                    <div className="h-14 mt-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        BirthYear
                      </label>
                      <input
                        type="number"
                        name="birthYear"
                        value={banka.birthYear}
                        onChange={(e) => handleChange(e)}
                        className="h-10  border mt-2 p-4 w-full rounded-md"
                        required
                      ></input>
                    </div>

                    <div className="h-14 my-4 space-x-4 flex justify-center">
                      <button
                        onClick={updateBanka}
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
export default EditBanka;
