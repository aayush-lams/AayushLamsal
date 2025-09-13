import type {WORK} from "@libs/TYPES";

export async function getWorks (tag : string) {
    let workList : WORK[] = [];
  await fetch('data/Works.json')
    .then(response => response.json())
    .then(workJson => {
      workJson
        .filter((work : WORK) => work.tag === tag)
        .map((work : WORK) => {
            workList.push(work);
        })
    })
    return workList;
}
