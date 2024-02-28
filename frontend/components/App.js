import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header, { foo, bar } from './Header'
import Main from './Main'



//los componenetes pueden pasar tantos atributos como queramos
export default function App() {
  const [data, setData] = useState(null)
  useEffect(()=>{
    //codigo arbitrario
    console.log('El componente esta en el DOM')
    axios.get('/api/frontpage').then(response =>{
      //la respuesta (response) viene por HTTP
      const frontpage = response.data
      setData(frontpage)
      console.log('Datos seteados')
    })
    console.log('Esto no espera a la frontpage data')
  }, [])
  if (!data) return <div>Cargando datos...</div>
  console.log(data)
  console.log('foo ', foo, 'bar ', bar)
  return (
    <div>
      <Header datos={data.header} foo={foo} bar={bar} />
      <Main
        mainArticles={data.mainArticles}
        secondaryArticles={data.secondaryArticles}
        asideArticles={data.asideArticles}
      />
    </div>
  )
}
