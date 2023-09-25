import { Dialog, Transition } from "@headlessui/react";
import { React, useState, useEffect, Fragment } from "react";
import Swal from "sweetalert2";

const EditSavingGoal = ({ savingGoalId, setResponseSavingGoal }) => {
  const SAVINGGOAL_API_BASE_URL =
    "http://localhost:8080/api/v1/auth/savingGoal";

  const [isOpen, setIsOpen] = useState(false);
  const [savingGoal, setSavingGoal] = useState({
    id: "",
    savingReason: "",
    amount: "",
    goalName: "",
    date: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          SAVINGGOAL_API_BASE_URL + "/" + savingGoalId,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const _user = await response.json();
        setSavingGoal(_user);
        setIsOpen(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (savingGoalId) {
      fetchData();
    }
  }, [savingGoalId]);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setSavingGoal({ ...savingGoal, [event.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const updateSavingGoal = async (e) => {
    e.preventDefault();
    const response = await fetch(SAVINGGOAL_API_BASE_URL + "/" + savingGoalId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(savingGoal),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _savingGoal = await response.json();
    setResponseSavingGoal(_savingGoal);
    reset(e);
    Swal.fire("Updated!", "Updated Succesfully!", "success");
  };

  return (
    <div className="min-h-screen absolute top-1/2 right-1/4">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal}>
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
                  Update Saving Goal
                </Dialog.Title>
                <div className="flex max-w-md max-auto">
                  <div className="py-2">
                    <div className="h-14 mt-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        Saving Reason
                      </label>
                      <input
                        type="text"
                        name="savingReason"
                        value={savingGoal.savingReason}
                        onChange={(e) => handleChange(e)}
                        className="h-10  border mt-2 px-2 py-2 w-full"
                      ></input>
                    </div>
                    {/* <small role="alert" className="text-red-500">
                      {errors.savingReason?.message}
                    </small> */}
                    <div className="h-14 mt-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        Amount
                      </label>
                      <input
                        type="text"
                        name="amount"
                        value={savingGoal.amount}
                        onChange={(e) => handleChange(e)}
                        className="h-10 border mt-2 px-2 py-2 w-full"
                      ></input>
                    </div>
                    {/* <small role="alert" className="  text-red-500">
                      {errors.amount?.message}
                    </small> */}
                    <div className="h-14 mt-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        Date
                      </label>
                      <input
                        type="text"
                        name="date"
                        value={savingGoal.date}
                        onChange={(e) => handleChange(e)}
                        className="h-10 border mt-2 px-2 py-2 w-full"
                      ></input>
                    </div>
                    {/* <small role="alert" className="  text-red-500 ">
                      {errors.date?.message}
                    </small> */}
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        Goal Name
                      </label>
                      <input
                        type="text"
                        name="goalName"
                        value={savingGoal.goalName}
                        onChange={(e) => handleChange(e)}
                        className="h-10  outline-none mt-2 p-2 w-full"
                      ></input>
                    </div>

                    <div className="h-14 my-4 space-x-4 flex justify-center">
                      <button
                        onClick={updateSavingGoal}
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

export default EditSavingGoal;