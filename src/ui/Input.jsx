

const Input = ({label,state,setState,type='text'}) => {
  return (
    <div>
      <div className="form-floating mt-2">
        <input
          type={type}
          className="form-control"
          id="floatingInput"
          placeholder={label}
          value={state}
          onChange={e=> setState(e.target.value)}
        />
        <label for="floatingInput">{label}</label>
      </div>
    </div>
  );
};

export default Input;
