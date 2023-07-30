import Link from "next/link";
import { Fragment, memo, useMemo, useState } from "react";
import useWindowSize from "../useWindowSize";
import SectionContainer from "./SectionContainer";

const Experience = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-briefcase" /> Experience
      </div>
    </div>
    {/* Experience Header Title Ends */}
    {/* Experience Content Starts */}
    <div className="resume-card-body experience">
      <div className="resume-card-body-container second-font">
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Admin. de Empresa / Diseño y Marketing - </span>Synergym
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2018 - 2022
          </span>
          <ul>
            <li>Administración de Empresa</li>
            <li>Modificación y Actualización del Branding.</li>
            <li>
              Estrategias de Marketing Digital y Gestión de Redes Sociales
              (RRSS).
            </li>
            <li>Diseño de Banners para Impresión y Sitio Web.</li>
            <li>Creación de Respuestas Atractivas para el Consumidor Final</li>
          </ul>
        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Admin. de Empresa / Diseño y Marketing - </span>Amideva
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2021 - 2023
          </span>
          <ul>
            <li>Administración de Empresa y Finanzas</li>
            <li>Análisis de Mercado y Competencia.</li>
            <li>Gestión de Campañas de Publicidad Online.</li>
            <li>Estrategias de Email Marketing.</li>
            <li>Generación de Contenido Multimedia.</li>
            <li>Gestión de redes sociales (RRSS).</li>
          </ul>
        </div>
        {/* Single Experience Ends */}
        <span className="separator" />
        {/* Single Experience Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Co-Fundadora - </span>Valkiria Solutions
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2023 - Actualidad
          </span>
          <ul>
            <li>Administración y Finanzas</li>
            <li>Modificación y Actualización del Branding.</li>
            <li>
              Estrategias de Marketing Digital y Gestión de Redes Sociales
              (RRSS).
            </li>
            <li>Diseño Gráfico.</li>
          </ul>
        </div>
        {/* Single Experience Ends */}
      </div>
    </div>
  </Fragment>
);
const Education = () => (
  <Fragment>
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-graduation-cap" /> Educación
      </div>
    </div>
    {/* Education Header Title Starts */}
    <div className="resume-card-body education">
      <div className="resume-card-body-container second-font">
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Administración de Empresas - </span>Inst. Superior Brazo
            Oriental
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2016 - 2019
          </span>
          <p></p>
        </div>
        <span className="separator" />
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Marketing Digital - </span>AsIAP
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2015
          </span>
          <p></p>
        </div>
        {/* Single Education Ends */}
        <span className="separator" />
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Diseño Gráfico - </span>Domestika
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2018
          </span>
          <p></p>
        </div>
        {/* Single Education Ends */}
        <span className="separator" />
        {/* Single Education Starts */}
        <div className="resume-content">
          <h6 className="uppercase">
            <span>Desarrollo Web - </span>Coder House
          </h6>
          <span className="date">
            <i className="fa fa-calendar-o" /> 2021
          </span>
          <p></p>
        </div>
        {/* Single Education Ends */}
      </div>
    </div>
  </Fragment>
);
const Skills = () => (
  <Fragment>
    {/* Skills Header Title Starts */}
    <div className="resume-card-header">
      <div className="resume-card-name">
        <i className="fa fa-star" /> Skills
      </div>
    </div>
    {/* Skills Header Title Starts */}
    <div className="resume-card-body skills">
      <div className="resume-card-body-container second-font">
        <div className="row">
          {/* Skills Row Starts */}
          <div className="col s6">
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Html</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Css</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-half-empty" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">javascript</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">scss</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">canva</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">wordpress</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-half-empty" />{" "}
                <i className="fa fa-star-o" /> <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
          {/* Skills Row Starts */}
          <div className="col s6">
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Generative AI</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
                <i className="fa fa-star-half-empty" />
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">google suite</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />{" "}
                <i className="fa fa-star-half-empty" />{" "}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">excel</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">adobe premiere</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">Adobe Photoshop</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" />
              </p>
            </div>
            {/* Single Skills Ends */}
            {/* Single Skills Starts */}
            <div className="resume-content">
              <h6 className="uppercase">meta business</h6>
              <p>
                <i className="fa fa-star" /> <i className="fa fa-star" />{" "}
                <i className="fa fa-star" /> <i className="fa fa-star" />
                <i className="fa fa-star-o" />
              </p>
            </div>
            {/* Single Skills Ends */}
          </div>
          {/* Skills Row Ends */}
        </div>
      </div>
    </div>
  </Fragment>
);

const AboutUs = ({ dark }) => {
  const [active, setActive] = useState(0);
  const { width } = useWindowSize();

  const activeState = useMemo(() => ({ active, setActive }), [active]);

  return (
    <SectionContainer
      sectionName="About"
      title={{ first: "About", last: "ME" }}
    >
      <div className="bl-content">
        {/* Main Heading Starts */}
        <div className="container page-title custom-page-title">
          <h2 className="center-align">
            <span>About</span> <span>Me</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container infos">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-vcard" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          {/* Divider Ends */}
          {/* Personal Informations Starts */}
          <div className="row">
            {/* Picture Starts */}
            <div className="col s12 m4 profile-picture show-on-medium-and-down section-padding">
              <img
                src="images/profile-pic2.jpeg"
                className="responsive-img my-picture"
                alt="My Photo"
              />
            </div>
            {/* Picture Ends */}
            <div className="col s12 m8 l12 xl12 personal-info section-padding">
              <h6 className="uppercase">
                <i className="fa fa-user" /> Personal Info
              </h6>
              <div className="col m12 l12 xl9 p-none">
                <p className="second-font">
                  Soy una persona multifacética con pasión por la creatividad y
                  la innovación. Mi amor por los animales, la música y el
                  disfrute del tiempo al aire libre ha moldeado mi perspectiva y
                  me ha enseñado a apreciar la belleza en las pequeñas cosas de
                  la vida. Soy una emprendedora entusiasta que ha encontrado su
                  vocación en el mundo del diseño gráfico y el marketing
                  digital. Mi experiencia en administración, herramientas
                  informáticas y social media aporta valor a cualquier equipo.
                  Adaptable y resolutiva, logro resultados sobresalientes en mis
                  proyectos.
                </p>
              </div>
              <div className="col s12 m12 l6 p-none">
                <ul className="second-font list-1">
                  <li>
                    <span className="font-weight-700">Nombre: </span>
                    Carolina
                  </li>
                  <li>
                    <span className="font-weight-700">Apellido: </span>
                    Tapia
                  </li>
                  <li>
                    <span className="font-weight-700">Nacimiento: </span>
                    13 septiembre 1996{" "}
                  </li>
                  <li>
                    <span className="font-weight-700">Nacionalidad: </span>
                    Uruguaya
                  </li>
                  <li>
                    <span className="font-weight-700">Emprendimiento: </span>
                    Valkiria Solutions
                  </li>
                </ul>
              </div>
              <div className="col s12 m12 l6 p-none">
                <ul className="second-font list-2">
                  <li>
                    <span className="font-weight-700">Phone: </span>+598 96 698
                    827
                  </li>
                  <li>
                    <span className="font-weight-700">Address: </span>
                    Montevideo, Uruguay
                  </li>
                  <li>
                    <span className="font-weight-700">Email: </span>
                    ctapia@valkiriasolutions.com
                  </li>
                  <li>
                    <span className="font-weight-700">Lengua: </span>
                    Español
                  </li>
                  <li>
                    <span className="font-weight-700">Telegram: </span>
                    @carolinat96
                  </li>
                </ul>
              </div>

              <a
                href="/images/curriculum.pdf"
                className="btn font-weight-700"
                download
              >
                Descargar Curriculum <i className="fa fa-file-pdf-o" />
              </a>
              <a
                href="https://www.valkiriasolutions.com"
                target="_blank"
                className="btn btn-blog font-weight-700"
                rel="noreferrer"
              >
                Mi emprendimiento <i className="fa fa-edit" />
              </a>
            </div>
          </div>
          {/* Personal Informations Ends */}
        </div>
        {/* Resume Starts */}
        <div className="resume-container">
          <div className="container">
            <p style={{ display: "none" }}>{width}</p>
            <div className="valign-wrapper row">
              {/* Resume Menu Starts */}
              <div className="resume-list col l4 section-padding">
                <div
                  className={`resume-list-item ${
                    activeState.active === 0 ? "is-active" : ""
                  }`}
                  data-index={0}
                  id="resume-list-item-0"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(0)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-briefcase" /> Experience
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${
                    activeState.active === 1 ? "is-active" : ""
                  }`}
                  data-index={1}
                  id="resume-list-item-1"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(1)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-graduation-cap" /> Education
                    </h6>
                  </div>
                </div>
                <div
                  className={`resume-list-item ${
                    activeState.active === 2 ? "is-active" : ""
                  }`}
                  data-index={2}
                  id="resume-list-item-2"
                >
                  <div
                    className="resume-list-item-inner"
                    onClick={() => activeState.setActive(2)}
                  >
                    <h6 className="resume-list-item-title uppercase">
                      <i className="fa fa-star" /> Skills
                    </h6>
                  </div>
                </div>
              </div>
              {/* Resume Menu Ends */}
              {/* Resume Content Starts */}
              {width < 800 ? (
                <div className="col s12 m12 l8 resume-cards-container section-padding">
                  <div className="resume-cards">
                    <div className="resume-card resume-card-0">
                      <Experience />
                    </div>
                    <div className="resume-card resume-card-1">
                      <Education />
                    </div>
                    <div className="resume-card resume-card-2">
                      <Skills />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="col s12 m12 l8 resume-cards-container section-padding">
                  <div className="resume-cards">
                    {/* Experience Starts */}
                    <div
                      className={`resume-card resume-card-0 ${
                        activeState.active == 0
                          ? "front"
                          : activeState.active == 2
                          ? "back"
                          : "back-back"
                      }`}
                      onClick={() => activeState.setActive(0)}
                      data-index={0}
                    >
                      <Experience />
                    </div>
                    {/* Experience Ends */}
                    {/* Education Starts */}
                    <div
                      className={`resume-card resume-card-1 ${
                        active == 1
                          ? "front"
                          : active == 0
                          ? "back"
                          : "back-back"
                      }`}
                      data-index={1}
                      onClick={() => activeState.setActive(1)}
                    >
                      <Education />
                    </div>
                    {/* Education Ends */}
                    {/* Skills Starts */}
                    <div
                      className={`resume-card resume-card-2 ${
                        active == 2
                          ? "front"
                          : active == 1
                          ? "back"
                          : "back-back"
                      }`}
                      data-index={2}
                      onClick={() => activeState.setActive(2)}
                    >
                      <Skills />
                    </div>
                    {/* Skills Ends */}
                  </div>
                </div>
              )}

              {/* Resume Content Ends */}
            </div>
          </div>
        </div>
        {/* Resume Ends */}
        {/* Fun Facts Starts */}
        <div className="container badges">
          {/* <div className="row">

            <div className="col s12 m4 l4 center-align">
              <h3>
                <i className="fa fa-briefcase" />
                <span className="font-weight-900">5+</span>
              </h3>
              <h6 className="uppercase font-weight-700">Years Experience</h6>
            </div>

            <div className="col s12 m4 l4 center-align">
              <h3>
                <i className="fa fa-handshake-o" />
                <span className="font-weight-900">89+</span>
              </h3>
              <h6 className="uppercase font-weight-700">Done Projects</h6>
            </div>

            <div className="col s12 m4 l4 center-align">
              <h3>
                <i className="fa fa-heart-o" />
                <span className="font-weight-900">77+</span>
              </h3>
              <h6 className="uppercase font-weight-700">Happy customers</h6>
            </div>

          </div> */}
        </div>
        {/* Fun Facts Ends */}
      </div>
    </SectionContainer>
  );
};
export default memo(AboutUs);
