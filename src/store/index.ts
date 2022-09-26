import type Project from '@/dataTemplates/project';
import { defineStore } from 'pinia';

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore('main', {
  // other options...
  state: () => ({
    // all these properties will have their type inferred automatically
    highscore: 0,
    page: 'home',
    combo: 0,
    onlinePage: 'lobby',
    projectId: "",
    projects: [] as Project[],
  }),
  getters: {
    getPage(state): string {
        return state.page;
    },
    getHighscore(state): number {
        return state.highscore;
    },
    getCombo(state): number {
        return state.combo;
    },
    getOnlinePage(state): String {
        return state.onlinePage;
    },
    getProjects(state){
        return state.projects;
    },
    getFeatured(state){
        return state.projects.filter(proj => proj.isFeature === true );
    },
    getProject(state){
      return state.projects.find(proj => proj.id === state.projectId)
    }
    
  },
  actions: {
    updateOnlinePage(page: string) {
        this.onlinePage = page;
    },
    updateHighScore(score: number) {
      this.highscore = score;
      localStorage.setItem('highscore', score.toString());
    },
    updatePage(page: string) {
      this.page = page;
    },
    updateCombo(combo: number) {
      this.combo = combo;
      localStorage.setItem('combo', combo.toString());
    },
    addProject(project: Project){
      this.projects.push(project);
    },
    updateProjectId(id: string){
      this.projectId = id;
    }
  },
});