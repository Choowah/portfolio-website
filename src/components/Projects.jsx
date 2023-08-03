import { Link } from "react-router-dom";
import bmwVideo from "/src/assets/bmw-3-series-summary-video.mp4";
import portfolioPreview from "/src/assets/portfolio-homepage.png";

const Projects = () => {
    return (
        <div className='max-w-[1240px] text-left p-10 mx-auto'>
            <div className="p-10">
                <h1 className='text-[#817F75] font-bold text-3xl md:text-5xl py-3'>PROJECTS</h1>
                <div className="text-[#817F75] border-t border-[#B3B5BB] py-3">
                    <div className="md:grid md:h-[500px] group">
                        <div>
                            <h1 className="font-bold text-xl py-5 hover:underline hover:translate-x-5 transition-all duration-300"><Link to='https://bmw-tribute.vercel.app/' target="_blank">↗ BMW 3 Series Tribute</Link></h1>
                            <Link to='https://github.com/Choowah/bmw-tribute' target="_blank" className="underline">Source Code</Link>
                            <h3 className="font-bold">Technologies Used</h3>
                            <ul className="flex flex-wrap gap-2 md:gap-8 pb-8">
                                <li>React</li>
                                <li>GSAP</li>
                                <li>TailwindCSS</li>
                                <li>JSX</li>
                            </ul>
                            <p className="md:w-[40%] bg-[rgba(214,234,244,0.9)] rounded-lg p-6">I've created this desktop website as a passion-driven project designed to pay homage to the iconic BMW 3 Series. This project was undertaken with the primary goal of mastering web animation techniques, particularly focusing on creating an impressive initial loading page using the GSAP (GreenSock Animation Platform) library.</p>
                        </div>
                        <video className="justify-self-end rounded-xl absolute z-[-1] h-0 md:h-[400px] grayscale group-hover:grayscale-0 transition-all duration-500" autoPlay loop muted src={bmwVideo}></video>
                    </div>
                    <div className="md:grid md:h-[500px] mt-5 group">
                       <div>
                            <h1 className="font-bold text-xl py-5 hover:underline hover:translate-x-5 transition-all duration-300"><Link to='/' target="_blank">↗ Portfolio</Link></h1>
                            <Link to='https://github.com/Choowah/portfolio-website' target="_blank" className="underline">Source Code</Link>
                            <h3 className="font-bold">Technologies Used</h3>
                            <ul className="flex flex-wrap gap-2 md:gap-8 pb-8">
                                <li>React</li>
                                <li>React Router</li>
                                <li>TailwindCSS</li>
                                <li>JSX</li>
                            </ul>
                            <p className="md:w-[40%] bg-[rgba(214,234,244,0.9)] rounded-lg p-6">One of the objectives of this portfolio is to become skilled in configuring and utilizing React Router, ensuring smooth navigation between different sections of the portfolio. Through this endeavor, my intention was to enhance my comprehension of React Router while presenting my work through an engaging and fast-loading portfolio.</p>
                        </div>
                        <img className="justify-self-end rounded-xl invisible md:visible md:h-[400px] absolute z-[-1] grayscale group-hover:grayscale-0 transition-all duration-500" src={portfolioPreview} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;