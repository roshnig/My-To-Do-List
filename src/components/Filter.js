const Filter = (props) => {
  return (
    <div className="filterDiv">
      <label>
        filter tasks:
        <select
          id="filterId"
          value=""
          onChange={(event) => {
            let value = event.target.value;
            console.log(value)
            props.setfiltered(value)
          }}
        >
          <option value="" disabled="disabled">
            please select
          </option>
          <option value="incomplete">incomplete</option>
          <option value="complete">complete</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
