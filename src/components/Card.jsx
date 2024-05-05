import { For } from "solid-js";

export function GlassCard(props) {
  let lines = props.content.split("\n");
  return (
    <>
      <div class="bg-light-glass glass-anim mx-auto block h-full w-full p-4">
        <h3 class="text-center text-3xl">{props.title}</h3>
        <h5 class="text-center text-sm">{props.years}</h5>
        <div class="my-4 flex flex-col gap-2">
          <For each={lines}>{(l) => <p>{l}</p>}</For>
        </div>
      </div>
    </>
  );
}
