import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputText from "./InputText";
import InputCheckbox from "./InputCheckbox";
import Select from "./Select";

enum IndustryEnum {
  automotive = "automotive",
  banking = "banking",
  consulting = "consulting",
  finance = "finance",
  healthcare = "healthcare",
  mediaPR = "mediaPR",
  retail = "retail",
  technology = "technology",
  telecommunication = "telecommunication",
  other = "other",
}

const IndustryOptions = {
  [IndustryEnum.automotive]: "Automotive",
  [IndustryEnum.banking]: "Banking",
  [IndustryEnum.consulting]: "Consulting",
  [IndustryEnum.finance]: "Finance",
  [IndustryEnum.healthcare]: "Healthcare",
  [IndustryEnum.mediaPR]: "Media/PR",
  [IndustryEnum.retail]: "Retail",
  [IndustryEnum.technology]: "Technology",
  [IndustryEnum.telecommunication]: "Telecommunication",
  [IndustryEnum.other]: "Other",
};

enum operatingGeographyEnum {
  national = "national",
  regional = "regional",
  global = "global",
}

const operatingGeographyOptions = {
  [operatingGeographyEnum.national]: "National",
  [operatingGeographyEnum.regional]: "Regional",
  [operatingGeographyEnum.global]: "Global",
};

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  company: string;
  industry: IndustryEnum;
  country: string;
  operatingGeography: operatingGeographyEnum;
  comments: string;
  privacyPolicy: boolean;
  newsletter: boolean;
};

const validationSchema = yup.object().shape({
  firstName: yup.string().trim().required(),
  email: yup
    .string()
    .trim()
    .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm)
    .required(),
  company: yup.string().trim().required(),
  industry: yup.string().trim().required(),
  // country: yup.string().trim().required(),
  privacyPolicy: yup.boolean().oneOf([true]),
});

const Form = () => {
  const { register, watch, handleSubmit, formState } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  const { isValid } = formState;

  console.log(watch());

  // console.log(IndustryOptions);

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-form__block">
          <InputText
            id={"firstName"}
            text={"First name"}
            isRequired={true}
            register={register}
          />
          {/* {errors.firstName && <span>This field is required</span>} */}
          <InputText
            id={"lastName"}
            text={"Last name"}
            isRequired={false}
            register={register}
          />
          <InputText
            id={"email"}
            text={"Email"}
            isRequired={true}
            register={register}
          />
          <InputText
            id={"jobTitle"}
            text={"Job title"}
            isRequired={false}
            register={register}
          />
        </div>

        <div className="contact-form__block">
          <InputText
            id={"company"}
            text={"Company"}
            isRequired={true}
            register={register}
          />
          <Select
            id={"industry"}
            text={"Industry"}
            isRequired={true}
            register={register}
            options={IndustryOptions}
          />

          <div>
            <label htmlFor="country">Country*</label>
            <select name="country" id="country" required defaultValue="N/A">
              <option value="N/A" disabled hidden>
                N/A
              </option>
              <option value="estonia">Estonia</option>
              <option value="russia">Russia</option>
              <option value="france">France</option>
            </select>
          </div>

          <Select
            id={"operatingGeography"}
            text={"Operating geography"}
            isRequired={false}
            register={register}
            options={operatingGeographyOptions}
          />
        </div>

        <div>
          <label htmlFor="comments">What would you like to talk about?</label>
          <textarea name="comments" id="comments"></textarea>
        </div>

        <div className="contact-form__block">
          <div className="checkboxes">
            <InputCheckbox
              id={"privacyPolicy"}
              isRequired={true}
              register={register}
            >
              By submitting this form I accept{" "}
              <a href="https://www.modularbank.co/privacy-policy/">
                privacy policy and cookie policy
              </a>
              .
            </InputCheckbox>

            <InputCheckbox
              id={"newsletter"}
              isRequired={false}
              register={register}
            >
              I would like to receive your newsletter.
            </InputCheckbox>
          </div>

          <div className="contact-form__submit-button-wrapper">
            <button
              className="contact-form__submit-button"
              type="submit"
              disabled={!isValid}
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
