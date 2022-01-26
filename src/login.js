export default function app(){
    return 
    <div className="Container-fluid">
      <div className="row">
          <div className="col bg-secondary">
        <form>
            <div className="mb-1">
            <input type="text"
            className="form-control=lg"
            placeholder="Enter username"
            />
            </div>

            <div className="mb-1">
            <input type="text"
            className="form-control=lg"
            placeholder="Enter password"
            />
            </div>

            <div>
            <input type="button"
            value="login to app"
            placeholder="Enter username"
            />
            </div>
   

        </form>
          </div>
      </div>
    </div>
  }