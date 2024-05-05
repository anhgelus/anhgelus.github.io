import { For } from "solid-js";

function Console(props) {
  let lines = props.content.split("|");
  return (
    <>
      <div className="h-full w-full overflow-hidden rounded-xl bg-slate-800 p-4">
        <h3 className="mb-4 text-center text-2xl font-bold">{props.title}</h3>
        <div class="rounded-md bg-slate-900 p-4">
          <For each={lines}>{(l) => <Line content={l} />}</For>
        </div>
      </div>
    </>
  );
}

function Line(props) {
  let d = props.content.split("->");
  let resp = d[1].split("\n");
  return (
    <>
      <div class="mb-2 font-mono">
        <p>$ {d[0]}</p>
        <For each={resp}>{(l) => <p>{l}</p>}</For>
      </div>
    </>
  );
}

export default Console;
