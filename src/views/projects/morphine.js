import ProjectLayout from "./projectLayout";

export default function Morphine() {
  const projectAwards = [
    "Gold from Biomedical Engineering Society 16th Scientific Meeting Design Challenge",
    "Merit Award from CDE Innovation & Research Award (IRA) 2023",
    "Finalist in Medical Grand Challenge 2023",
  ];

  return (
    <ProjectLayout
      projectTitle={"Morphine"}
      projectPicture={require("./images/morphine.png")}
      projectTarget={"People with mobility impairments"}
      projectProblem={
        "Despite the availability of technology in existing devices like the Apple Watch, there remains a significant gap in ensuring the safety and independence of individuals at risk of falling or getting lost due to cognitive impairments. Current solutions often fall short in user interaction simplicity and redundancy, which can critically affect the device's effectiveness in emergency situations."
      }
      projectDescription={
        "Project Morphine is comprehensive solution designed to enhance the safety and independence of individuals prone to falls or with conditions that may lead to disorientation, such as dementia. Morphine offers a simplified yet robust system that facilitates real-time monitoring, fall detection, and immediate alerting both to the wearer and their caretakers. Through its wearable device, cloud data management, and mobile application, our solution strives to empower users with the independence to travel and engage in daily activities without fear, knowing that assistance is always within reach should they encounter difficulties."
      }
      projectAwards={projectAwards}
    />
  );
}
