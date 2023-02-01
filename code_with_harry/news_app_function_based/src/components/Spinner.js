import React from 'react'

import Loader from "./Skateboarding.gif"

export default function Spinner() {
  return (
    <div className="centre">
        <img src={Loader} alt="Loading"/>
    </div>
  )
}
