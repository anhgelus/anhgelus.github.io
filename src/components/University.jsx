import { For } from "solid-js";
import Title from "./Title.jsx";
import { GlassCard } from "./Card.jsx";

function UniversityCareer() {
  return (
    <>
      <Title title={"University Career"} />
      <div class="mx-16 grid grid-cols-2 content-center items-center justify-center gap-16">
        <GlassCard
          title={"Lycée Louise-Michel"}
          years={"2020-2023"}
          content={
            "After my middle school, I entered in seconde at Louise-Michel, a high school in Gisors.\n" +
            "I decided to follow mathematics, physics, chemistry and informatics courses during my première.\n" +
            "During my terminale, I followed mathematics, physics and chemistry courses. I also had an additional " +
            "mathematics course to go further.\n" +
            "I passed my BAC with honors."
          }
        />
        <GlassCard
          title={"CPES Sciences Henri-IV / PSL"}
          years={"2023-Now"}
          content={
            "Then, I entered in the CPES Sciences of Henri-IV and PSL.\n" +
            "Lycée Henri-IV is one of the most prestigious high school in France with Lycée Louis-le-Grand, and PSL " +
            "is the best european university.\n" +
            "This course leads to prestigious multiple bachelors' degree in science.\n" +
            "The formation is dispensed in Lycée Henri-IV, MINES-PSL, Dauphine-PSL and ENS-PSL."
          }
        />
      </div>
    </>
  );
}

export default UniversityCareer;
