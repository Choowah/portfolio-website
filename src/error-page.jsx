import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='max-w-[1240px] text-left p-10 mx-auto'>
    <div className="p-10">
        <h1 className='text-[#817F75] font-bold text-5xl py-5'>Oops!</h1>
        <p className="py-5">Sorry, an unexpected error has occured.</p>
        <p className="underline py-5"><Link to='/'>Click here to return to Homepage.</Link></p>
    </div>
</div>
  );
}