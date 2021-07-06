// this holds our dynamic Client Side Rendering stuff
// similar to create-react-app
import React from "react"
import { Router as MyRouter } from "@reach/router"
import { RandomPerson } from "../../modules/RandomPerson"

const Router = () => {
  return (
    <MyRouter>
      <RandomPerson path="/app/random-person/" />
      <RandomPerson path="/app/random-person/:results" />
    </MyRouter>
  )
}

export default Router;
