import { renderAsterisk } from "../utils";

type InputTextProps = {
  id: string;
  isRequired: boolean;
  register: Function;
  children: React.ReactNode;
};

const InputText = ({ id, isRequired, register, children }: InputTextProps) => {
  return (
    <div>
      <label htmlFor={id}>
        {children}
        {renderAsterisk(isRequired)}
      </label>
      <input
        className="contact-form__input"
        type="text"
        id={id}
        required={isRequired}
        {...register(id)}
      />
    </div>
  );
};

export default InputText;
