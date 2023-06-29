import { NavLink, Outlet } from "react-router-dom"; 
import { useState } from 'react';
import { AiOutlineClose, AiOutlineDownload, AiOutlineMenu } from 'react-icons/ai'
import Typed from 'react-typed'

function RootLayout(){
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    const closeNav = () => {
        setNav(false)
    }

    const resume = 'https://drive.google.com/file/d/14-L5guQH6jNtHRyjEwGadHa6mJUpqBPj/view?usp=sharing'

    return (
        <div>
            <div className="sticky top-0 bg-[#C5D9E2] flex justify-between max-w-[1240px] mx-auto p-4 items-center h24 text-[#817F75]">
                <NavLink to='/'><Typed className="text-[#817F75] md:text-4xl sm:text-3xl font-bold md:pl-4 pl-2" strings={['chuah', 'yeeyong', 'webdev']} typeSpeed={120} backSpeed={140} loop/></NavLink>
                <ul className="hidden md:flex">
                    <NavLink to='/' className="p-4">Home</NavLink>
                    <NavLink to='projects' className="p-4">Projects</NavLink>
                    <NavLink to='about' className="p-4">About</NavLink>
                    <NavLink to='contacts' className="p-4">Contacts</NavLink>
                    <NavLink to={resume} className="p-4" target="_blank">Resume ⇩</NavLink>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[40%] border-r border-r-gray-900 h-full bg-[rgba(0,0,0,0.8)] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
                    <h1 className="w-full text-3xl font-bold text-[#a5ffd6] m-4">menu.</h1>
                    <ul className='md:hidden p-4 uppercase'>
                        <li onClick={closeNav} className="p-4 border-b border-gray-600">
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li onClick={closeNav} className="p-4 border-b border-gray-600">
                            <NavLink to='projects'>Projects</NavLink>
                        </li>
                        <li onClick={closeNav} className="p-4 border-b border-gray-600">
                            <NavLink to='about'>About</NavLink>
                        </li>
                        <li onClick={closeNav} className="p-4 border-b border-gray-600">
                            <NavLink to='contacts'>Contact Me</NavLink>
                        </li>
                        <li onClick={closeNav} className="p-4">
                            <NavLink to={resume} target="_blank">Resume ⇩</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout;