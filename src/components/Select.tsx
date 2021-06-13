import { renderAsterisk } from "../utils";

type SelectProps = {
  id: string;
  isRequired: boolean;
  register: Function;
  options: object;
  children: React.ReactNode;
};

const renderOptions = (options: object) => {
  let element = [];
  for (const [key, value] of Object.entries(options)) {
    element.push(
      <option value={key} key={key}>
        {value}
      </option>
    );
  }
  return element;
};

const Select = ({
  id,
  children,
  isRequired,
  register,
  options,
}: SelectProps) => {
  return (
    <div>
      <label htmlFor={id}>
        {children}
        {renderAsterisk(isRequired)}
      </label>
      <select
        className="contact-form__select"
        id={id}
        required={isRequired}
        {...register(id)}>
        <option value="" label="N/A" hidden />
        {renderOptions(options)}
      </select>
    </div>
  );
};

export default Select;
