import React, { useEffect, useState } from 'react'
import UserBar from '../../components/UserBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExample } from '../../redux/Slices/getexample';


const Syntaxe_example = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();


  useEffect(() => {
    const id = 1;
    dispatch(fetchExample(id));
  }, [])

  const examples = useSelector((state) => state.examples);
  useEffect(() => {
    setData(examples.data)
  }, [examples])

  if (examples.isLoading) {
    return (
      <div>
        <UserBar />
        <div role="status" className='w-full h-screen  flex justify-center items-center'>
          <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
  return (
    <div>
      <UserBar />
      <div>
        {data.map((item) => {
          return (
            <div className='w-[80%]' key={item.created_at}>
              {item.role == 1 ? <h1 className=" sm:px-16 xl:px-48 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black border-b-2 ml-5">{item.example}</h1> : ''}
              {item.role == 2 ? <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{item.example}</p> : ''}
              {item.role == 3 ?
                <div className='w-full flex justify-start md:ml-36'>
                  <div className="md:w-[40%] sm:w-20 bg-black  pt-2 pb-11 pr-2 rounded-xl">
                    <div className="items-center flex ml-3.5">
                      <div className="text-teal-400 text-xs leading-loose mr-3">
                        editor
                      </div>
                      <div className="flex justify-end">
                        <div className="bg-teal-900 border-slate-500 border h-10 -mr-2 sm:w-96" />
                      </div>
                    </div>
                    <div className="items-center flex">
                      <div className="bg-teal-400 h-px w-16"/>
                    </div>
                    <pre className="text-neutral-400 text-xs tracking-widest leading-loose ml-6 mt-9">
                      {item.example}
                    </pre>
                  </div>
                </div> : ''}

            </div>

          )
        })}
      </div>
    </div>
  )
}

export default Syntaxe_example