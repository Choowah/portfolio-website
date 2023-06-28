import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'

// Layouts
import RootLayout from './layouts/RootLayout';

// Pages
import Home from "./components/Home";
import Projects from './components/Projects';
import About from './components/About';
import Contacts from './components/Contacts';
import ErrorPage from './error-page';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />}></Route>
            <Route path='projects' element={<Projects />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='contacts' element={<Contacts />}></Route>
            <Route path='*' element={<ErrorPage />}></Route>
        </Route>
    )
);

const App = () => {
    return (
        <RouterProvider router={router} />
    )
}


export default App;