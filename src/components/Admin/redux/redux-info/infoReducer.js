const initState = {
  name: "",
  skills: "",
  resume: "",
  coverLetter: "",
  listOfTechnologies: [],
  university: "",
  degree: "",
  educationTime: "",
  softSkills: "",
  links: [],
  listOfProject: [],
  listOfTutorial: [],
};

const infoReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      // do sth
      break;
    case "CHANGE_SKILL":
      // do sth
      break;
    case "CHANGE_RESUME":
      // do sth
      break;
    case "CHANGE_COVER_LETTER":
      // do sth
      break;
    case "GET_LIST_OF_TECHNOLOGIES":
      // do sth
      break;
    case "ADD_ITEM_TO_LIST_OF_TECHNOLOGIES":
      // do sth
      break;
    case "CHANGE_UNIVERSITY":
      // do sth
      break;
    case "CHANGE_DEGREE":
      // do sth
      break;
    case "CHANGE_EDUCATION_TIME":
      // do sth
      break;
    case "CHANGE_SOFT_SKILLS":
      // do sth
      break;
    case "CHANGE_LINKS":
      // do sth
      break;
    case "GET_LIST_OF_PROJECT":
      // do sth
      break;
    case "ADD_ITEM_TO_LIST_OF_PROJECT":
      // do sth
      break;
    case "GET_LIST_OF_TUTORIAL":
      // do sth
      break;
    case "ADD_ITEM_TO_LIST_OF_TUTORIAL":
      // do sth
      break;

    default:
      return state;
  }
};

export default infoReducer;
