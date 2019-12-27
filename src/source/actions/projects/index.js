import {
  INPUT_PROJECT_TITLE,
  INPUT_PROJECT_DESCRIPTION,
  CREATE_PROJECT,
  BEFORE_LOAD_PROJECTS,
  LOAD_PROJECTS
} from "./types";
import { createProjectApi, loadProjectsApi } from "../../scripts/api/projects";

export const inputProjectTitle = payload => ({
  type: INPUT_PROJECT_TITLE,
  payload: payload
});

export const inputProjectDescription = payload => ({
  type: INPUT_PROJECT_DESCRIPTION,
  payload: payload
});

export const beforeLoadProjects = () => ({
  type: BEFORE_LOAD_PROJECTS,
  payload: null
});

export const createProject = async (dispatch, data) => {
  const res = await createProjectApi(data);
  dispatch({ type: CREATE_PROJECT, payload: res });
};

export const loadProjects = async dispatch => {
  const res = await loadProjectsApi();
  dispatch({ type: LOAD_PROJECTS, payload: res });
};
