import { useState, useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import InputText from "./InputText";
import InputCheckbox from "./InputCheckbox";
import Select from "./Select";
import SelectCountry from "./SelectCountry";

import {
  IndustryEnum,
  IndustryOptions,
  operatingGeographyEnum,
  operatingGeographyOptions,
} from "../selectOptions";

import { renderCountryFlag } from "../utils";

type countriesType = { name: string; flag: string; alpha3Code: string };

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  company: string;
  industry: IndustryEnum | string;
  operatingGeography: operatingGeographyEnum | string;
  comments: string;
  privacyPolicy: boolean;
  newsletter: boolean;
  country: countriesType | any;
};

const formDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  jobTitle: "",
  company: "",
  industry: "",
  operatingGeography: "",
  comments: "",
  privacyPolicy: false,
  newsletter: false,
  country: "",
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
  country: yup.object().required(),
  privacyPolicy: yup.boolean().oneOf([true]),
});

const Form = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [countries, setCountries] = useState<Array<countriesType>>([]);
  const { register, handleSubmit, reset, control, formState } =
    useForm<FormValues>({
      mode: "onChange",
      resolver: yupResolver(validationSchema),
      defaultValues: formDefaultValues,
    });

  async function loadCountries() {
    setLoading(true);
    const response = await fetch(
      "https://restcountries.eu/rest/v2/all?fields=name;alpha3Code;flag"
    );
    const countries = await response.json();
    setCountries(countries);
    setLoading(false);
  }

  useEffect(() => {
    loadCountries();
  }, []);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    data.country = data.country.alpha3Code;
    console.log(data);
  };

  // console.log(watch());

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="contact-form__form-block">
          <InputText id={"firstName"} isRequired={true} register={register}>
            First name
          </InputText>
          <InputText id={"lastName"} isRequired={false} register={register}>
            Last name
          </InputText>
          <InputText id={"email"} isRequired={true} register={register}>
            Email
          </InputText>
          <InputText id={"jobTitle"} isRequired={false} register={register}>
            Job title
          </InputText>
        </div>

        <div className="contact-form__form-block">
          <InputText id={"company"} isRequired={true} register={register}>
            Company
          </InputText>
          <Select
            id={"industry"}
            isRequired={true}
            register={register}
            options={IndustryOptions}>
            Industry
          </Select>

          <SelectCountry
            id="country"
            control={control}
            isLoading={isLoading}
            options={countries}
            optionValue={"alpha3Code"}
            isRequired={true}
            formatOptionLabel={renderCountryFlag}>
            Country
          </SelectCountry>

          <Select
            id={"operatingGeography"}
            isRequired={false}
            register={register}
            options={operatingGeographyOptions}>
            Operating geography
          </Select>
        </div>

        <div>
          <label htmlFor="comments">What would you like to talk about?</label>
          <textarea
            className="contact-form__textarea"
            name="comments"
            id="comments"></textarea>
        </div>

        <div className="contact-form__form-block">
          <div>
            <InputCheckbox
              id={"privacyPolicy"}
              isRequired={true}
              register={register}>
              By submitting this form I accept{" "}
              <a href="https://www.modularbank.co/privacy-policy/">
                privacy policy and cookie policy
              </a>
              .
            </InputCheckbox>

            <InputCheckbox
              id={"newsletter"}
              isRequired={false}
              register={register}>
              I would like to receive your newsletter.
            </InputCheckbox>
          </div>

          <button
            className="contact-form__submit-button"
            type="submit"
            disabled={!formState.isValid}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
