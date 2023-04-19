import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchLanguage } from '../../redux/Slices/language';
import { addSyntaxe } from '../../redux/Slices/AddSyntaxe';
import { Toast } from 'primereact/toast';
import Sidebar from '../../components/admin/Sidebar';

const Syntaxe_insert = () => {
  const dispatch = useDispatch();
  const toast = useRef(null);
  const [syntaxeName, setSyntaxeName] = useState('');
  const [id_language, setLanguage] = useState();

  const showSuccess = (message) => {
    toast.current.show({ severity: 'success', summary: 'Success', detail: message, life: 3000 });
  }
  const showError = (message) => {
    toast.current.show({ severity: 'error', summary: 'Error', detail: message, life: 3000 });
  }
  // add syntaxe
  const form = new FormData();
  form.append('syntaxe', syntaxeName);
  form.append('id_language', id_language);

  const submitSyntaxe = async (e) => {
    e.preventDefault();
    if (!syntaxeName || !id_language) {
      showError();
      return
    }
    dispatch(addSyntaxe(form))
    console.log(isadding);

    if (isadding.isSuccess) {
      showSuccess('added success')
    } else if (isadding.isError) {
      showError('not added')
    }
  }
  // useEffect(() => {
    
  // }, [])
  const isadding = useSelector((state) => state.Syntaxeadding);

  const categories = useSelector((state) => state.language);
  useEffect(() => {
    dispatch(fetchLanguage());
  }, [])


  return (
    <>
      <Sidebar />
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
    </>
  )
}

export default Syntaxe_insert
