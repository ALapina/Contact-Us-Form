type InputTextProps = {
  id: string;
  text: string;
  isRequired: boolean;
  register: any;
};

const InputText = ({ id, text, isRequired, register }: InputTextProps) => {
  const renderAsterisk = () => {
    return isRequired && <span aria-hidden="true">*</span>;
  };

  return (
    <div>
      <label htmlFor={id}>
        {text}
        {renderAsterisk()}
      </label>
      <input type="text" {...register(id)} id={id} required={isRequired} />
    </div>
  );
};

export default InputText;
