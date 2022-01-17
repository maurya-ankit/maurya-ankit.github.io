import React from "react"
import { Link } from "gatsby"
const navElements = [
    {
        text: 'Articles',
        link: '/articles',
    },
    {
        text: 'Snippets',
        link: '/snippets',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Contact',
        link: '/contact',
    },
]
export default function Header({ active }) {

    return (
        <nav class="flex items-center justify-between flex-wrap p-6  z-10 top-0">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <Link class="text-white no-underline hover:text-white hover:no-underline" to="/">
                    <span class="text-2xl pl-2"><i class="em em-grinning"></i> Ankit Maurya</span>
                </Link>
            </div>

            <div class="block lg:hidden">
                <button id="nav-toggle" class="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div
                // apply classes to take up the space in the navbar
                className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
            >

            </div>
            <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
                <ul class="list-reset lg:flex justify-end flex-1 items-center">
                    {navElements.map((element) => {
                        if (element.link === active)
                            return <li class="mr-3">
                                <Link class="inline-block py-2 px-4 text-cyan-50 no-underline" to={element.link}>{element.text}</Link>
                            </li>
                        else
                            return <li class="mr-3">
                                <Link class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" to={element.link}>{element.text}</Link>
                            </li>
                    })}
                </ul>
            </div>
        </nav>

    )
}