export const LocationButton = () => {
    const options = [{ label: 'New York', value: 'new-york' },{label:'New Jersey',value:'new-jersey'}]
    return (
        <select name="cars" id="cars">

            {options.map(option => <option value={option.value}>{option.label}</option>)}
        </select>
    )
}