import "./projectLayout.css";
import { Helmet } from "react-helmet";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function ProjectLayout({
  projectTitle,
  projectPicture,
  projectTarget,
  projectProblem,
  projectDescription,
  projectAwards,
  projectPartnership,
}) {
  return (
    <div className="project-page-container">
      <Helmet>
        <title>Project {projectTitle}</title>
        <meta property="og:title" content={`Project ${projectTitle}`} />
      </Helmet>
      <Header rootClassName="header-root-class-name5"></Header>
      <div
        className="project-page-hero"
        style={{ backgroundImage: `url(${projectPicture})` }}
      >
        <h1 className="project-page-text">
          Project <br /> {projectTitle}
        </h1>
      </div>
      <div className="intro-container">
        <div className="intro-target-container">
          <div className="intro-target-title">We are helping</div>
          <div className="intro-target-text">{projectTarget}</div>
        </div>
        <div className="intro-problem-container">
          <div className="intro-problem-text">"{projectProblem}"</div>
        </div>
      </div>
      <div className="desc-container">
        <div className="desc-title">About us:</div>
        <div classNAme="desc-text">{projectDescription}</div>
      </div>
      <div className="awards-container">
        <div className="awards-title">Awards</div>
        <div className="awards-list">
          {projectAwards.map((award, index) => (
            <AwardItem award={award} key={index} />
          ))}
        </div>
      </div>
      <div className="partnership-container">
        <div className="partnership-title">Our partners</div>
        <div className="partnership-list">
          {projectPartnership.map((partner, index) => (
            <PartnerItem partner={partner} key={index} />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

function AwardItem({ award }) {
  return <div className="awards-item">{award}</div>;
}

function PartnerItem({ partner }) {
  return <div className="partnership-item">{partner}</div>;
}
