import {FC, memo} from "react";

type ErrorsContainerProps = {
  errors: string[],
};

type ErrorProps = {
  text: string
};

const Error: FC<ErrorProps> = memo(({ text }) => {

  return (
    <span className="error border rounded-sm text-sm border-red-100 flex mb-0.5 text-red-500 px-2 py-0.5">
      {text}
    </span>
  );
});

const ErrorsContainer: FC<ErrorsContainerProps> = memo(({ errors }) => {

  return (
    <>
      {
        errors.length > 0 &&
        <div className="errors-container mb-5">
          {
            errors.map(error => (
              <Error text={error} key={crypto.randomUUID()} />
            ))
          }
        </div>
      }
    </>
  );
});

export default ErrorsContainer;