import { useState, ChangeEvent } from 'react'

const State = () => {
const [text, setText] = useState<string | null>(null)
const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setText(e.target.value)
}
  return (
    <div className='container'>
        <h3>UseState</h3>
        <p>O texto é: {text}</p>
        <input type="text" onChange={handleChange}/>
    </div>
  )
}

export default State