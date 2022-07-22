import React, { useEffect } from "react";
import useInput from "../hooks/use-input";
import Modal from "../UI/Modal";

const EditUser = (props) => {
  ///////////////for update input //////////////////
  useEffect(() => {
    const event = { target: { value: props.user.name } };
    nameChangeHandler(event);
    event.target.value = props.user.position;
    positionChangeHandler(event);
    event.target.value = props.user.email;
    emailChangeHandler(event);
  }, []);

  //////////////////////Conditions/////////////////
  const isEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  //for name
  const {
    value: name,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(isEmpty);

  //for position
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

  //form Handler
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    nameReset();
    positionReset();
    emailReset();
  };

  ///Edit user Handler where set user value according to input change value
  const editHandler = () => {
    const user = { name: name, position: position, email: emailValue };
    props.onEditUser(user);
  };

  //set style according to conditions
  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";
  const positionInputClasses = positionHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={formSubmissionHandler}>
        <div className="control-group">
          <div className={nameInputClasses}>
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
          <div className={positionInputClasses}>
            <label htmlFor="name">Postion</label>
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
          <button disabled={!formIsValid} onClick={editHandler}>
            Edit User
          </button>
          <button onClick={props.onClose}>Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditUser;
