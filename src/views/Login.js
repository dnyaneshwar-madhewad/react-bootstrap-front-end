import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

  const authenticate = () => {
    //
    navigate("/welcome-home");
  };

  return (
    <div className="container-fluid">
      <div
        className="row bg-dark align-items-center justify-content-center "
        style={{ height: "100vh" }}
      >
        <div className="col-12 col-md-6  bg-secondary p-4">
          <form>
            <div className="alert alert-dark h2">Application Login Form</div>

            <div className="mb-1">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Username"
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Password"
              />
            </div>

            <div>
              <input
                type="button"
                value="Login to App"
                className="btn btn-lg btn-dark w-100"
                onClick={authenticate}
              />
            </div>

            <div className="text-center mt-1">
              <Link to="/register" className="text-info ">
                Register Here...
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
