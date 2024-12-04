// @ts-check
import react,{useState, useEffect } from 'react';
import BreedsSelect from './BreedsSelect';

export const DogListContainer = () => {
  const [ breeds ,setBreeds ] = useState([]);
  const [ selectedBreeds , setSelectedBreeds ] = useState("shiba");
  const [ dogImageList , setDogImageList ] =useState("");
  const handleChangeBreeds = (selectedBreeds) =>{
    setSelectedBreeds(selectedBreeds);
  };  

useEffect(() => {
   fetch("https://dog.ceo/api/breeds/list/all")
   .then(response => {return response.json();  
})
  .then(data => {setBreeds(Object.keys(data.message));
})
  .catch(error => {
  console.error(error); 
}
)})

const fetchbottonclick = () => {
  fetch("https://dog.ceo/api/breed/" + selectedBreeds + "/images/random/12"
    , {method : "GET"
      
    }
  )
  .then(response => {return response.json();  
  })

  .then(data => {setDogImageList(data.message);
  })
  .catch(error => {
    console.error(error); 
  })}

return(
  <>
  <BreedsSelect 
  selectedBreeds = {selectedBreeds} 
  breeds={breeds}
  select={handleChangeBreeds} />
  <p>{selectedBreeds}</p>
  <button onClick={fetchbottonclick}>表示</button>
  {dogImageList.map((dogImageList)=>(
    <div key={dogImageList}>
    <img src={dogImageList}  ></img>
  </div>))}

  </>
)
};


export default DogListContainer
