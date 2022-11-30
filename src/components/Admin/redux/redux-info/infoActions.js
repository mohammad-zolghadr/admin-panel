const changeName = (newName) => {
  return { type: "CHANGE_NAME", payload: newName };
};
const changeSkill = (newSkill) => {
  return { type: "CHANGE_SKILL", payload: newSkill };
};
const changeResume = (newResume) => {
  return { type: "CHANGE_RESUME", payload: newResume };
};
const changeCoverLetter = (newCoverLetter) => {
  return { type: "CHANGE_COVER_LETTER", payload: newCoverLetter };
};
const getListOfTechnologies = () => {
  return { type: "GET_LIST_OF_TECHNOLOGIES" };
};
const addItemToListOfTechnologies = (newTechnology) => {
  return { type: "ADD_ITEM_TO_LIST_OF_TECHNOLOGIES", payload: newTechnology };
};

const changeUniversity = (newUniversity) => {
  return { type: "CHANGE_UNIVERSITY", payload: newUniversity };
};
const changeDegree = (newDegree) => {
  return { type: "CHANGE_DEGREE", payload: newDegree };
};
const changeEducationTime = (newEducationTime) => {
  return { type: "CHANGE_EDUCATION_TIME", payload: newEducationTime };
};
const changeSoftSkills = (newSoftSkills) => {
  return { type: "CHANGE_SOFT_SKILLS", payload: newSoftSkills };
};
const changeLinks = (newLinks) => {
  return { type: "CHANGE_LINKS", payload: newLinks };
};

const getListOfProject = () => {
  return { type: "GET_LIST_OF_PROJECT" };
};
const addItemToListOfProject = (newListOfProject) => {
  return { type: "ADD_ITEM_TO_LIST_OF_PROJECT", payload: newListOfProject };
};

const getListOfTutorial = () => {
  return { type: "GET_LIST_OF_TUTORIAL" };
};

const addItemToListOfTutorial = (newListOfTutorial) => {
  return { type: "ADD_ITEM_TO_LIST_OF_TUTORIAL", payload: newListOfTutorial };
};

export {
  changeName,
  changeSkill,
  changeResume,
  changeCoverLetter,
  getListOfTechnologies,
  addItemToListOfTechnologies,
  changeUniversity,
  changeDegree,
  changeEducationTime,
  changeSoftSkills,
  changeLinks,
  getListOfProject,
  addItemToListOfProject,
  getListOfTutorial,
  addItemToListOfTutorial,
};