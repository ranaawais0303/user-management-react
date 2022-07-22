import React, { useContext } from "react";
import useInput from "../hooks/use-input";
import Modal from "../UI/Modal";
import UserContext from "../store/user-context";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const userContext = useContext(UserContext);
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

  /////////////////////form Handler////////////////////
  const formSubmissionHandler = (e) => {
    const users = { name: name, position: position, email: emailValue };
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    //Add user into context/////////////////
    userContext.addUser(users);

    nameReset();
    positionReset();
    emailReset();
    props.onClose();
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
              id="name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={name}
            />
            {nameHasError && <p className="error-text">Name is not Valid</p>}
          </div>
          <div className={lnameInputClasses}>
            <label htmlFor="position">Postion</label>
            <input
              type="text"
              id="position"
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
          <label htmlFor="email">E-Mail Address</label>
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
