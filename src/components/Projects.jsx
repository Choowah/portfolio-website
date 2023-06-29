import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div className='max-w-[1240px] text-left p-10 mx-auto'>
            <div className="p-10">
                <h1 className='text-[#817F75] font-bold text-3xl md:text-5xl py-3'>PROJECTS</h1>
                <div className="text-[#817F75] border-t border-[#B3B5BB] py-3">
                    <div className="">
                        <h1 className="font-bold text-xl py-5"><Link to='/'>↗ Calorie Counter</Link></h1>
                        <Link to='/' className="underline">Source Code</Link>
                        <h3 className="font-bold">Technologies Used</h3>
                        <ul className="flex flex-wrap md:grid grid-cols-4 pb-8">
                            <li className="w-full">MongoDB</li>
                            <li className="w-full">ExpressJS</li>
                            <li className="w-full">React</li>
                            <li className="w-full">NodeJS</li>
                        </ul>
                    </div>
                    <div className='border-t border-[#B3B5BB]'>
                        <h1 className="font-bold text-xl py-5"><Link to='/'>↗ Stoic Quotes</Link></h1>
                        <Link to='/' className="underline">Source Code</Link>
                        <h3 className="font-bold">Technologies Used</h3>
                        <ul className="flex flex-wrap md:grid grid-cols-4">
                            <li className="w-full">MongoDB</li>
                            <li className="w-full">ExpressJS</li>
                            <li className="w-full">React</li>
                            <li className="w-full">NodeJS</li>
                            <li className="w-full"></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;