import mainBanner from "../../img/main-banner.jpg";
import Image from "react-bootstrap/Image";
import { FormEvent } from "react";

const BannerForm = () => {
  return (
    <div className="App row h-100">
      <div className="col-auto text-center p-3">
        <div className="card">
          <div className="card-body">
            <h1>WELCOME</h1>
            <h2>FRA</h2>
            <h1>Failure Red App</h1>

            <div className="d-flex justify-content-bewteen p-4">
              <form action="/api/auth/signin/">
                <div className="form-group p-4">
                  <button type="submit" className="btn btn-outline-primary">
                    Binvenido Ingeniero
                  </button>
                </div>
              </form>

              <form
                action="/api/auth/signup"
                // onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                //   e.preventDefault();
                // }}
                // onClick={(e: React.FormEvent<HTMLFormElement>) => {
                //   e.preventDefault();
                // }}
              >
                <div className="form-group p-4">
                  <button type="submit" className="btn btn-outline-primary">
                    Nuevo Ingeniero
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerForm;
