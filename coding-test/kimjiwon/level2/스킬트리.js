function solution(skill, skill_trees) {
  let count = 0;
  let i = 0;
  while (i < skill_trees.length) {
    let skillSeq = skill_trees[i].match(new RegExp(`[${skill}]`, "g"));
    if (skillSeq === null) {
      count++;
      i++;
      continue;
    }
    let changeStr = skillSeq.join("");

    if (skill.includes(changeStr) && changeStr.includes(skill[0])) {
      count++;
    }
    i++;
  }
  return count;
}
