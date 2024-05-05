import Console from "./Console.jsx";
import Title from "./Title.jsx";

function Skills(props) {
  let content = [
    "git clone git@github.com/anhgelus/anhgelus.github.io -> Cloned successfully in anhgelus.github.io",
    "cd anhgelus.github.io && pwd -> /home/anhgelus/lab/anhgelus.github.io",
    "cat other_skills.md -> My other skills are:\n- Git\n- Vite\n- SASS\n- Svelte\n- Solid" +
      "\n- Node\n- Lit\n- Bun",
  ];
  return (
    <>
      <Title title={"Skills"} />
      <div class="grid grid-cols-3 content-center items-center justify-center gap-16 text-center">
        <Skill name="HTML/CSS" level="5" />
        <Skill name="Go" level="4" />
        <Skill name="SQL" level="3" />
        <Skill name="Python" level="3" />
        <Skill name="JS/TS" level="4" />
        <Skill name="Docker" level="4" />
        <Skill name="Linux" level="3" />
        <Skill name="Java/Kotlin" level="4" />
        <Skill name="PHP" level="3" />
      </div>
      <div class="mx-auto my-20 h-1 w-3/5 bg-slate-900"></div>
      <div class="mx-auto w-2/3 pb-16">
        <Console content={content.join("|")} title={"Console"} />
      </div>
    </>
  );
}

function Skill(props) {
  // w-1/5 w-2/5 w-3/5 w-4/5
  let color = "";
  let size = `w-${props.level}/5`;
  let lvl = Number(props.level);
  if (lvl < 3) {
    color = "bg-red-900";
  } else if (lvl < 4) {
    color = "bg-amber-500";
  } else {
    color = "bg-emerald-400";
  }
  if (lvl === 5) {
    size = `w-full`;
  }
  return (
    <>
      <div class="m-auto flex w-3/5 flex-col content-center items-center justify-center gap-2">
        <p class="text-center text-xl font-bold">{props.name}</p>
        <div class="w-4/5">
          <div class="border-2 border-black bg-slate-900">
            <div className={`bar block h-2 ${size} ${color}`}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
