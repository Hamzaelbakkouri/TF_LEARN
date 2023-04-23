import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Sidebar from "../../components/admin/Sidebar";
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { fetchLanguage } from "../../redux/Slices/language";
import { fetchSyntaxe_byid } from "../../redux/Slices/getSyntaxes";


export default function Syntaxes() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filtre, setFiltre] = useState(null);


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchLanguage());
    }, [])
    const language = useSelector((state) => state.language.data)

    const filtre_syntaxe = (e) => {
        e.preventDefault();
        dispatch(fetchSyntaxe_byid(filtre));
    }
    const data = useSelector((state) => state.syntaxe);

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
            <div onClick={(e) => {
                setFiltre(option.id)
                filtre_syntaxe(e);
            }} className="flex align-items-center">
                <img alt={option.nom} src={option.image} className={`mr-2 flag`} style={{ width: '18px' }} />
                <div>{option.nom}</div>
            </div>
        );
    };

    return (
        <div>
            <Sidebar />
            <div className="card flex justify-content-center w-64">
                <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={language} optionLabel="name" placeholder="Select a Country"
                    filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" />
            </div>
            <div className="w-[100%] mt-20 md:pr-10 flex flex-wrap md:justify-end items-center ">
                <div className="px-2 sm:px-6 lg:px-4 w-[80%]">
                    <h2>Syntaxes</h2>
                    <hr />
                    <div className="mt-8 flex flex-col">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-300 sm:flex-wrap">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                    Syntaxe
                                                </th>
                                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                    isArchived
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    id_language
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {data.data.map((syntaxe) => (
                                                <tr key={syntaxe.id}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                        {syntaxe.syntaxe}
                                                    </td>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                        {syntaxe.isArchived === 0 ? 'Not Archived' : 'Archived'}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {syntaxe.id_language}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
