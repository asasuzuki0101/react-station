// @ts-check
export const BreedsSelect = (props) => {
  const breeds = props.breeds ;
  const selectedBreeds = props.value;
  const onchange = props.select
  const listItem = breeds.map((item) => <option value={item} key={item} >{item}</option>);
  return <select value={selectedBreeds} onChange={e => onchange(e.target.value)} >
    {listItem}
  </select>
}
export default BreedsSelect
