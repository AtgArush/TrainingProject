import React from 'react'

export default function PhotoSection() {
    return (
        <div className="row mx-auto myteam">
            <div className="col-1"></div>
            <div className="col-10 col-sm-10">
            <div class="card-group">
  <div class="card AboutCard">
    <div className="imageCard">
    <img class="card-img-top cardimg" src="https://images.pexels.com/photos/374044/pexels-photo-374044.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" />
    </div>
    <div class="card-body">
      <h5 class="card-title">Samartha</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <div class = "imageCard">
    <img class="card-img-top cardimg" src="https://images.pexels.com/photos/4127502/pexels-photo-4127502.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
    </div>
    <div class="card-body">
      <h5 class="card-title">Name 2</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <div class = "imageCard">
    <img class="card-img-top cardimg" src="https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap"/>
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
