// @ts-check
import'./App.css'
import {useState}  from "react"
import DogImage from "./DogImage"

export const Description = () => {
  const [ dogUrl , setDogUrl ] = useState("https://images.dog.ceo/breeds/spitz-japanese/beet-002.jpg"

  );
  const buttonclick = () =>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => {return response.json();  
    })
    .then(data => {setDogUrl(data.message);
    })
    .catch(error => {
      console.error(error);  
    });
          }
    
  return(
  <>
  <DogImage dogUrl={dogUrl}/>
  <button onClick={buttonclick} id="a1">僕の別の姿だよ！</button>
  </>)
}
export default Description
