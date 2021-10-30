import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";
import Music from "../Data";
import { Link } from "react-router-dom";
function Home(props) {
  console.log(Music);
  return (
    <div class="container-fluid col-md-10">
      <div class="card">
        <img src={Music[0].img} class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{Music[0].name}</h5>
          <a class="d-grid btn btn-primary mx-auto">
            <Link
              to={Music[0].id}
              onClick={() => props.getI(Music[0].id)}
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              Play
            </Link>
          </a>
        </div>
      </div>
      <div class="card">
        <img src={Music[1].img} class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{Music[1].name}</h5>
          <a class="d-grid btn btn-primary mx-auto">
            <Link
              to={Music[1].id}
              onClick={() => props.getI(Music[1].id)}
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              Play
            </Link>
          </a>
        </div>
      </div>
      <div class="card">
        <img src={Music[2].img} class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{Music[2].name}</h5>
          <a class="d-grid btn btn-primary mx-auto">
            <Link
              to={Music[2].id}
              onClick={() => props.getI(Music[2].id)}
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              Play
            </Link>
          </a>
        </div>
      </div>
      <div class="card">
        <img src={Music[3].img} class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{Music[3].name}</h5>
          <a class="d-grid btn btn-primary mx-auto">
            <Link
              to={Music[3].id}
              onClick={() => props.getI(Music[3].id)}
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              Play
            </Link>
          </a>
        </div>
      </div>
      <div class="card">
        <img src={Music[4].img} />
        <div class="card-body">
          <h5 class="card-title">{Music[4].name}</h5>
          <a class="d-grid btn btn-primary mx-auto">
            <Link
              to={Music[4].id}
              onClick={() => props.getI(Music[4].id)}
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              Play
            </Link>
          </a>
        </div>
      </div>

      <div class="card">
        <img src={Music[5].img} class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{Music[5].name}</h5>
          <a class="d-grid btn btn-primary mx-auto">
            <Link
              to={Music[5].id}
              onClick={() => props.getI(Music[5].id)}
              style={{ textDecoration: "none", color: "#FFF" }}
            >
              Play
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
