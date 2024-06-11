import ProjectLayout from "./projectLayout";

export default function Medipal() {
  const projectPartnership = [
    "Clinical Collaborator: Singapore Cancer Society",
    "Technical Collaborator: KTH Royal Institute of Technology, Sweden",
  ];

  const projectAwards = [
    "N-House Pitch Night Toronto 2023 - Winner, awarded $10K grant",
  ];

  return (
    <ProjectLayout
      projectTitle={"Medipal"}
      projectPicture={require("./images/medipal.jpg")}
      projectTarget={"Breast cancer patients"}
      projectProblem={
        "How can we develop a holistic platform to empower cancer patients with a personalised and reliable self-management tool, while equipping clinicians with tools to deliver person-centric care efficiently?"
      }
      projectDescription={
        "MediPal is a healthtech startup classed under NUS MEDTECH and NUS HANGAR incubator. MediPal aims to create digital-based solutions to empower cancer patients, motivate health behaviours, and assist VWOs such as the Singapore Cancer Society (SCS) by implementing technological solutions to aid in the rehabilitation of patients and increase the effectiveness and efficiency within organisations. MediPal is currently co-creating the prototype with SCS and has successfully released the alpha version."
      }
      projectAwards={projectAwards}
      projectPartnership={projectPartnership}
    />
  );
}
