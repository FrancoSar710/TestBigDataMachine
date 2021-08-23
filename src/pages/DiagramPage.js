import React, { useState, useEffect} from 'react';
import DiagramMaker from "../components/DiagramMaker";


export default function DiagramPage() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItems] = useState([]);
    
    useEffect(() => {
      fetch("https://gorest.co.in/public/v1/todos")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
            setIsLoaded(true);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        DiagramMaker(item.data)
      );
    }
  }
  