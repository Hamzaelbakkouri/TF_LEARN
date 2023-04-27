import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../../components/admin/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { addExample } from '../../redux/Slices/addexample';
import { Toast } from 'primereact/toast';

const Example_insert = () => {

    const toast = useRef(null);
    const dispatch = useDispatch();
    const [code, setCode] = useState('// write your code here ....');
    const [role, setRole] = useState(null);
    const [example, setExample] = useState('');
    const [syntaxeID, setSyntaxeID] = useState();

    const showSuccess = (message) => {
        toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
    }
    const showError = (message) => {
        toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
    }

    const InsertExample = (e) => {
        e.preventDefault();
        setSyntaxeID(localStorage.getItem('add_example'));
        const formdata = new FormData();
        formdata.append('example', example);
        formdata.append('id_syntaxe', syntaxeID);
        formdata.append('role', role);
        dispatch(addExample(formdata))
    }
    const isAdded = useSelector((state) => state.example_add.isSuccess)
    if (isAdded) {
        isAdded ? showSuccess('added success') : showError('not added');
    }

    return (
        <div>
            <Sidebar />
            <Toast ref={toast} />
            <div className='w-full mt-5 flex justify-center items-center '>
                <form className="w-full max-w-sm">
                    <h1 className='w-full flex justify-center ml-9 mb-4'>ADD EXAMPLE TITLE</h1>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                TEXT
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <textarea onChange={(e) => setExample(e.target.value)} placeholder='Title Example' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="text example" id="" cols="30" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button onClick={(e) => {
                                setRole(1);
                                InsertExample(e);
                            }} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                ADD TITLE
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <hr className='w-full mt-5' />
            <div className='w-full mt-5 flex justify-center items-center '>
                <form className="w-full max-w-sm">
                    <h1 className='w-full flex justify-center ml-9 mb-4'>ADD EXAMPLE TEXT</h1>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                TEXT
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <textarea onChange={(e) => setExample(e.target.value)} placeholder='Text Example' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="text example" id="" cols="30" rows="4"></textarea>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button onClick={(e) => {
                                setRole(2);
                                InsertExample(e);
                            }} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                ADD TEXT
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <hr className='w-full mt-5 -mb-20' />

            <div className='w-full h-screen flex justify-center items-center '>
                <form className="w-full max-w-sm">
                    <h1 className='w-full flex justify-center ml-9 mb-4'>ADD EXAMPLE CODE</h1>
                    <div className="md:w-3/3">
                        <h4 className=' ml-20'>WRITE YOUR CODE HERE :</h4>
                        <textarea placeholder='Code Example' onChange={(e) => {
                            setCode(e.target.value);
                            setExample(e.target.value);
                        }} className="ml-14 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="text example" id="" cols="4" rows="4"></textarea>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                CODE FORM
                            </label>
                        </div>
                        <div className="bg-black  pt-2 pb-11 pr-2 rounded-xl">
                            <div className="items-center flex ml-3.5">
                                <div className="text-teal-400 text-xs leading-loose mr-3">
                                    editor
                                </div>
                                <div className="flex justify-end">
                                    <div className="bg-teal-900 border-slate-500 border h-10 sm:w-80 -mr-2 w-[523px]" />
                                </div>
                            </div>
                            <div className="items-center flex">
                                <div className="bg-teal-400 h-px w-16" />
                            </div>
                            <pre className="text-neutral-400 text-xs tracking-widest leading-loose ml-6 mt-9">
                                {code}
                            </pre>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button onClick={(e) => {
                                setRole(3);
                                InsertExample(e);
                            }} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                ADD CODE
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Example_insert
