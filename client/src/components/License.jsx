import React from "react";
// import{BrowserRouter as Router,Route} from "react-router-dom";
// //import SimpleStorageContract from "./contracts/SimpleStorage.json";
// import ItemManager from "../contracts/ItemManager.json";
// import Item from "../contracts/IndItem.json";
// import getWeb3 from "../getWeb3";

import "bootstrap/dist/css/bootstrap.min.css";

function AddInfo(props) {
  return (
    <form>
      <div className="container-fluid col-md-6">
      <h2 className="d-flex justify-content-center my-2">
          License Your Work
        </h2>
        <div className="mb-3">
          <label for="SongName" className="form-label">
            SongName
          </label>
          <input
            name="SongName"
            value={props.NameVal}
            onChange={props.handC}
            type="text"
            className="form-control"
            id="SongName"
            placeholder="ItemName"
          />
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            value={props.NameVal}
            onChange={props.handC}
            type="text-area"
            className="form-control"
            id="description"
            placeholder="Description"
          />
        </div>
        <div className="mb-3">
          <div className="input-group mb-3">
            <input
              type="file"
              className="form-control"
              id="inputGroupFile02"
              onChange={props.cap}
            />
            <label className="input-group-text" for="inputGroupFile02">
              Upload
            </label>
          </div>

          <button
            type="button"
            onClick={props.submit}
            className="d-grid btn btn-success my-3 col-2 mx-auto"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
export default AddInfo;
