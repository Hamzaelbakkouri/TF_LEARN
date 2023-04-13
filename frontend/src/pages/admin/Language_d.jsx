import { useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchLanguage } from '../../redux/Slices/language';
import { useNavigate } from 'react-router-dom';
import { addlanguage } from '../../redux/Slices/Addlanguages';
import { editlanguage } from '../../redux/Slices/editLanguage';
import Cookies from 'universal-cookie';
import axios from 'axios';


const apiKey = '654492469283666'
const API_BASE_URL = 'https://api.cloudinary.com/v1_1/dy9tuum8j/auto/upload';


const Language_d = () => {

  const cookie = new Cookies();
  const cooki = cookie.get('login');
  const navigate = useNavigate();

  if (!cooki || !cooki.user || cooki.user.role !== 0) {
    navigate('/');
  }
  //Add language
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const changeImage = (e) => {
    setImage(e.target.files[0])
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data: cloudinary } = await axios.get('http://127.0.0.1:8000/api/cloudinary/signature')
      const form = new FormData();
      form.append('api_key', apiKey)
      form.append('signature', cloudinary.signature)
      form.append('timestamp', cloudinary.timestamp)
      form.append('folder', 'uploads')
      form.append('file', image)

      const { data: uploadResult } = await axios.post(API_BASE_URL, form)
      const lastData = new FormData();
      lastData.append('nom', name)
      lastData.append('image', uploadResult.secure_url);
      dispatch(addlanguage(lastData))

    } catch {
      console.log('thala');
    }
  }
  //end add language 

  //delete
  const delete_language = async (id) => {
    await axios.delete('http://127.0.0.1:8000/api/language/deletelanguage/' + id)
      .then(() => {
        dispatsh(fetchLanguage());
      })
  }
  //end delete

  //edit
  const [editName, setEditName] = useState();
  const [imageEdit, setEditIamge] = useState();
  const EditImage = (e) => {
    setEditIamge(e.target.files[0])
  }
  const handleEdit = async (event) => {
    event.preventDefault();
    const id = localStorage.getItem('idL')

    try {
      const { data: cloudinary } = await axios.get('http://127.0.0.1:8000/api/cloudinary/signature')
      const form = new FormData();
      form.append('api_key', apiKey)
      form.append('signature', cloudinary.signature)
      form.append('timestamp', cloudinary.timestamp)
      form.append('folder', 'uploads')
      form.append('file', imageEdit)

      const { data: uploadResult } = await axios.post(API_BASE_URL, form)
      const edit = new FormData();
      edit.append('nom', editName)
      edit.append('image', uploadResult.secure_url);
      dispatch(editlanguage(edit, id))
      dispatch(fetchLanguage())
      // closeAdd()
    } catch {
      console.log('sf rah t3awdat');
    }
  }
  //end edit language

  let [isOpen, setIsOpen] = useState(false);
  let [add, setAdd] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }

  function openAdd() {
    setAdd(true);
  }
  function closeAdd() {
    setAdd(false);
  }

  const dispatsh = useDispatch();
  const data = useSelector((state) => state.language);

  useEffect(() => {
    dispatsh(fetchLanguage());
  }, []);

  if (data.isLoading) {
    return (
      <div role="status" className='w-full h-screen  flex justify-center items-center'>
        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
  if (data.Error) {
    return (
      <div>
        {data.Error}
      </div>
    )
  }


  return (
    <div className="w-full mt-20 md:pr-10 flex flex-wrap md:justify-end items-center">
      <div className="px-2 sm:px-6 lg:px-4 w-[80%]">
        <h2>Languages</h2>
        <hr />

        <button onClick={openAdd} className=" hover:bg-cyan-600  text-gray-800 hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Add Language
        </button>
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 sm:flex-wrap">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        Name
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Logo
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {data.data.map((Language) => (
                      <tr key={Language.image}>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                          {Language.nom}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <img className='w-14' src={Language.image} alt="..." />
                        </td>
                        <td>
                          <button onClick={() => {
                            openModal();
                            localStorage.setItem('idL', Language.id);
                          }} className='text-blue-600'>Edit</button>
                          <button onClick={() => delete_language(Language.id)} className='pl-5 text-red-600'>Delete</button>
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
      {/* update */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-6"
                  >
                    Edit Your Language
                  </Dialog.Title>
                  <div className="mt-2">
                    <form className="w-full max-w-sm">
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Language
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input onChange={(e) => setEditName(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Language Name' />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Image
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input
                            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                            type="file"
                            id="formFile"
                            onChange={EditImage}
                          />

                        </div>
                        {/* <img className='h-10' src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png" alt="..." /> */}
                      </div>
                    </form>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleEdit}
                    >
                      Edit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* add language */}

      <Transition appear show={add} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeAdd}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-6"
                  >
                    Add Language
                  </Dialog.Title>
                  <div className="mt-2">
                    <form className="w-full max-w-sm">
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Language Name
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input onChange={(e) => setName(e.target.value)} name='name' className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder='Language Name' />
                        </div>
                      </div>
                      <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                          <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Language Image
                          </label>
                        </div>
                        <div className="md:w-2/3">
                          <input
                            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                            type="file"
                            name="image"
                            onChange={changeImage}
                            id="formFile" />
                        </div>
                      </div>
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={handleSubmit}>
                          ADD
                        </button>
                      </div>
                    </form>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Language_d
