import React from "react";
import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { useState } from 'react';


export default Beneficiary;

function Beneficiary() {
    const validationSchema = Yup.object().shape({
        address: Yup.string()
            .required("Address is required")
            .min(5, "Address must be longer than 5 characters"),

        name: Yup.string()
            .required("Name is required")
            .min(5, "Name must be longer than 5 characters")
            .max(50, "Name must be shorter than 50 characters."),

        country: Yup.string()
            .required("Country is required")
            .min(4, "Country Name must be longer than 4 characters")
            .max(50, "Country Name must be shorter than 50 characters."),

        postCode: Yup.string().required("Post Code is required"),

        sender: Yup.string()
            .required("Email is required.")
            .email("Please enter a valid e-mail"),

        billTo: Yup.string()
            .required("Email is required.")
            .email("Please enter a valid e-mail"),

        dueDate: Yup.string().required("Date is required."),

        itemDescription: Yup.string().required("Add an Item"),

        price: Yup.string().required("Price is required"),

        qty: Yup.string()
            .required("Quantity is required")
            .min(1, "Add at least one quantity"),

        note: Yup.string()
            .required("Note is required")
            .min(10, "Note must be longer than 50 characters")
            .max(30, "note must be shorter than 30 characters."),
    });

    function onSubmit(data) {
        // display form data on success
        reset({
            address: "",
            name: "",
            country: "",
            postCode: "",
        });
        // alert("SUCCESS!! :-)\n\n");
        // return false;
    }

    const formOptions = { resolver: yupResolver(validationSchema) };

    const genders = [
        { id: 'male', name: 'Male' },
        { id: 'female', name: 'Female' },
    ];

    const relatedPeople = [
        { id: 'Father', name: 'Father' },
        { id: 'Mother', name: 'Mother' },
        { id: 'Brother', name: 'Brother' },
        { id: 'Sister', name: 'Sister' },
        { id: 'Uncle', name: 'Uncle' },
        { id: 'Aunt', name: 'Aunt' },
        { id: 'Cousine', name: 'Cousine' },
    ];

    const countries = [
        {
            id: 'us',
            name: 'United States',
            cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
            ],
        },
        {
            id: 'ca',
            name: 'Canada',
            cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Edmonton', 'Ottawa', 'Winnipeg', 'Quebec City', 'Hamilton', 'Kitchener',
            ],
        },
        {
            id: 'uk',
            name: 'United Kingdom',
            cities: ['London', 'Manchester', 'Edinburgh', 'Birmingham', 'Glasgow', 'Leeds', 'Liverpool', 'Newcastle', 'Sheffield', 'Bristol',
            ],
        },
        {
            id: 'de',
            name: 'Germany',
            cities: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne', 'Stuttgart', 'Düsseldorf', 'Dortmund', 'Essen', 'Leipzig',
            ],
        },
        {
            id: 'fr',
            name: 'France',
            cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille',
            ],
        },
        {
            id: 'jp',
            name: 'Japan',
            cities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Sapporo', 'Nagoya', 'Fukuoka', 'Kobe', 'Kawasaki', 'Saitama',
            ],
        },
        {
            id: 'au',
            name: 'Australia',
            cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle', 'Canberra', 'Sunshine Coast', 'Wollongong',
            ],
        },
        {
            id: 'it',
            name: 'Italy',
            cities: ['Rome', 'Milan', 'Venice', 'Florence', 'Naples', 'Turin', 'Bologna', 'Genoa', 'Verona', 'Palermo',
            ],
        },
        {
            id: 'es',
            name: 'Spain',
            cities: ['Madrid', 'Barcelona', 'Seville', 'Valencia', 'Málaga', 'Bilbao', 'Alicante', 'Córdoba', 'Granada', 'Murcia',
            ],
        },
        {
            id: 'kr',
            name: 'South Korea',
            cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon', 'Gwangju', 'Suwon', 'Ulsan', 'Seongnam', 'Cheonan',
            ],
        },
        {
            id: 'nl',
            name: 'Netherlands',
            cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht', 'Eindhoven', 'Tilburg', 'Groningen', 'Almere', 'Breda', 'Nijmegen',
            ],
        },
        {
            id: 'br',
            name: 'Brazil',
            cities: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza', 'Belo Horizonte', 'Manaus', 'Curitiba', 'Recife', 'Porto Alegre',
            ],
        },
        {
            id: 'mx',
            name: 'Mexico',
            cities: ['Mexico City', 'Guadalajara', 'Monterrey', 'Puebla', 'Tijuana', 'León', 'Juárez', 'Zapopan', 'Mérida', 'San Luis Potosí',
            ],
        },
        {
            id: 'ar',
            name: 'Argentina',
            cities: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza', 'Tucumán', 'La Plata', 'Mar del Plata', 'Salta', 'Santa Fe', 'San Juan',
            ],
        },
        {
            id: 'in',
            name: 'India',
            cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad', 'Pune', 'Surat', 'Jaipur',
            ],
        },
        {
            id: 'ch',
            name: 'Switzerland',
            cities: ['Zurich', 'Geneva', 'Bern', 'Basel', 'Lausanne', 'Lucerne', 'St. Gallen', 'Lugano', 'Biel', 'Thun',
            ],
        },
        {
            id: 'se',
            name: 'Sweden',
            cities: ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro', 'Linköping', 'Helsingborg', 'Jönköping', 'Norrköping',
            ],
        },
        {
            id: 'no',
            name: 'Norway',
            cities: ['Oslo', 'Bergen', 'Trondheim', 'Stavanger', 'Drammen', 'Fredrikstad', 'Kristiansand', 'Tromsø', 'Sandnes', 'Sarpsborg',
            ],
        },
        {
            id: 'dk',
            name: 'Denmark',
            cities: ['Copenhagen', 'Aarhus', 'Odense', 'Aalborg', 'Frederiksberg', 'Esbjerg', 'Gentofte', 'Gladsaxe', 'Randers', 'Kolding',
            ],
        },
        {
            id: 'pl',
            name: 'Poland',
            cities: ['Warsaw', 'Krakow', 'Wroclaw', 'Poznan', 'Gdansk', 'Szczecin', 'Bydgoszcz', 'Lublin', 'Katowice', 'Bialystok',
            ],
        },
        {
            id: 'tr',
            name: 'Turkey',
            cities: ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya', 'Adana', 'Gaziantep', 'Konya', 'Mersin', 'Diyarbakir',
            ],
        },
        {
            id: 'ko',
            name: 'Kosovo',
            cities: ['Prishtina', 'Prizren', 'Gjakova', 'Peja', 'Gjilan', 'Mitrovica', 'Ferizaj', 'Mitrovica', 'Rahovec', 'Podujeva'],
        },
        {
            id: 'al',
            name: 'Albania',
            cities: ['Tirana', 'Durres', 'Vlora', 'Elbasan', 'Shkoder', 'Korce', 'Fier', 'Berat', 'Lushnje', 'Pogradec'],
        },
    ];

    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setSelectedCountry(selectedCountry);
        setSelectedCity('');
    };

    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        setSelectedCity(selectedCity);
    };

    const getCitiesForCountry = () => {
        const country = countries.find((country) => country.id === selectedCountry);
        return country ? country.cities : [];
    };

    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;


    const [percentage, setPercentage] = useState('');

    const handleChange = (e) => {
        setPercentage(e.target.value);
    };

    return (
        <>
            <Navbar transparent />
            <main>
                <section className="pb-20 relative block bg-blueGray-800">
                    <div
                        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
                        style={{ transform: "translateZ(0)" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-blueGray-800 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative block py-24 lg:pt-0  bg-blueGray-800">
                    <div className="container mx-auto px-0">
                        <div className="flex flex-wrap justify-center lg:-mt-0 -mt-0">
                            <div className="w-full lg:w-6/12 px-0">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                                    <div className="flex-auto p-10 lg:p-10">
                                        <div className="rounded-t mb-o px-4 py-2">
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="mt-6 mb-12">
                                                    <h4 className="text-4xl font-semibold text-center">
                                                        Beneficiary
                                                    </h4>
                                                </div>
                                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                                    Insured Name
                                                </h6>
                                                <div className="flex justify-center items-center space-x-4 pt-2">
                                                    <label className="block uppercase text-blueGray-600  text-xs font-bold mb-2 w-full mr-5">
                                                        First Name
                                                        <input
                                                            className="shadow appearance-none border-0 rounded w-full py-2 px-3 placeholder-blueGray-300 focus:ring duration-150 ease-linear text-gray-700 mb-2 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                                            name="firstName"
                                                            type="text"
                                                            placeholder="Name"
                                                            {...register("name")}
                                                        />
                                                        <small
                                                            role="alert"
                                                            className=" font-medium text-red-500 normal-case"
                                                        >
                                                            {errors.name?.message}
                                                        </small>
                                                    </label>
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 w-full mr-5">
                                                        Last Name
                                                        <input
                                                            className="shadow appearance-none border-0 rounded w-full py-2 px-3 placeholder-blueGray-300 focus:ring duration-150 ease-linear text-gray-700 mb-2 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                                            name="country"
                                                            type="text"
                                                            placeholder="Surname"
                                                            {...register("country")}
                                                        />
                                                        <small
                                                            role="alert"
                                                            className=" font-medium text-red-500 normal-case"
                                                        >
                                                            {errors.country?.message}
                                                        </small>
                                                    </label>
                                                </div>
                                                <hr className="mt-6 border-b-1 border-blueGray-300" />
                                                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                                    Beneficiary Name
                                                </h6>
                                                <div className="flex justify-center items-center space-x-4 pt-2">
                                                    <label className="block uppercase text-blueGray-600  text-xs font-bold mb-2 w-full mr-5">
                                                        First Name
                                                        <input
                                                            className="shadow appearance-none border-0 rounded w-full py-2 px-3 placeholder-blueGray-300 focus:ring duration-150 ease-linear text-gray-700 mb-2 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                                            name="secondName"
                                                            type="text"
                                                            placeholder="Name"
                                                            {...register("secondName")}
                                                        />
                                                        <small
                                                            role="alert"
                                                            className=" font-medium text-red-500 normal-case"
                                                        >
                                                            {errors.name?.message}
                                                        </small>
                                                    </label>
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 w-full mr-5">
                                                        Middle Name
                                                        <input
                                                            className="shadow appearance-none border-0 rounded w-full py-2 px-3 placeholder-blueGray-300 focus:ring duration-150 ease-linear text-gray-700 mb-2 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                                            name="middleName"
                                                            type="text"
                                                            placeholder="Middle Name"
                                                            {...register("middleName")}
                                                        />
                                                        <small
                                                            role="alert"
                                                            className=" font-medium text-red-500 normal-case"
                                                        >
                                                            {errors.country?.message}
                                                        </small>
                                                    </label>
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2 w-full mr-5">
                                                        Last Name
                                                        <input
                                                            className="shadow appearance-none border-0 rounded w-full py-2 px-3 placeholder-blueGray-300 focus:ring duration-150 ease-linear text-gray-700 mb-2 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                                            name="country"
                                                            type="text"
                                                            placeholder="Surname"
                                                            {...register("bSurnames")}
                                                        />
                                                        <small
                                                            role="alert"
                                                            className=" font-medium text-red-500 normal-case"
                                                        >
                                                            {errors.country?.message}
                                                        </small>
                                                    </label>
                                                </div>
                                                <div className="pb-2 mt-3 text-sm font-bold">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="sender"
                                                    >
                                                        Email Address
                                                    </label>
                                                    <input
                                                        className="xshadow appearance-none border-0 rounded w-full py-2 px-3 placeholder-blueGray-300 focus:ring duration-150 ease-linear text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                        id="sender"
                                                        name="sender"
                                                        type="email"
                                                        placeholder="Who is this invoice from? (required)"
                                                        {...register("sender")}
                                                    />
                                                    <small
                                                        role="alert"
                                                        className="font-medium text-red-500 "
                                                    >
                                                        {errors.sender?.message}
                                                    </small>
                                                </div>

                                                <div className="mt-2 flex justify-center items-center space-x-4 pt-2">
                                                    <label htmlFor="gender" className="block uppercase text-blueGray-600 text-xs font-bold mb-2 w-full mr-5"
                                                    >
                                                        Gender:
                                                        <select id="gender" className="shadow appearance-none border-0 rounded w-full py-2 px-3 placeholder-blueGray-300 focus:ring duration-150 ease-linear text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline">
                                                            {genders.map((gender) => (
                                                                <option key={gender.id} value={gender.id}>
                                                                    {gender.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </label>
                                                    <label htmlFor="country" className="block uppercase text-blueGray-600 text-xs font-bold mb-2 w-full mr-5">
                                                        Country:
                                                        <select id="country" className="shadow appearance-none border-0 rounded w-full py-2 px-3 placeholder-blueGray-300 focus:ring duration-150 ease-linear text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline" onChange={handleCountryChange}>
                                                            <option value="">Select Country</option>
                                                            {countries.map((country) => (
                                                                <option key={country.id} value={country.id}>
                                                                    {country.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </label>
                                                    {selectedCountry && (
                                                        <label htmlFor="city" className="block uppercase text-blueGray-600 text-xs font-bold mb-2 w-full mr-5">
                                                            City:

                                                            <select
                                                                id="city"
                                                                className="shadow appearance-none border-0 rounded w-full py-2 px-3 placeholder-blueGray-300 focus:ring duration-150 ease-linear text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                                                value={selectedCity}
                                                                onChange={handleCityChange}
                                                            >
                                                                <option value="">Select City</option>
                                                                {getCitiesForCountry().map((city) => (
                                                                    <option key={city} value={city}>
                                                                        {city}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                        </label>
                                                    )}
                                                </div>

                                                <div className="mt-3 flex justify-center items-center space-x-4 pt-2">
                                                    <label htmlFor="relatedPerson" className="block uppercase text-blueGray-600  text-xs font-bold mb-2 w-full mr-5">
                                                        Related Person:
                                                        <select id="relatedPerson" className="shadow appearance-none border-0 rounded w-full py-2 px-3 placeholder-blueGray-300 focus:ring duration-150 ease-linear text-gray-700 mb-2 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                                        >
                                                            <option value="">Related Person</option>
                                                            {relatedPeople.map((person) => (
                                                                <option key={person.id} value={person.id}>
                                                                    {person.name}
                                                                </option>
                                                            ))}
                                                        </select>
                                                    </label>
                                                    <label className="block uppercase text-blueGray-600  text-xs font-bold mb-2 w-full mr-5">
                                                        Postal Code
                                                        <input
                                                            className="shadow appearance-none border-0 rounded w-full py-2 px-3 placeholder-blueGray-300 focus:ring duration-150 ease-linear text-gray-700 mb-2 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                                            name="postalCode"
                                                            type="number"
                                                            {...register("postalCode")}
                                                        />
                                                        <small
                                                            role="alert"
                                                            className=" font-medium text-red-500 normal-case"
                                                        >
                                                            {errors.name?.message}
                                                        </small>
                                                    </label>
                                                    <label className="block uppercase text-blueGray-600  text-xs font-bold mb-2 w-full mr-5">
                                                        Date of Birth
                                                        <input
                                                            className="shadow appearance-none border-0 rounded w-full py-2 px-3 placeholder-blueGray-300 focus:ring duration-150 ease-linear text-gray-700 mb-2 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                                                            id="dueDate"
                                                            name="dueDate"
                                                            type="date"
                                                            {...register("dueDate")}
                                                        />
                                                        <small
                                                            role="alert"
                                                            className=" font-medium text-red-500 "
                                                        >
                                                            {errors.dueDate?.message}
                                                        </small>
                                                    </label>
                                                </div>
                                                <div className="mt-2 text-sm font-bold">
                                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                        Street Address
                                                    </label>
                                                    <input
                                                        className=" mb-4 shadow appearance-none border-0 rounded w-full py-2 px-3 placeholder-blueGray-300 focus:ring duration-150 ease-linear text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                        id="address"
                                                        name="address"
                                                        type="text"
                                                        placeholder="Write your address? (required)"
                                                        {...register("address")}
                                                    />
                                                    <small
                                                        role="alert"
                                                        className=" font-medium text-red-500 "
                                                    >
                                                        {errors.address?.message}
                                                    </small>
                                                </div>

                                                <div>
                                                    <label htmlFor="percentage" className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                                                        Percentage:
                                                    </label>
                                                    <div className="flex">
                                                        <input
                                                            type="text"
                                                            id="percentage"
                                                            className=" mb-4 shadow appearance-none border-0 rounded w-3/12 py-2 px-3 placeholder-blueGray-300 focus:ring duration-150 ease-linear text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                                                            placeholder="Enter percentage"
                                                            value={percentage}
                                                            onChange={handleChange}
                                                        />
                                                        <span className="mb-4 flex items-center bg-gray-200 font-heavy text-2xl text-gray-800 px-3 rounded-r-md">%</span>
                                                    </div>
                                                </div>

                                                <div className="mt-6 flex items-center justify-around">
                                                    <button
                                                        className="btn btn-secondary bg-red-700 active:bg-blueGray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                        type="button"
                                                        onClick={() => reset()}
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        className="btn btn-primary mr-1 bg-blueGray-700 active:bg-blueGray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                        type="submit"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
