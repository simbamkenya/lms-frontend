import React from 'react'
import 'boxicons'

function Dash() {
  return (
    <div class="min-h-screen flex flex-row bg-gray-100">
        <div class="flex flex-col w-56 bg-gray-400  overflow-hidden">
            <div class="flex items-center justify-center h-20 shadow-md">
            <h1 class="text-3xl uppercase text-indigo-500">LMS</h1>
            </div>
            <ul class="flex flex-col py-4">
            <li>
                <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><box-icon type="solid" name="home"></box-icon></span>
                <span class="text-sm font-medium">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><box-icon type="solid" name="music"></box-icon></span>
                <span class="text-sm font-medium">Music</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><box-icon type="solid" name="hot"></box-icon></span>
                <span class="text-sm font-medium">Drink</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><box-icon type="solid" name="shopping-bag"></box-icon></span>
                <span class="text-sm font-medium">Shopping</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><box-icon type="solid" name="chat"></box-icon></span>
                <span class="text-sm font-medium">Chat</span>
                </a>
            </li>
            <li>
                <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><box-icon type="solid" name="user"></box-icon></span>
                <span class="text-sm font-medium">Profile</span>
                </a>
            </li>
           
            </ul>
        </div>
    </div>
  )
}

export default Dash