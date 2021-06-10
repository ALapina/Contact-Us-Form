type SelectProps = {
  id: string;
  text: string;
  isRequired: boolean;
  register: any;
  options: object;
};

const Select = ({ id, text, isRequired, register, options }: SelectProps) => {
  const renderAsterisk = () => {
    return isRequired && <span aria-hidden="true">*</span>;
  };

  const renderOptions = () => {
    let element = [];

    for (const [key, value] of Object.entries(options)) {
      element.push(
        <option className="option" value={key} key={key}>
          {value}
        </option>
      );
    }

    return element;
  };

  return (
    <div>
      <label htmlFor={id}>
        {text}
        {renderAsterisk()}
      </label>
      <select {...register(id)} id={id} required={isRequired}>
        <option value="" label="N/A" hidden />
        {renderOptions()}
      </select>
    </div>
  );
};

export default Select;
