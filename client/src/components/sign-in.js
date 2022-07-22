const SignIn = () => {

  const onSubmit =(e)=>{
    e.preventDefault();
  }

  return (
    <div className="container signup" style={{padding: '30px'}}>
      <div className="row">
      <div className="col-sm-2 col-md-2 col-lg-2>">
      </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <h2>Login</h2>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <form onSubmit={(e)=> onSubmit(e)}>
            <div className="form-field-grp">
              <label for="email">Email</label>
              <input type="email" id="email" className="form-field" required />
            </div>
            <div className="form-field-grp">
              <label for="pwd">Password</label>
              <input type="password" id="pwd" className="form-field" required />
            </div>
          </form>
          <button type="submit" className="btn btn-default form-btn">Login</button>
        </div>
        <div className="col-sm-2 col-md-2 col-lg-2>">
        </div>
      </div>
    </div>
  )
}

export default SignIn;
