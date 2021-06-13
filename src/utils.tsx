export const renderAsterisk = (isRequired: boolean) => {
  return isRequired && <span aria-hidden="true">*</span>;
};

type renderCountryFlagProps = {
  name: string;
  flag: string;
};

export const renderCountryFlag = ({ name, flag }: renderCountryFlagProps) => (
  <div>
    <img
      className="country-flag"
      style={{ width: "20px", paddingRight: "4px" }}
      alt="country flag"
      src={flag}
    />
    <span>{name}</span>
  </div>
);
