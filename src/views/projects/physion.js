import ProjectLayout from "./projectLayout";

export default function Physion() {
  return (
    <ProjectLayout
      projectTitle={"Physion"}
      projectPicture={require("./images/physion.png")}
      projectTarget={"Individuals affected by drop foot"}
      projectProblem={
        "Providing customized detection and adaptive stimulation individuals, thereby addressing the need for personalized mobility assistance"
      }
      projectDescription={
        "Project Physion focuses on developing a Functional Electrical Stimulation (FES) device with an integrated machine learning based detection system. Focused on addressing drop foot, the system aims to offer real-time feedback and adapts stimulation parameters for improved mobility and independence."
      }
    />
  );
}
