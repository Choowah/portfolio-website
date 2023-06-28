import { useState } from "react";
import { NavLink } from "react-router-dom";

import Hover from "../assets/hover-image.png"

const Home = () => {
    const [showFloatingDiv, setShowFloatingDiv] = useState(false);

    const handleMouseEnter = () => {
        setShowFloatingDiv(true);
      };
    
    const handleMouseLeave = () => {
        setShowFloatingDiv(false);
    };

    return (
        <div>
            <div className="items-center justify-center max-w-[1240px] text-center mx-auto">
                <h1 className='md:text-8xl text-6xl font-bold pt-20 p-10'>HEY THERE, IT'S YEE YONG HERE.</h1>
                <p className="md:text-4xl text-2xl font-bold p-10">Welcome to my website, I {" "}
                    <span
                    className="relative underline"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                        code
                        <span className="md:top-[40px] md:left-[15px] absolute top-[25px] left-0 text-sm text-[#817F75]">Hover &#8593;</span>
                        {showFloatingDiv && 
                        (<div className="absolute top-[50px] left-0 bg-[rgba(0,0,0,0.8)] rounded-xl text-sm text-[#A5FFD6] p-4">
                            <ul className="text-left">
                                <li className="underline font-bold text-[#817F75]">using</li>
                                <li>MongoDB</li>
                                <li>ExpressJS</li>
                                <li>React</li>
                                <li>NodeJS</li>
                                <li>ReactRouter</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>TailwindCSS</li>
                            </ul>
                        </div>)}
                    </span> sometimes.</p>
                <div className="grid md:flex justify-center pt-10">
                    <NavLink to="projects">
                    <button className="underline min-w-[150px] p-2 rounded-md mx-3 hover:scale-110 hover:bg-[#CDFFF9] transition-all duration-300">see my projects</button>
                    </NavLink>
                    <NavLink to="about">
                    <button className="underline min-w-[150px] p-2 rounded-md mx-3 hover:scale-110 hover:bg-[#CDFFF9] transition-all duration-300">about me</button>
                    </NavLink>
                    <NavLink to="contacts">
                    <button className="underline min-w-[150px] p-2 rounded-md mx-3 hover:scale-110 hover:bg-[#CDFFF9] transition-all duration-300">contact me</button>
                    </NavLink>
                </div>
                
            </div>
        </div>
    );
}
 
export default Home;