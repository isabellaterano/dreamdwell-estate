import { useRouteError } from "react-router-dom";

function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1>Something went wrong </h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
}

export default NotFound;
