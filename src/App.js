import React, { useState } from 'react'
import SingleColor from './Color'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [shades, setShades] = useState('')

  const [error, setError] = useState(false)
  const [error2, setError2] = useState(false)
  const [list, setList] = useState(new Values('#2D87C8').all(10))
  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      let colors
      if (parseInt(shades) > 0) {
        colors = new Values(color).all(parseInt(shades))
      } else {
        colors = new Values(color).all(10)
      }
      console.log(colors)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  const handleSubmitShades = (e) => {
    e.preventDefault()
    console.log(shades)

    try {
      let c 
      if (color === '') {
        c = new Values('#2D87C8').all(parseInt(shades))
      } else {
        c = new Values(color).all(parseInt(shades))
      }

      setList(c)
    } catch (error) {
      setError2(true)
      console.log(error)
    }
  }

  return (
    <>
      <div style={{ marginTop: '10px' }}>
        <h2>
          <center> Color Palette Generator</center>
        </h2>
      </div>
      <section className='container'>
        <label htmlFor='color'>
          <h3>Enter Color Code: </h3>
        </label>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            id='color'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />

          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </section>
      <section className='container' style={{ marginTop: '-35px' }}>
        <label htmlFor='shades'>
          <h3>Enter Weight of shades: </h3>
        </label>
        <form onSubmit={handleSubmitShades}>
          <input
            type='text'
            id='shades'
            value={shades}
            onChange={(e) => setShades(e.target.value)}
            placeholder='10'
            className={`${error2 ? 'error' : null}`}
          />

          <button className='btn' type='submit'>
            Submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}
      </section>
    </>
  )
}

export default App
