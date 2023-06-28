import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div className='max-w-[1240px] text-left p-10 mx-auto'>
            <div className="p-10">
                <h1 className='text-[#817F75] font-bold text-5xl py-3'>PROJECTS</h1>
                <div className="border-t border-[#B3B5BB] py-3">
                    <div className="text-[#817F75] w-full">
                        <h1 className="font-bold text-3xl">Calorie Counter</h1>
                        <h3>Technologies Used</h3>
                        <ul className="grid grid-cols-4">
                            <li>MongoDB</li>
                            <li>ExpressJS</li>
                            <li>React</li>
                            <li>NodeJS</li>
                            <li></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="text-[#817F75] font-bold text-3xl">Stoic Quotes</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;