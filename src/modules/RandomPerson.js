// page that is dynamic

import React, { useEffect, useState } from "react"

export const RandomPerson = ({results}) => {
  // dynamic applications fetch content from an API: https://randomuser.me/api
  const [person, setPerson] = useState();

  useEffect(() => {
    fetch(`https://randomuser.me/api?results=${results = 1}`)
      .then(data => data.json())
      .then(data => setPerson(data))
  }, [results]);

  return (
    <div>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </div>
  )
}
