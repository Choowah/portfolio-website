import { useState } from "react";
import { NavLink } from "react-router-dom";
import FloatStack from "./FloatStack";

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
                        <span className="md:top-[40px] md:left-[15px] absolute top-[25px] left-0 text-sm text-[#817F75]">hover &#8593;</span>
                        {showFloatingDiv && <FloatStack />}
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