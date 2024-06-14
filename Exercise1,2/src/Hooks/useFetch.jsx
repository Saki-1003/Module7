import { useState, useEffect, useReducer } from 'react'

function useFetch(url) {

  const [data, dispatch] = useReducer(reducer, undefined)

  useEffect(()=>{
    fetch(url)
      .then(response => response.json())
      .then(json => dispatch({
        type: 'add data',
        json: json
      }))
  },[url])

  function reducer(data, action) {
    switch(action.type){
      case 'add data':
        return action.json
      default:
        return data
    }

  }

  return data
}

export default useFetch