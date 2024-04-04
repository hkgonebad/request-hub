import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  // you don't need to explicitly set error to `unknown`
  const error = useRouteError();
  let errorMessage;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <section
      id="error-page"
      className="d-flex flex-col gap-8 justify-center items-center h-screen"
    >
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-slate-400">
        <i>{errorMessage}</i>
      </p>
    </section>
  );
};

export default ErrorPage;
