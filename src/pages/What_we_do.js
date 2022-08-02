import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '../component/Button'
import {InputText} from '../component/Input'

const API_KEY = '563492ad6f917000010000019b12c0ae48b44b77908448361ebdac71'
const Base_URL = 'https://api.pexels.com/v1/'
const endPoint = 'search'
const options = {
  method: 'GET', // POST | PUT | PATCH | DELETE
  headers: {
    Authorization: API_KEY,
  },
}

export default function What_we_do() {
  const [search, setSearch] = useState(null)
  const [kittens, setKittens] = useState([])

  useEffect(() => {
    // console.log('search', search)
  }, [search])

  useEffect(() => {
    // console.log('kittens', kittens)
  }, [kittens])

  const handleInputChange = (e) => {
    // console.log('value', e.target.value)
    setSearch(e.target.value)
  }

  const searchValue = () => {
    if (search) {
      // console.log('search')
      let params = `?query=${search}&orientation=portrait&size=smll&per_page=5`
      const url = Base_URL + endPoint + params
      // console.log('url', url)
      fetch(url, options)
        .then((response) => {
          // console.log('response', response)
          return response.json()
        })
        .then((data) => {
          // console.log('data', data)
          return data.photos
        })
        .then((kittens) => {
          setKittens(kittens) //rewrite
          //setKittens((prev)=>{return [...prev,...kittens]})
        })
    }
  }
  return (
    <>
      <h1>What we do</h1>
      <section>
        <InputText placeholder= "enter value" handleChange={handleInputChange} />
        <Button type="submit" label="search" handleClick={searchValue} />
        <ul>
          {kittens.map(({ src: { tiny }, alt, id }) => {
            // console.log('kitten', kitten)
            return (
              <li key={id}>
                <img src={tiny} alt={alt} />
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
