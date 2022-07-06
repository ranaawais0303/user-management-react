import React from "react";
import useInput from "../hooks/use-input";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const isEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");
  //for first name
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(isEmpty);

  //for last name
  const {
    value: position,
    isValid: positionIsValid,
    hasError: positionHasError,
    valueChangeHandler: positionChangeHandler,
    valueBlurHandler: postionBlurHandler,
    reset: positionReset,
  } = useInput(isEmpty);

  //for email
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(isEmail);

  let formIsValid = false;
  if (nameIsValid && positionIsValid && emailIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    props.onAddUser(name, position, emailValue);
    nameReset();
    positionReset();
    emailReset();
  };
  //set style according to conditions
  const fnameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";
  const lnameInputClasses = positionHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={formSubmissionHandler}>
        <div className="control-group">
          <div className={fnameInputClasses}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="fname"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={name}
            />
            {nameHasError && <p className="error-text">Name is not Valid</p>}
          </div>
          <div className={lnameInputClasses}>
            <label htmlFor="name">Postion</label>
            <input
              type="text"
              id="lname"
              onChange={positionChangeHandler}
              onBlur={postionBlurHandler}
              value={position}
            />
            {positionHasError && (
              <p className="error-text">Position is not Valid</p>
            )}
          </div>
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          />
          {emailHasError && <p className="error-text">Email is not Valid</p>}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Add User</button>
          <button onClick={props.onClose}>Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

export default AddUser;
