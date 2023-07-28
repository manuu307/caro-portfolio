import { memo, useState } from "react";
import SectionContainer from "./SectionContainer";
const GetInTouch = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailData),
      };
      fetch("api/contact", requestOptions).then(
        (response) => {
          setError(false);
          clearError();
          setMailData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.log(err.text);
        }
      );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <SectionContainer
      sectionName="Contact"
      title={{ first: "Contáctame", last: "Aquí" }}
    >
      <div className="bl-content">
        {/* Main Heading Starts */}
        <div className="container page-title center-align">
          <h2 className="center-align">
            <span data-hover="get">get </span>
            {""}
            <span data-hover="in touch">in touch</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-envelope-open" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          {/* Divider Ends */}
          <div className="row contact section-padding">
            {/* Contact Infos Starts */}
            <div className="col s12 m5 l5 xl4 leftside">
              {/* Contacts Starts */}
              <h6 className="font-weight-700 uppercase">Phone</h6>
              <span className="font-weight-400 second-font">
                <i className="fa fa-phone" /> +598 96 698 827
              </span>
              <h6 className="font-weight-700 uppercase">Email</h6>
              <span className="font-weight-400 second-font">
                <i className="fa fa-envelope" /> ctapia@valkiriasolutions.com
              </span>
              <h6 className="font-weight-700 uppercase">Telegram</h6>
              <span className="font-weight-400 second-font">
                <i className="fa fa-telegram" /> @carolinat96
              </span>
              <h6 className="font-weight-700 uppercase">Address</h6>
              <span className="font-weight-400 second-font">
                <i className="fa fa-home" /> Montevideo, Uruguay
              </span>
              <br />
              {/* Contacts Ends */}
              {/* Social Media Profiles Starts */}
              <h6 className="font-weight-700 uppercase">Social Profiles</h6>
              <div className="social">
                <ul className="list-inline social social-intro center-align p-none">
                  <li className="facebooks">
                    <a
                      href="https://www.facebook.com/profile.php?id=100089485569372"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="instagram">
                    <a
                      href="https://www.instagram.com/wabisabi_999/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="behance">
                    <a
                      href="https://www.behance.net/valkiria_marketing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-behance" />
                    </a>
                  </li>
                  <li className="linkedins">
                    <a
                      href="https://www.linkedin.com/in/carolina-tapia-317903166/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Social Media Profiles Ends */}
            </div>
            {/* Contact Infos Ends */}
            {/* Contact Form Starts */}
            <div className="col s12 m7 l7 xl8 rightside">
              <h6 className="uppercase m-none font-weight-700">
                Sientete libre de escribirme
              </h6>
              <div className="row">
                <p className="col s12 m12 l12 xl10 second-font">
                  Si tienes un proyecto y deseas colaborar, llena este form y te
                  responderé a la brevedad
                </p>
              </div>
              <form className="contactform" onSubmit={(e) => onSubmit(e)}>
                {/* Name Field Starts */}
                <div className="input-field second-font">
                  <i className="fa fa-user prefix" />
                  <input
                    id="name"
                    name="name"
                    onChange={(e) => onChange(e)}
                    value={name}
                    type="text"
                    className="validate"
                  />
                  <label className="font-weight-400" htmlFor="name">
                    Nombre
                  </label>
                </div>
                {/* Name Field Ends */}
                {/* Email Field Starts */}
                <div className="input-field second-font">
                  <i className="fa fa-envelope prefix" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={(e) => onChange(e)}
                    value={email}
                    className="validate"
                    required=""
                  />
                  <label htmlFor="email">Email</label>
                </div>
                {/* Email Field Ends */}
                {/* Comment Textarea Starts */}
                <div className="input-field second-font">
                  <i className="fa fa-comments prefix" />
                  <textarea
                    id="comment"
                    name="message"
                    onChange={(e) => onChange(e)}
                    value={message}
                    className="materialize-textarea"
                    required=""
                    defaultValue={""}
                  />
                  <label htmlFor="comment">Mensaje</label>
                </div>
                {/* Comment Textarea Ends */}
                {/* Submit Form Button Starts */}
                <div className="col s12 m12 l9 xl8 submit-form">
                  <button
                    className="btn font-weight-700"
                    type="submit"
                    name="send"
                  >
                    Enviar <i className="fa fa-send" />
                  </button>
                </div>
                {/* Submit Form Button Ends */}
                <div className="col s12 m12 l8 xl8 form-message">
                  <div
                    className={error ? "red-text" : "green-text"}
                    style={{ opacity: error == null ? "0" : "1" }}
                  >
                    <span>
                      {error
                        ? "Por favor completa los campos requeridos"
                        : "Tu mensaje ha sido enviado correctamente. Gracias por comunicarte!"}
                    </span>
                  </div>
                </div>
              </form>
            </div>
            {/* Contact Form Ends */}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default memo(GetInTouch);
