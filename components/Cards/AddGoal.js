import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import { Fragment, useState } from "react";
import SavingTable from "../SavingGoal/SavingTable";

const AddGoal = () => {
  const SAVINGGOAL_API_BASE_URL = "http://localhost:8080/api/v1/savingGoal";

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [savingGoal, setSavingGoals] = useState({
    id: "",
    savingReason: "",
    amount: "",
    date: "",
    goalName: "",
    goalDescription: "",
  });
  const [responseSavingGoal, setResponseSavingGoal] = useState({
    id: "",
    savingReason: "",
    amount: "",
    date: "",
    goalName: "",
    goalDescription: "",
  });

  function closeModal() {
    setDialogOpen(false);
  }

  function openModal() {
    setDialogOpen(true);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setSavingGoals({ ...savingGoal, [event.target.name]: value });
  };

  const saveSavingGoals = async (e) => {
    //e.preventDefault();
    const response = await fetch(SAVINGGOAL_API_BASE_URL, {
      method: "POST",
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
    window.location.reload();
  };

  const reset = (e) => {
    e.preventDefault();
    setSavingGoals({
      id: "",
      savingReason: "",
      amount: "",
      date: "",
      goalName: "",
      goalDescription: "",
    });
    closeModal();
  };

  return (
    <>
      <div className="container mx-auto my-8">
        <div className="h-12">
          <button
            onClick={openModal}
            className="rounded bg-slate-600 text-white px-6 py-2 font-semibold"
          >
            Add Goal
          </button>
        </div>
      </div>
      <Transition appear show={isDialogOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add new Goal
                </Dialog.Title>
                <div className="flex max-w-md max-auto">
                  <div className="py-2">
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-normal">
                        What are you saving for!
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={savingGoal.savingReason}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2"
                      ></input>
                    </div>
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-normal">
                        Amount
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={savingGoal.amount}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2"
                      ></input>
                    </div>
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-normal">
                        Date
                      </label>
                      <input
                        type="text"
                        name="emailId"
                        value={savingGoal.date}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2"
                      ></input>
                    </div>
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-normal">
                        Goal Name
                      </label>
                      <input
                        type="text"
                        name="emailId"
                        value={savingGoal.goalName}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2"
                      ></input>
                    </div>
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-normal">
                        Description
                      </label>
                      <input
                        type="text"
                        name="emailId"
                        value={savingGoal.goalDescription}
                        onChange={(e) => handleChange(e)}
                        className="h-10 w-96 border mt-2 px-2 py-2"
                      ></input>
                    </div>
                    <div className="h-14 my-4 space-x-4 pt-4">
                      <button
                        onClick={saveSavingGoals}
                        className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
                      >
                        Save
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
      <SavingTable savingGoal={responseSavingGoal} />
    </>
  );
};

export default AddGoal;
