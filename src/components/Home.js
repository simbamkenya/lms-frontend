import React from 'react';
import Footer from './Footer';
import Header from './Header';


function Home() {
  return (
    <>
    <Header />
    <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Safari Library Management System
                <br classnAME="hidden lg:inline-block"/>Keep your library organized!
            </h1>
            <p className="mb-8 leading-relaxed">We are keen on keeping library materials organized digitally. The system keeps an inventory of all materials in a library and keeps record on borrowing from different users</p>
            <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Create an account</button>
            </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://cdn.stocksnap.io/img-thumbs/960w/light-bulb_AREPT79VY0.jpg"/>
            </div>
        </div>
    </section>
    <Footer />
    </>
  )
}

export default Home