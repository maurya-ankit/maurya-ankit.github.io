import React from "react"
import { Link } from "gatsby"
const navElements = [
    {
        text: 'Home',
        link: '/',
    },
    {
        text: 'Articles',
        link: '/articles',
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
        <nav className="flex items-center justify-between flex-wrap p-6  z-10 top-0">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_iiiii_5_97)">
                        <path d="M20.5689 54.8985L27.8501 50.9C30.4332 49.4815 33.5668 49.4815 36.1499 50.9L43.4311 54.8985C50.467 58.7622 58.4146 51.7891 55.3072 44.4131C52.794 38.4472 50.1819 32.4704 48.1071 28.2356C45.1507 22.2014 41.5532 16.2691 38.5086 11.5933C35.389 6.80224 28.611 6.80225 25.4914 11.5933C22.4468 16.2691 18.8493 22.2014 15.8929 28.2356C13.8181 32.4704 11.206 38.4472 8.69277 44.4131C5.58544 51.7891 13.533 58.7622 20.5689 54.8985Z" fill="url(#paint0_linear_5_97)" />
                    </g>
                    <defs>
                        <filter id="filter0_iiiii_5_97" x="4" y="4" width="54" height="54" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="2" dy="2" />
                            <feGaussianBlur stdDeviation="3" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.980833 0 0 0 0 0.808333 0 0 0 0.4 0" />
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_5_97" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="-4" dy="-4" />
                            <feGaussianBlur stdDeviation="3" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.583333 0 0 0 0 0.21 0 0 0 0 0 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="effect1_innerShadow_5_97" result="effect2_innerShadow_5_97" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="1" dy="1" />
                            <feGaussianBlur stdDeviation="1" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.979583 0 0 0 0 0.795833 0 0 0 0.4 0" />
                            <feBlend mode="normal" in2="effect2_innerShadow_5_97" result="effect3_innerShadow_5_97" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="-2" dy="-2" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.304167 0 0 0 0 0.073 0 0 0 0 0 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="effect3_innerShadow_5_97" result="effect4_innerShadow_5_97" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="-1" dy="-1" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.984314 0 0 0 0 0.521569 0 0 0 0 0.105882 0 0 0 0.2 0" />
                            <feBlend mode="normal" in2="effect4_innerShadow_5_97" result="effect5_innerShadow_5_97" />
                        </filter>
                        <linearGradient id="paint0_linear_5_97" x1="32" y1="8" x2="32" y2="56" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FCBC18" />
                            <stop offset="1" stop-color="#FF6F1E" />
                        </linearGradient>
                    </defs>
                </svg>

                <Link className="text-white no-underline hover:text-white hover:no-underline" to="/">

                    <span className="text-2xl pl-2"><i className="em em-grinning"></i> Ankit Maurya</span>
                </Link>
            </div>

            <div className="block lg:hidden">
                <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div
                // apply classes to take up the space in the navbar
                className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
            >

            </div>
            <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                    {navElements.map((element) => {
                        if (element.link === active)
                            return <li className="mr-3" key={element.link}>
                                <Link className="inline-block py-2 px-4 text-cyan-50 no-underline" to={element.link}>{element.text}</Link>
                            </li>
                        else
                            return <li className="mr-3" key={element.link}>
                                <Link className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" to={element.link}>{element.text}</Link>
                            </li>
                    })}
                </ul>
            </div>
        </nav>

    )
}