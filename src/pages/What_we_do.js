import { useState, useEffect} from 'react';
import {Button} from '../components/Button';
import {InputText} from '../components/Input';

 // ===== CONSTANTS
 const API_KEY = '563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2';
 const BASE_URL = 'https://api.pexels.com/v1/';
 const endpoint = 'search';
 const options = {
   // method: 'GET', // POST | PUT | PATCH | DELETE
   headers: {
     Authorization: API_KEY
   },
   // body: {}; // if POST | PUT | PATCH
 }
 // fetch(url, options).then(() => {}).then(() => {})
 // ===== CONSTANTS

export function WhatWeDo(){
  const [search, setSearch] = useState(null);
  const [kittens, setKittens] = useState([]);

  useEffect(() => {
    // console.log('search:', search);
  }, [search]);

  useEffect(() => {
    console.log('KITTENS:', kittens);
  }, [kittens]);

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  const searchValue = () => {
    if(search){
      // console.log('SEARCH');
      let params = `?query=${search}&orientaion=portrait&size=small&per_page=5`;
      const url = BASE_URL + endpoint + params;
      // console.log('url:', url);
      fetch(url, options).then((response) => {
        console.log('serponse:', response);
        return response.json();
      }).then((data) => {
        console.log('data:', data);
        return data.photos
      }).then((kittens) => {
        setKittens(kittens); // rewrite
        // setKittents((prev)=>{ return [...prev, ...kittens] }) // add new kittens 
      })
    }
  }

  return (
    <>
      <section>
        {/* onChange={handleInputChange} === input,addEventListener('change', handleInputChange) */}
        <InputText placeholder='enter value' handleChange={handleInputChange} xxx='111'/>
        <Button type='submit' label='search' handleClick={searchValue}/>
        <ul>
          {kittens.map(({src: {tiny}, alt, id}) => {
            return (
              <li key={id}>
                <img src={tiny} alt={alt}/>
              </li>
              )
          })}
        </ul>
      </section>
    </>
  )
}