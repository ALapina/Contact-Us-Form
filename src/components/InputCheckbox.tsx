type InputCheckboxProps = {
  id: string;
  isRequired: boolean;
  register: any;
  children: any;
};

const InputCheckbox = ({
  id,
  children,
  isRequired,
  register,
}: InputCheckboxProps) => {
  return (
    <div className="checkboxes__div">
      <input type="checkbox" {...register(id)} id={id} required={isRequired} />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export default InputCheckbox;
