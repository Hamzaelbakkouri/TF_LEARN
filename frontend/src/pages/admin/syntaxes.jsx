import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Sidebar from "../../components/admin/Sidebar";
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { fetchLanguage } from "../../redux/Slices/language";
import { fetchSyntaxe_byid } from "../../redux/Slices/getSyntaxes";
import { MDBDataTable } from 'mdbreact';
import { NavLink } from "react-router-dom";
import axios from "axios";


export default function Syntaxes() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filtre, setFiltre] = useState(1);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLanguage());
    }, [])
    const language = useSelector((state) => state.language.data)

    useEffect(() => {
        dispatch(fetchSyntaxe_byid(filtre));
    }, [filtre])

    const data = useSelector((state) => state.syntaxe.data);
    const data2 = [];
    data2.push(data);
    if (data.isLoading) {
        return (
            <div role="status" className='w-full h-screen  flex justify-center items-center'>
                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                <span className="sr-only">Loading...</span>
            </div>
        )
    }

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.nom} src={option.image} className={`mr-2 flag`} style={{ width: '18px' }} />
                    <div>{option.nom}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div onClick={() => setFiltre(option.id)} className="flex align-items-center">
                <img alt={option.nom} src={option.image} className={`mr-2 flag`} style={{ width: '18px' }} />
                <div>{option.nom}</div>
            </div>
        );
    };

    const Delete = async (e) => {
        e.preventDefault();
        await axios.delete('')
            .then(() => {
                dispatch(fetchSyntaxe_byid(selectedCountry))
            })
    }


    const datas = {
        columns: [
            {
                label: 'Syntaxe',
                field: 'syntaxe',
                sort: 'asc',
                width: 150
            },
            {
                label: 'IsArchived',
                field: 'isArchived',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Created_at',
                field: 'created_at',
                sort: 'asc',
                width: 150
            },
            {
                label: 'languageID',
                field: 'id_language',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Example Insert',
                field: 'button',
                sort: 'desc',
                width: 150,
            },
            {
                label: 'Action',
                field: 'delete',
                sort: 'desc',
                width: 150,
            },
        ],
        rows: data2[0].map((item, index) => ({
            syntaxe: item.syntaxe,
            IsArchived: item.isArchived,
            Created_at: item.created_at,
            Id_language: item.id_language,
            button: (
                <NavLink className="relative inline-flex items-center justify-center p-4 px-3 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group" to='/admin/addExample' onClick={() => localStorage.setItem('add_example', item.id)}>
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Button Text</span>
                    <span className="relative invisible">Add Example</span>
                </NavLink>
            ),
            delete: (
                <NavLink onClick={() => Delete(item.id)} className="relative inline-flex items-center justify-start px-4 py-2 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">Delete</span>
                </NavLink>
            ),
        })),
    }

    if (!data) {
        return (
            <div>
                not found
            </div>
        )
    }
    return (
        <div>
            <Sidebar />
            <div className="w-64 md:w-8/12 md:ml-80 flex flex-col pb-4">
                <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={language} optionLabel="name" placeholder="Select a Language"
                    filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" />
            </div>
            <div className="md:w-8/12 md:ml-80 flex flex-col shadow border-collapse px-4 overflow-x-auto">
                <MDBDataTable
                    striped
                    bordered
                    small
                    data={datas}
                />
            </div>
        </div>
    );
}