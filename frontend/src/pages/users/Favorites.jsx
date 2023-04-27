import React from 'react'
import UserBar from '../../components/UserBar'
import Footer from '../../components/footer'


const Favorites = () => {
  return (
    <div>
      <UserBar />
      <ul class="w-96">
        <li
          class="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
          An item
        </li>
        <hr />
      </ul>
      <Footer />
    </div>
  )
}

export default Favorites
