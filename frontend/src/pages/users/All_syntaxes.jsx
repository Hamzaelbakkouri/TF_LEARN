import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { fetchLanguage } from "../../redux/Slices/language";
import { fetchSyntaxe_byid } from "../../redux/Slices/getSyntaxes";
import { MDBDataTable } from 'mdbreact';
import UserBar from "../../components/UserBar";
import { NavLink } from "react-router-dom";
import { Button } from 'primereact/button';

export default function Syntaxes() {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filtre, setFiltre] = useState(localStorage.getItem('syntaxes_is'));


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



    const datas = {
        columns: [
            {
                label: 'Syntaxe',
                field: 'syntaxe',
                sort: 'desc',
                width: 150,
            },
            {
                label: 'Example',
                field: 'button',
                sort: 'desc',
                width: 150,
            },
        ],
        rows: data2[0].map((item, index) => ({
            syntaxe: item.syntaxe,
            button: (
                <NavLink className="relative inline-flex items-center px-10 py-1 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50" to='/example_page' onClick={() => localStorage.setItem('example_id', item.id)}>
                    <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                    <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="relative">Button Text</span>

                </NavLink>
            ),
        })),
    };

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
    console.log(data);
    if (!data) {
        return (
            <div>
                Not Found
            </div>
        )
    }
    return (
        <div className="w-full flex flex-col">
            <UserBar />
            <div className="w-64">
                <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={language} optionLabel="name" placeholder="Select a Language"
                    filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" />
            </div>
            <div className="sm:overflow-x-auto p-10 shadow w-[90%] md:ml-24">
                <MDBDataTable
                    striped
                    small
                    data={datas}

                />
            </div>
        </div>
    );
}