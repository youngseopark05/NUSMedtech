import "@/views/projects/projectLayout.css";

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
    <div class="project-container">
      <div class="title-container">{projectTitle}</div>
      <div class="picture-container">
        <img src={projectPicture} alt={`Project picture for ${projectTitle}`} />
      </div>
      <div class="intro-container">
        <div class="intro-target-audience">{projectTarget}</div>
        <div class="intro-problem">{projectProblem}</div>
      </div>
      <div class="desc-container">{projectDescription}</div>
      <div class="awards-container">{projectAwards}</div>
      <div class="partnership-container">{projectPartnership}</div>
    </div>
  );
}
