import { renderAsterisk } from "../utils";

type SelectProps = {
  id: string;
  isRequired: boolean;
  register: Function;
  options: object;
  children: React.ReactNode;
};

const renderOptions = (options: object) => {
  return Object.entries(options).map(([key, val]) => (
    <option value={key} key={key}>
      {val}
    </option>
  ));
};

const Select = ({ id, children, isRequired, register, options }: SelectProps) => {
  return (
    <div>
      <label htmlFor={id}>
        {children}
        {renderAsterisk(isRequired)}
      </label>
      <select className="contact-form__select" id={id} required={isRequired} {...register(id)}>
        <option value="" label="N/A" hidden />
        {renderOptions(options)}
      </select>
    </div>
  );
};

export default Select;
