import React from 'react'

type Props = {
    name: string
}

const SecondComponent = (algo: Props) => {
  return (
    <div>Propriedade {algo.name}!</div>
  )
}

export default SecondComponent