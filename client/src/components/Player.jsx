import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactAudioPlayer from "react-audio-player";

function Player(props) {
  return (
    <div class="row mb-2  ">
      <div class="container-fluid d-flex justify-content-center col-md-8 mt-0">
        <div class="card-a text-center ">
          <img src={props.Data.img} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{props.Data.name}</h5>
            <ReactAudioPlayer src={props.Data.music} 
            controls onPlay={props.play} onPause={props.pause}/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Player;
