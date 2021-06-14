type renderCountryFlagProps = {
  name: string;
  flag: string;
};

export const renderCountryFlag = ({ name, flag }: renderCountryFlagProps) => (
  <div>
    <img className="country-flag" alt="country flag" src={flag} />
    <span>{name}</span>
  </div>
);

export const renderAsterisk = (isRequired: boolean) => {
  return isRequired && <span aria-hidden="true">*</span>;
};
