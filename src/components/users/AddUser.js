import React from "react";
import useInput from "../hooks/use-input";
import Modal from "../UI/Modal";

const AddUser = (props) => {
  const isEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");
  //for first name
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    valueBlurHandler: fNameBlurHandler,
    reset: fNameReset,
  } = useInput(isEmpty);

  //for last name
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    valueBlurHandler: lNameBlurHandler,
    reset: lNameReset,
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
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    fNameReset();
    lNameReset();
    emailReset();
  };
  //set style according to conditions
  const fnameInputClasses = fNameHasError
    ? "form-control invalid"
    : "form-control";
  const lnameInputClasses = lNameHasError
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
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              id="fname"
              onChange={fNameChangeHandler}
              onBlur={fNameBlurHandler}
              value={firstNameValue}
            />
            {fNameHasError && (
              <p className="error-text">First Name is not Valid</p>
            )}
          </div>
          <div className={lnameInputClasses}>
            <label htmlFor="name">Last Name</label>
            <input
              type="text"
              id="lname"
              onChange={lNameChangeHandler}
              onBlur={lNameBlurHandler}
              value={lastNameValue}
            />
            {lNameHasError && (
              <p className="error-text">Last Name is not Valid</p>
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
