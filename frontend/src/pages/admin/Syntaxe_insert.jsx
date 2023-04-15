import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchLanguage } from '../../redux/Slices/language';
import { addSyntaxe } from '../../redux/Slices/AddSyntaxe';
import { Toast } from 'primereact/toast';

const Syntaxe_insert = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const [syntaxeName, setSyntaxeName] = useState('');
  const [id_language, setLanguage] = useState();
  const [code, setCode] = useState('// write your code here ....');

  const showSuccess = () => {
    toast.current.show({severity:'success', summary: 'Success', detail:'Message Content', life: 3000});
  }
  
  if (code) {
    showSuccess();
  }

  const form = new FormData();
  form.append('syntaxe', syntaxeName);
  form.append('id_language', id_language);

  const submitSyntaxe = (e) => {
    e.preventDefault();
    dispatch(addSyntaxe(form))
  }

  const categories = useSelector((state) => state.language);
  useEffect(() => {
    dispatch(fetchLanguage());
  }, [])
  return (
    <>
      <Toast ref={toast} />
      <h1 className='w-full flex justify-center ml-9 mb-4'> ADD SYNTAXE</h1>
      <div className='w-full flex justify-center items-center '>

        <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                Syntaxe
              </label>
            </div>
            <div className="md:w-2/3">
              <input name='syntaxe' onChange={(e) => setSyntaxeName(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Syntaxe' />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                Language
              </label>
            </div>
            <div className="md:w-2/3">
              <select onChange={(e) => setLanguage(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="id_language" id="">
                {categories.data.map((langue) => {
                  return (
                    <option value={langue.id} key={langue.id}>
                      {langue.nom}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button onClick={submitSyntaxe} className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                ADD Syntaxe
              </button>
            </div>
          </div>
        </form>
      </div>

      <hr className='w-full mt-5 -mb-10' />
      <div className='w-full h-screen flex justify-center items-center '>
        <form className="w-full max-w-sm">
          <h1 className='w-full flex justify-center ml-9 mb-4'>ADD EXAMPLE TITLE</h1>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                TEXT
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea placeholder='Title . . . ' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="text example" id="" cols="30" rows="4"></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                ADD TEXT
              </button>
            </div>
          </div>
        </form>
      </div>

      <hr className='w-full mt-5 -mb-20' />
      <div className='w-full h-screen flex justify-center items-center '>
        <form className="w-full max-w-sm">
          <h1 className='w-full flex justify-center ml-9 mb-4'>ADD EXAMPLE TEXT</h1>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                TEXT
              </label>
            </div>
            <div className="md:w-2/3">
              <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="text example" id="" cols="30" rows="4"></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
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
            <textarea placeholder='Code . . . .' onChange={(e) => setCode(e.target.value)} className="ml-20 bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" name="text example" id="" cols="4" rows="4"></textarea>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                CODE
              </label>
            </div>
            <div className="bg-black  pt-2 pb-11 pr-2 rounded-xl">
              <div className="items-center flex ml-3.5">
                <div className="text-teal-400 text-xs leading-loose mr-3">
                  editor
                </div>
                <div className="flex justify-end">
                  <div className="bg-teal-900 border-slate-500 border h-10 -mr-2 w-[523px]" />
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
              <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                ADD TEXT
              </button>
            </div>
          </div>
        </form>
      </div>

    </>
  )
}

export default Syntaxe_insert
