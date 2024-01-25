import { client } from "@/sanity/lib/client";
import Team from "../Team";
import { TeamType } from "@/sanity/lib/type";

async function getTeams() {
  const query = `*[_type == "team"]{
        doctorPic,
        name,
        speciality,
        shortNote,
        role,
        designation,
        _id   
      }`;
  const fetchData = await client.fetch(query);
  return fetchData;
}

async function getHeadOfTeam() {
  const query = `*[_type == "head"]{
            dean,
            "caption": dean.caption,
             name,
             description,
             designation
         }[0]`;
  const fetchData = await client.fetch(query);
  return fetchData;
}

export const TeamServer = async () => {
  const teamMember: TeamType[] = await getTeams();
  const head = await getHeadOfTeam();
  
  return <Team teams={teamMember} head={head} />;
};
