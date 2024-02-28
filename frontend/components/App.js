import React from 'react'
import data from './data.json'
import Header, { foo, bar } from './Header'
import Main from './Main'

export default function App() {
  console.log(data)
  console.log(foo, bar);
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}
