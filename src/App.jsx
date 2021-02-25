import React, {useState} from 'react'

      
    


export function App() {
    function random() {
    const random360 = Math.floor(Math.random()* 360)
    const random100 = Math.floor(Math.random() * 100)
    const random100Again = Math.floor(Math.random() * 100)

    setHue(random360)
    setSaturation(random100)
    setLightness(random100Again)
  }
    const random360 = Math.floor(Math.random()* 360)
    const random100 = Math.floor(Math.random() * 100)
    const random100Again = Math.floor(Math.random() * 100)

    const [hue, setHue] = useState(random360)
    const [maxHue, setMaxHue] = useState(360)
    const [saturation, setSaturation] = useState(random100)
    const [maxSaturation, setMaxSaturation] = useState(100)
    const [lightness, setLightness] = useState(random100Again)
    const [maxLightness, setMaxLightness] = useState(100)

    const newBackgroundColor = `hsl(${hue},${saturation}%,${lightness}%)`
    const newStyle = { backgroundColor: newBackgroundColor}

    return (
      <body>
        <header>
          <h1>Color Picker</h1>
        </header>
        <div className="colorpicker">
          <div className="frame">
            <div className="color-circle" style={newStyle}>
            </div>
            <div className="sliders">
              <input className="hueslider" type="range" max={maxHue}
              onInput={(event) => setHue(event.target.value)} value={hue} style={newStyle}
              />
              <input className="huevalue" type="text" value={hue}/>
              <input className="rgbslider" type="range" max={maxSaturation}
              onInput={(event) => setSaturation(event.target.value)} value={saturation}/>
              <input className="rgbvalue" type="text" value={saturation}/>
              <input className="hsl" type="range" max={maxLightness}
              onInput={(event) => setLightness(event.target.value)} value={lightness}/>
              <input className="hslvalue" type="text" value={lightness}/>
            </div>
          </div>
          <div className="color-inputs">
            <div className="hsl">hsl ({hue}, {saturation}%, {lightness}%)</div> 
          </div>
          
          <button className="random-button" onClick={() => random()}>Random Color</button>
        </div>
        
      </body>
    )
  }