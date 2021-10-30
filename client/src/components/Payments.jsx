import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Payments(props) {
  return (
      <div className="container-fluid col-md-6">
          <div className="row mb-6">
        <h1 className="d-flex justify-content-center my-1">
          DMusic Tokens</h1>
        {/* 
        <h2 className="d-flex justify-content-center my-1">
           For
        </h2>
        <h2 className="d-flex justify-content-center my-1">
        Uninterrupted Music !
        </h2> */}
        <h5 className="d-flex justify-content-center my-2">
          Current Token Balance
        </h5>
        <h6 className="d-flex justify-content-center my-2">
          {props.RemainToken} DMT
          <img src="https://res.cloudinary.com/doybtqm8h/image/upload/v1635438309/samples/favicon-16x16_lsdc6y.png" alt="" />
        </h6>

        <div className="mb-3 my-6">
          <label
            for="order"
            className="form-label d-flex justify-content-center"
          >
            <h4>Enter Token Amount</h4>
          </label>
          <input
            name="order"
            onChange={props.handC}
            type="text"
            className="form-control"
            id="order"
            placeholder="0"
          />
        </div>

        <div>
          <button
            type="button"
            className="d-grid btn btn-success my-3 col-2 mx-auto"
            onClick={props.handB}
          >
            Buy
          </button>
        </div>
        <div>
          <h3 className="d-flex justify-content-center my-2">
            Current ListenHours
          </h3>
          <h5 className="d-flex justify-content-center my-2">0</h5>
          <button
            type="button"
            onClick={props.payboss}
            className="d-grid btn btn-info my-3 col-2 mx-auto"
          >
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}
export default Payments;
