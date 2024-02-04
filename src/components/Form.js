const Form = props => {
    const sumbitCityHandler = (event) => {
        event.preventDefault();
        setCity(validateCity(city));
        props.city(validateCity(city));
        setChosenCity(validateCity(city));
      };
    return <form onSubmit={sumbitCityHandler}>
        <input
          className="text-input"
          type="text"
          placeholder="Search"
          value={city}
          onChange={onChangeCityHandler}
          required
        />
        </form>
}

export default Form