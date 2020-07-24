import React from 'react'
import  {Link} from "gatsby"
export default function Services() {
    return (
        <div className="row mx-auto">
            <div className="col-1"></div>
            <div className="col-10 col-sm-10">
            <div class="card-group">
  <div class="card">
    <div className="imageCard">
    <img class="card-img-top cardimg" src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
    </div>
    <div class="card-body">
      <h5 class="card-title">Software</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <div class = "imageCard">
    <img class="card-img-top cardimg" src="https://images.pexels.com/photos/2911364/pexels-photo-2911364.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
    </div>
    <div class="card-body">
      <h5 class="card-title">Network</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <div class = "imageCard">
    <img class="card-img-top cardimg" src="https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt="Card image cap"/>
    </div>
    <div class="card-body">
      <h5 class="card-title">Name 3</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
        </div>
        <div className="col-1"></div>
        </div>
    )
}

