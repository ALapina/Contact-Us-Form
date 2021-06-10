function App() {
  return (
    <div className="container">
      <h1 className="contact-title">Contact us</h1>

      <div className="contact-info">
        <div className="contact-info__paragraph">
          <p>Media enquiries:</p>
          <a href="mailto:press@modularbank.co">press@modularbank.co</a>
        </div>

        <div className="contact-info__paragraph">
          <p>Career questions:</p>
          <a href="mailto:careers@modularbank.co">careers@modularbank.co</a>
        </div>

        <div className="contact-info__paragraph">
          <p>Our offices:</p>
          <p>Tallinn, Estonia</p>
          <p>Vabaduse Workland</p>
          <p>Pärnu mnt 12, 10146</p>
        </div>

        <div className="contact-info__paragraph">
          <p>Berlin, Germany</p>
          <p>Bikini Berlin, Scaling Spaces, 2.OG</p>
          <p>Budapester Str. 46</p>
          <p>10787 Berlin</p>
        </div>
      </div>

      <div className="contact-form">
        <form action="">
          <div className="contact-form__block">
            <div>
              <label htmlFor="firstName">
                First name<span aria-hidden="true">*</span>
              </label>
              <input type="text" name="firstName" id="firstName" required />
            </div>
            <div>
              <label htmlFor="lastName">Last name</label>
              <input type="text" name="lastName" id="lastName" />
            </div>
            <div>
              <label htmlFor="email">Email*</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div>
              <label htmlFor="jobTitle">Job title</label>
              <input type="text" name="jobTitle" id="jobTitle" />
            </div>
          </div>

          <div className="contact-form__block">
            <div>
              <label htmlFor="company">Company*</label>
              <input type="text" name="company" id="company" required />
            </div>
            <div>
              <label htmlFor="industry">Industry*</label>
              <select name="industry" id="industry" required>
                <option value="N/A" selected disabled hidden>
                  N/A
                </option>
                <option className="option" value="banking">
                  Banking
                </option>
                <option value="automotive">Automotive</option>
                <option value="finance">Finance</option>
              </select>
            </div>
            <div>
              <label htmlFor="country">Country*</label>
              <select name="country" id="country" required>
                <option value="N/A" selected disabled hidden>
                  N/A
                </option>
                <option value="estonia">Estonia</option>
                <option value="russia">Russia</option>
                <option value="france">France</option>
              </select>
            </div>
            <div>
              <label htmlFor="operatingGeography">Operating geography</label>
              <select name="operatingGeography" id="operatingGeography">
                <option value="N/A" selected disabled hidden>
                  N/A
                </option>
                <option value="national">National</option>
                <option value="regional">Regional</option>
                <option value="global">Global</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="comments">What would you like to talk about?</label>
            <textarea name="comments" id="comments"></textarea>
          </div>

          <div className="contact-form__block">
            <div>
              <div>
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  id="privacyPolicy"
                />
                <label htmlFor="privacyPolicy">
                  By submitting this form I accept privacy policy and cookie
                  policy.
                </label>
              </div>
              <div>
                <input type="checkbox" name="newsletter" id="newsletter" />
                <label htmlFor="newsletter">
                  I would like to receive your newsletter.
                </label>
              </div>
            </div>
            <div className="contact-form__submit-button-wrapper">
              <button
                className="contact-form__submit-button"
                type="submit"
                disabled
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
}

export default App;
