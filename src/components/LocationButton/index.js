import "./styles.css";
export const LocationButton = ({currentLocationHandler}) => {

  const options = 

  [{ label: 'Current Location', value: 'current-location'},
  { label: 'New York', value: 'new-york' },
  {label:'New Jersey',value:'new-jersey'}];

  const handleSelection=(e)=>{
    if(e=='current-location'){
      currentLocationHandler();
  }};

  return (
    <select className="LocationButton_city-select-button" id="cities" onChange={(e) => handleSelection(e.target.value)}>
      {options.map(option => <option value={option.value}>{option.label}</option>)}
    </select>
  )
}