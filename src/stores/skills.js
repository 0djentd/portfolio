import { defineStore } from "pinia";
import { skills } from "../data.ts";

export const useSkillsStore = defineStore({
  id: "skills",
  state: () => {
    return {
      search_str: "",
      skills: skills,
    };
  },
});
