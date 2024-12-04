
export const DogImage = (props) => {
  console.log(props)
  return <div>
    <img src={props.dogUrl}></img>
  </div>
}

export default DogImage
