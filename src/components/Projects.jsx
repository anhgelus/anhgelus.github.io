import { GlassCard } from "./Card.jsx";
import { For, Show } from "solid-js";
import Title from "./Title.jsx";
import Button from "./Button.jsx";

function Projects() {
  return (
    <>
      <Title title={"Projects"} />
      <div class="mx-16 flex flex-col gap-16">
        <Project
          title={"Les Copaings Bot"}
          years={"2023-Now"}
          description={
            "Les Copaings Bot is a Discord bot made for my private Discord called Les Copaings.\n" +
            "It has a unique XP system which gives XP according to the quality of the length and the number of " +
            "character. It also gives XP when the user is connected in a vocal channel. If the member is inactive, he loses XP."
          }
          technos={
            "Les Copaings Bot was made in Go 1.22 and uses lot of recent features including the new slices package, " +
            "math/rand/v2 and log/slog.\n" +
            "It works with Gokord, my own Go library helping to create quickly Discord bots."
          }
          repository={"anhgelus/les-copaings-bot"}
          link={"https://youtube.com/watch?v=cRcLyhhcab8"}
          linkContent={"Presentation"}
        />
        <Project
          right
          title={"Gokord"}
          years={"2024-Now"}
          description={
            "Gokord is a library helping to create quickly Discord bots.\n" +
            "It provides useful tools like a command manager, a status manager or an ORM for PostgreSQL and for" +
            " Redis\n" +
            "It also has a unique feature updating, deleting and creating automatically slash commands after an update."
          }
          technos={
            "Gokord was made in Go 1.22 and uses lot of recent features including the new slices package, " +
            "math/rand/v2 and log/slog.\n" +
            "It uses discordgo, GORM, go-redis and pelletier/go-toml."
          }
          repository={"anhgelus/gokord"}
        />
        <Project
          title={"license-generator"}
          years={"2023-2024"}
          description={
            "license-generator is a simple CLI application generating the LICENSE file.\n" +
            "It supports multiple license types like GPL, MIT or MPL.\n" +
            "It is possible to use custom config with a simple config file."
          }
          technos={
            "license-generator was made in Go 1.19 but will be updated to Go 1.22 to use recent features"
          }
          repository={"anhgelus/license-generator"}
        />
        <Project
          right
          title={"RSS Goes Social"}
          years={"2024"}
          description={
            "RSS Goes Social is a simple application fetching RSS feeds and reposting them on the Fediverse through" +
            "a Mastodon-like API.\n" +
            "It has a utility helping to register the application on a Mastodon-like server."
          }
          technos={
            "RSS Goes Social is another Go 1.22 application.\n" +
            "It is published on the Docker hub (anhgelus/rss-goes-social) to simplify the deployment of the " +
            "application.\n" +
            "It uses mmcdole/gofeed, pelletier/go-toml and go-redis."
          }
          repository={"anhgelus/rss-goes-social"}
        />
        <Project
          title={"Plein Son"}
          years={"2023"}
          description={
            "pleinson.com is the website of the agency Plein Son specialized in audio.\n" +
            "It is a showcase website presenting their expertise."
          }
          technos={"It was made with vanilla TS, Vite and SCSS."}
          link={"https://pleinson.com"}
          linkContent={"Website"}
        />
        <Project
          right
          title={"Arnaud Valentin"}
          years={"2022"}
          description={
            "arnaudvalentin.com is the website of the professional voice actor with the same name.\n" +
            "It is a showcase website presenting his works and his skills."
          }
          technos={"It was made with vanilla TS, Bulma and SASS in 6 hours."}
          link={"https://arnaudvalentin.com"}
          linkContent={"Website"}
        />
        <Project
          title={"Nothis Apohcalyps"}
          years={"2021-Now"}
          description={
            "Nohtis Apohcalyps is a Minecraft modpack turning the game into a zombie apocalypse.\n" +
            "It changes completely the generation, it modifies the spawn of mobs and gives guns.\n" +
            "The modpack is available on Modrinth."
          }
          technos={
            "It was made with packwiz, a CLI application.\n" +
            "It uses KubeJS to modify the craft."
          }
          repository={"anhgelus/nohtis-apohcalyps-modpack"}
          link={"https://modrinth.com/modpack/nohtis-apohcalyps"}
          linkContent={"Modrinth"}
        />
      </div>
      <div className="mx-auto mt-16 block text-center">
        <h3 class={"text-2xl"}>The complete list of my projects is on</h3>
        <div class="flex justify-center">
          <Button href={"https://github.com/anhgelus"} content={"GitHub"} />
        </div>
      </div>
    </>
  );
}

function Project(props) {
  const lines = props.technos.split("\n");
  let repoButton = "";
  if (props.right) {
    return (
      <>
        <div className="grid grid-cols-2 content-center items-center justify-center gap-16">
          <div className="my-4 flex flex-col gap-2">
            <For each={lines}>{(l) => <p>{l}</p>}</For>
            <div className="flex flex-row justify-center gap-8">
              <Show when={props.repository}>
                <Button
                  href={"https://github.com/" + props.repository}
                  content={"GitHub"}
                />
              </Show>
              <Show when={props.link}>
                <Button primary href={props.link} content={props.linkContent} />
              </Show>
            </div>
          </div>
          <div className="h-full w-full bg-[url('https://picsum.photos/850')]">
            <GlassCard
              title={props.title}
              years={props.years}
              content={props.description}
            />
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div class="grid grid-cols-2 content-center items-center justify-center gap-16">
        <div class="h-full w-full bg-[url('https://picsum.photos/800')]">
          <GlassCard
            title={props.title}
            years={props.years}
            content={props.description}
          />
        </div>
        <div className="my-4 flex flex-col gap-2">
          <For each={lines}>{(l) => <p>{l}</p>}</For>
          <div className="flex flex-row justify-center gap-8">
            <Show when={props.link}>
              <Button primary href={props.link} content={props.linkContent} />
            </Show>
            <Show when={props.repository}>
              <Button
                href={"https://github.com/" + props.repository}
                content={"GitHub"}
              />
            </Show>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
