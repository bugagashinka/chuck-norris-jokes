import React from "react";

const ErrorMessage = (props) => {
  const { error } = props;
  if (!error) return null;

  const showError = () => {
    let { message, originError } = error;

    if (originError && originError.message) {
      message = originError.message;
    }
    return <section className="error-message">{message}</section>;
  };

  return showError();
};

export default ErrorMessage;
