import React, { useEffect } from 'react'
import UserBar from '../../components/UserBar';
import Footer from '../../components/footer';

const Home = () => {

    return (
        <div>
            <UserBar />
            <div className="flex justify-center  text-800">
                <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center flex-wrap gap-5">
                    <section>
                        <span className="block text-6xl font-bold mb-1">LEARN FAST</span>
                        <div className="text-6xl text-primary font-bold mb-3">Step-by-Step Guides for Beginners</div>
                        <p className="mt-0 mb-4 text-700 line-height-3">Learn programming languages inside and out with our detailed documentation</p>
                    </section>
                    <div className="">
                        <img src="https://www.zucisystems.com/wp-content/uploads/2022/05/4412009.jpg" alt="hero-1" className="w-80" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
