import { Dialog, Transition } from "@headlessui/react";
import { React, useState, useEffect, Fragment } from "react";

const EditDonation = ({ donationId, setResponseDonation }) => {
  const DONATION_API_BASE_URL = "http://localhost:8080/api/v1/auth/donation";

  const [isOpen, setIsOpen] = useState(false);
  const [donation, setDonation] = useState({
    id: "",
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    donationAmount: "",
    cardInformation: "",
    comment: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(DONATION_API_BASE_URL + "/" + donationId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const _donation= await response.json();
        setDonation(_donation);
        setIsOpen(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (donationId) {
      fetchData();
    }
  }, [donationId]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setDonation({ ...donation, [event.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const updateDonation = async (e) => {
    e.preventDefault();
    const response = await fetch(DONATION_API_BASE_URL + "/" + donationId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donation),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _donation = await response.json();
    setResponseDonation(_donation);
    reset(e);
  };

  return (
    <div className="min-h-screen absolute top-1/2 right-1/4">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" m onClose={closeModal}>
          <div className="px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block  p-5  max-w-md text-left absolute top-0 right-1/3 mt-36 transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Update Donation
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
                        value={donation.fullName}
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
                        value={donation.email}
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
                        value={donation.phoneNumber}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2"
                      ></input>
                    </div>
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-normal">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={donation.address}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2"
                      ></input>
                    </div>
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-normal">
                        Donation Amount
                      </label>
                      <input
                        type="text"
                        name="donationAmount"
                        value={donation.donationAmount}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2"
                      ></input>
                    </div>
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-normal">
                        Card Information
                      </label>
                      <input
                        type="text"
                        name="cardInformation"
                        value={donation.cardInformation}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2"
                      ></input>
                    </div>
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-normal">
                        Comment
                      </label>
                      <input
                        type="text"
                        name="comment"
                        value={donation.comment}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2"
                      ></input>
                    </div>


                    <div className="h-14 my-4 space-x-4 pt-4">
                      <button
                        onClick={updateDonation}
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

export default EditDonation;