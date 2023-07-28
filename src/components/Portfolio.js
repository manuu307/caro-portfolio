import { memo, useCallback, useContext, useEffect } from "react";
import { Context } from "../context/context";
import { directionHover } from "../utils";
import SectionContainer from "./SectionContainer";

const Portfolio = () => {
  const { showProjectFunction, activeProjectFunction } = useContext(Context);
  useEffect(() => {
    directionHover();
  }, []);

  const activeShowProject = useCallback((value) => {
    showProjectFunction();
    activeProjectFunction(value);
  }, []);

  return (
    <SectionContainer
      sectionName="work"
      title={{ first: "my ", last: "portfolio" }}
    >
      <div className="bl-content">
        {/* Main Heading Starts */}
        <div className="container page-title center-align">
          <h2 className="center-align">
            <span data-hover="my">my </span>{" "}
            <span data-hover="portfolio"> portfolio</span>
          </h2>
        </div>
        {/* Main Heading Ends */}
        <div className="container">
          {/* Divider Starts */}
          <div className="divider center-align">
            <span className="outer-line" />
            <span className="fa fa-suitcase" aria-hidden="true" />
            <span className="outer-line" />
          </div>
          <div className="row center-align da-thumbs" id="bl-work-items">
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-1">
              {/* <a href="#" onClick={() => activeShowProject(1)}> */}
              <img
                className="responsive-img"
                src="images/projects/project_1.png"
                alt="Project"
              />
              {/* <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Image Project
                  </span>
                </div> */}
              {/* </a> */}
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-2">
              {/* <a href="#" onClick={() => activeShowProject(2)}> */}
                <img
                  className="responsive-img"
                  src="images/projects/project_2.png"
                  alt="Project"
                />
                {/* <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Slider Project
                  </span>
                </div>
              </a> */}
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-3">
              {/* <a href="#" onClick={() => activeShowProject(3)}> */}
              <img
                className="responsive-img"
                src="images/projects/project_3.png"
                alt="Project"
              />
              {/* <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Youtube Video
                  </span>
                </div>
              </a> */}
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-4">
              {/* <a href="#" onClick={() => activeShowProject(4)}> */}
              <img
                className="responsive-img"
                src="images/projects/project_4.gif"
                alt="Project"
              />
              {/* <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">Local Video</span>
                </div>
              </a>*/}
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-5">
              {/* <a href="#" onClick={() => activeShowProject(5)}> */}
              <img
                className="responsive-img"
                src="images/projects/project_5.gif"
                alt="Project"
              />
              {/* <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Image Project
                  </span>
                </div>
              </a> */}
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-6">
              {/* <a href="#" onClick={() => activeShowProject(6)}> */}
              <img
                className="responsive-img"
                src="images/projects/project_6.gif"
                alt="Project"
              />
              {/* <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Image Project
                  </span>
                </div>
              </a> */}
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-7">
              {/* <a href="#" onClick={() => activeShowProject(7)}> */}
              <video
                style={{ width: "100%" }}
                className="responsive-img"
                src="images/projects/project_7.mp4"
                alt="Project"
                autoPlay
                muted
              />
              {/* <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Image Project
                  </span>
                </div>
              </a> */}
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-8">
              {/* <a href="#" onClick={() => activeShowProject(8)}> */}
              <video
                style={{ width: "100%" }}
                className="responsive-img"
                src="images/projects/project_8.mp4"
                alt="Project"
                autoPlay
                muted
              />
              {/* <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Image Project
                  </span>
                </div>
              </a> */}
            </div>
            {/* Project Ends */}
            {/* Project Starts */}
            <div className="col s12 m6 l6 xl4" data-panel="panel-9">
              {/* <a href="#" onClick={() => activeShowProject(9)}> */}
              <video
                style={{ width: "100%" }}
                className="responsive-img"
                src="images/projects/project_9.mp4"
                alt="Project"
                autoPlay
                muted
              />
              {/* <div className="valign-wrapper">
                  <span className="font-weight-700 uppercase">
                    Image Project
                  </span>
                </div>
              </a> */}
            </div>
            {/* Project Ends */}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default memo(Portfolio);
