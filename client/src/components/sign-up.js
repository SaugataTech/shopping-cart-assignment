import { useState } from 'react';

const SignUp = () => {
  const [fields, setFields ] = useState({});
  const [ errorMessage, setErrorMessage ] = useState(null);
  const [ successMessage, setSuccessMessage ] = useState(null);

  const onSubmit = (e)=> {
    e.preventDefault();
    console.log("submit")
    if(isValidated()){
      setSuccessMessage("Form Submitted SuccessFully!!")
    }
  }
  console.log("successMessage", successMessage)

  const handleChange = (e,field)=> {
    e.preventDefault();
    let newFields = {...fields, [field] : e.target.value };
    setFields(newFields);
    setErrorMessage(null);
    setSuccessMessage(null);
  }

  const isValidated = () => {
    let isValid = true;

    if (typeof fields["fname"] !== "undefined" || typeof fields["lname"] !== "undefined") {
      if (!fields["fname"].match(/^[a-zA-Z]+$/) || !fields["lname"].match(/^[a-zA-Z]+$/)) {
        setErrorMessage("Only letters are allowed for First Name and Last Name");
        isValid = false;
      }
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") == -1 &&
          fields["email"].indexOf(" ") == -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        setErrorMessage("Please enter valid Email");
        isValid = false;
      }
    }

    if (typeof fields["pwd"] !== "undefined") {
      if(fields["pwd"].length < 6 || !fields["pwd"].match(/^[a-zA-Z0-9]+$/))
      {
        setErrorMessage("Please enter valid password");
        isValid = false;
      }
    }

    if (typeof fields["cpwd"] !== "undefined") {
      if(fields["cpwd"] != fields["pwd"]) {
        setErrorMessage("Password and Confirm Password should be same");
        isValid = false;
      }
    }

    return isValid;
  }

  return (
    <div className="container signup" style={{padding: '30px'}}>
      {
        errorMessage &&
        <div class="alert alert-danger">
          <strong>Error!</strong> {errorMessage}
        </div>
      }
     {
        successMessage &&
        <div class="alert alert-success">
          <strong>Success!</strong> {successMessage}
        </div>
      }

      <div className="row">
        <div className="col-sm-2 col-md-2 col-lg-2>">
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <h2> Signup</h2>
          <p>We do not share your personal details with anyone.</p>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <form onSubmit={(e)=> onSubmit(e)}>
            <div className="form-field-grp">
              <label for="fname">First Name</label>
              <input type="text" id="fname" className="form-field" value={fields.fname} onChange={(e)=> handleChange(e, 'fname')} required/>
            </div>
            <div className="form-field-grp">
              <label for="lname">Last Name</label>
              <input type="text" id="lname" className="form-field" value={fields.lname} onChange={(e)=> handleChange(e, 'lname')} required />
            </div>
            <div className="form-field-grp">
              <label for="email">Email</label>
              <input type="email" id="email" className="form-field" value={fields.email} onChange={(e)=> handleChange(e, 'email')} required />
            </div>
            <div className="form-field-grp">
              <label for="pwd">Password</label>
              <input type="password" id="pwd" className="form-field" value={fields.pwd} onChange={(e)=> handleChange(e, 'pwd')} required />
            </div>
            <div className="form-field-grp cpwd">
              <label for="cpwd">Confirm Password</label>
              <input type="password" id="cpwd" className="form-field" value={fields.cpwd} onChange={(e)=> handleChange(e, 'cpwd')} required />
            </div>
            <button type="submit" className="btn btn-default form-btn">Signup</button>
          </form>
        </div>
        <div className="col-sm-2 col-md-2 col-lg-2>">
        </div>
      </div>
    </div>
  )
}

export default SignUp;
