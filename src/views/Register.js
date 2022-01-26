import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="container-fluid">
      <div
        className="row bg-dark justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-12 col-md-6 bg-secondary p-4 rounded">
          <form>
            <div className="alert alert-dark h2">Registration Form</div>

            <div>
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter username"
              />
            </div>

            <div className="mt-1">
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Enter Password"
              />
            </div>

            <div className="mt-1">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Email"
              />
            </div>

            <div className="mt-1">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Mobile"
              />
            </div>

            <div className="mt-1">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Enter Address"
              />
            </div>

            <div className="mt-1">
              <input
                type="button"
                value="Register"
                className="btn btn-dark w-100 btn-lg"
              />
            </div>

            <div className="text-center">
              <Link to="/login" className="text-info">
                Login here..
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
