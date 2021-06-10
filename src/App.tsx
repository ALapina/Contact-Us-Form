import Form from "./components/Form";

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

      <Form />
    </div>
  );
}

export default App;
