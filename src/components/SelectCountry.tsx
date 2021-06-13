import ReactSelect, { components } from "react-select";
import { Controller } from "react-hook-form";
import { renderAsterisk } from "../utils";
import { AiFillCaretDown } from "react-icons/ai";

type SelectCountryProps = {
  control: any;
  id: string;
  children: React.ReactNode;
  isLoading: boolean;
  options: Array<object>;
  optionValue: string;
  isRequired: boolean;
  formatOptionLabel: any;
};

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <AiFillCaretDown color={"#000000"} size={"14px"} />
    </components.DropdownIndicator>
  );
};

const SelectCountry = ({
  control,
  id,
  children,
  isLoading,
  options,
  optionValue,
  isRequired,
  formatOptionLabel,
}: SelectCountryProps) => {
  return (
    <div>
      <label id={id}>
        {children}
        {renderAsterisk(isRequired)}
      </label>
      <Controller
        name={id}
        control={control}
        render={({ field }) => (
          <ReactSelect
            {...field}
            classNamePrefix="react-select"
            components={{ DropdownIndicator }}
            aria-labelledby={id}
            isRequired={isRequired}
            isLoading={isLoading}
            options={options}
            getOptionValue={(option) => option[optionValue]}
            formatOptionLabel={formatOptionLabel}
          />
        )}
      />
    </div>
  );
};

export default SelectCountry;
