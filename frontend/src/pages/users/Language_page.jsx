import React, { useEffect, useState } from 'react'
import UserBar from '../../components/UserBar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchComments } from '../../redux/Slices/getComments';
import { addcomment } from '../../redux/Slices/sendComment';
import Cookies from 'universal-cookie';
import Footer from '../../components/footer';

const Language_page = () => {
  const dispatch = useDispatch();
  // const [imag, setImage] = useState('');
  const [message, setMessage] = useState();
  const Cookie = new Cookies();
  useEffect(() => {
    dispatch(fetchComments());
  }, [])

  const comment = useSelector((state) => state.comments);
  console.log(comment.data);



  const sendComment = (e) => {
    e.preventDefault();
    const language = localStorage.getItem('id_language');
    const dt = Cookie.get('login');
    const userID = dt.user.id;
    console.log(dt);
    const form = new FormData();
    form.append('idlanguage', language);
    form.append('iduser', userID);
    form.append('Comment', message);
    try {
      dispatch(addcomment(form));
    } catch {
      console.log('Error');
    } finally {
      dispatch(fetchComments());
    }
  }
  if (comment.isLoading) {
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
    <div className='w-full '>
      <UserBar />
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center"
        style={{
          backgroundImage: "url(" + 'image' + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '500px'
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className="flex h-full items-center justify-center">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">language name</h2>
              <h4 className="mb-6 text-xl font-semibold">lorem ipsum</h4>
              <button
                type="button"
                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light">
                Call to action
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full bg-white rounded-md border p-1 md:p-3 ">
          <h3 className="font-semibold p-1">Discussion</h3>
          <div className="flex flex-col gap-5 m-3">
            <div className='overflow-y-scroll max-h-[500px] min-h-fit '>
              {comment.data.map((item) => {
                return (
                  <div >
                    <div className="text-gray-300 font-bold pl-14">|</div>
                    <div className="flex justify-between border ml-5  rounded-md">
                      <div className="p-3">
                        <div className="flex gap-3 items-center">
                          <img src="https://avatars.githubusercontent.com/u/22263436?v=4"
                            className="object-cover w-10 h-10 rounded-full border-2 border-emerald-400  shadow-emerald-400" />
                          <h3 className="font-bold">
                            {item.userName}
                            <br />
                            <span className="text-sm text-gray-400 font-normal">{item.created_at}</span>
                          </h3>
                        </div>
                        <p className="text-gray-600 mt-2">
                          {item.comment}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
          <div className="w-full px-3 mb-2 mt-6">
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white"
              name="body" placeholder="Comment" required></textarea>
          </div>

          <div className="w-full flex justify-end px-3 my-3">
            <button type="submit" onClick={sendComment} className="px-2.5 py-1.5 rounded-md text-white sm:text-sm bg-indigo-500 text-lg" value='Post Comment' >Add Comment</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Language_page
