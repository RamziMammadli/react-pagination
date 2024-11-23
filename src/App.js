import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(8)

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
    .then(res => {
      setData(res.data.products)
    })
  }, [])

  const lastIndexProducts = currentPage * productsPerPage
  const firstIndexProducts = lastIndexProducts - productsPerPage

  const currentproducts = data.slice(firstIndexProducts, lastIndexProducts)

  let pages = []

  for(let i = 1 ; i <= Math.ceil(data.length/productsPerPage); i++) {
    pages.push(i)
  }

  return (
    <div>
      {currentproducts && currentproducts.map(item => {
        return <p>{item.title}</p>
      })}
      {pages && pages.map(item => {
        return <button onClick={() => setCurrentPage(item)}>{item}</button>
      })}
    </div>
  )
}

export default App