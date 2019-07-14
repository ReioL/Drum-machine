import React, { Component } from "react"
import "./App.css"
import boom from "./boom.wav"

window.addEventListener("keypress", e => {
  const key = e.key.toUpperCase()
  const audio = document.getElementById(key)
  if (audio) {
    audio.currentTime = 0
    audio.play().catch(e => e)
    document.querySelector("#display").innerHTML = audio.parentElement.id
  }
})

class App extends Component {
  playSound = e => {
    const key = e.target.innerText
    document.querySelector("#" + key).currentTime = 0
    document
      .querySelector("#" + key)
      .play()
      .catch(e => e)
    document.querySelector("#display").innerHTML = e.target.id
  }

  render() {
    return (
      <div id="drum-machine">
        <div id="display" />
        <div className="drums">
          <div className="drum-pad" id="Sound1" onClick={this.playSound}>
            Q<audio className="clip" id="Q" src={boom} />
          </div>
          <div className="drum-pad" id="Sound2" onClick={this.playSound}>
            W<audio className="clip" id="W" src={boom} />
          </div>
          <div className="drum-pad" id="Sound3" onClick={this.playSound}>
            E<audio className="clip" id="E" src={boom} />
          </div>
          <div className="drum-pad" id="Sound4" onClick={this.playSound}>
            A<audio className="clip" id="A" src={boom} />
          </div>
          <div className="drum-pad" id="Sound5" onClick={this.playSound}>
            S<audio className="clip" id="S" src={boom} />
          </div>
          <div className="drum-pad" id="Sound6" onClick={this.playSound}>
            D<audio className="clip" id="D" src={boom} />
          </div>
          <div className="drum-pad" id="Sound7" onClick={this.playSound}>
            Z<audio className="clip" id="Z" src={boom} />
          </div>
          <div className="drum-pad" id="Sound8" onClick={this.playSound}>
            X<audio className="clip" id="X" src={boom} />
          </div>
          <div className="drum-pad" id="Sound9" onClick={this.playSound}>
            C<audio className="clip" id="C" src={boom} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
