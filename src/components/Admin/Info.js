import React, { useState } from "react";

// icons
import plusIco from "../../assets/images/plus.svg";
import linkedinIco from "../../assets/images/linkedin.png";
import githubIco from "../../assets/images/github.png";
import gmailIco from "../../assets/images/gmail.png";
import whatsappIco from "../../assets/images/whatsapp.png";
import instagramIco from "../../assets/images/instagram.png";
import editIco from "../../assets/images/edit_red.svg";
import confirmIco from "../../assets/images/checkbox_active.svg";

// Components
import InfoProjectList from "./Info_ProjectList";
import InfoTutorialList from "./Info_TutorialList";
import OneField from "./dialog-editInfo/OneField";
import TechnologyAddOrEdit from "./dialog-editInfo/TechnologyAddOrEdit";
import TutorialDialog from "./dialog-editInfo/TutorialDialog";
import ProjectDialog from "./dialog-editInfo/ProjectDialog";

// Redux
import { useSelector, useDispatch } from "react-redux";
import {
  changeCoverLetter,
  changeDegree,
  changeEducationTime,
  changeName,
  changeSkill,
  changeSoftSkills,
  changeUniversity,
} from "./redux/redux-info/infoActions";
import { useEffect } from "react";

const Info = () => {
  const [showOneField, setShowOneField] = useState(false);
  const [showDialogTechnologyAddOrEdit, setShowDialogTechnologyAddOrEdit] =
    useState(false);
  const [showDialogTutorial, setShowDialogTutorial] = useState(false);
  const [showDialogProject, setShowDialogProject] = useState(false);
  const [resumeFile, setResumeFile] = useState();
  const [inputSoftSkills, setInputSoftSkills] = useState();
  const [linksInputFocused, setLinksInputFocused] = useState("");

  // Redux Data
  const reduxData = useSelector((state) => state.admin_infoReducer);
  const dispatch = useDispatch();
  const {
    name,
    position,
    coverLetter,
    university,
    degree,
    educationTime,
    softSkills,
    links,
  } = {
    name: reduxData.name,
    position: reduxData.skill,
    coverLetter: reduxData.coverLetter,
    university: reduxData.university,
    degree: reduxData.degree,
    educationTime: reduxData.educationTime,
    softSkills: reduxData.softSkills,
    links: reduxData.links,
  };
  const technologies = reduxData.listOfTechnologies;
  const projects = reduxData.listOfProjects;
  const tutorials = reduxData.listOfTutorials;

  useEffect(() => {
    console.log(linksInputFocused);
  }, [linksInputFocused]);

  const editHandler = (e) => {
    setShowOneField(e.target.name);
  };

  const getEditableInput = () => {
    switch (showOneField) {
      case "title":
        return { dispatch: useDispatch, action: changeName };
      case "position":
        return { dispatch: useDispatch, action: changeSkill };
      case "coverLetter":
        return { dispatch: useDispatch, action: changeCoverLetter };
      case "university":
        return { dispatch: useDispatch, action: changeUniversity };
      case "degree":
        return { dispatch: useDispatch, action: changeDegree };
      case "educationTime":
        return { dispatch: useDispatch, action: changeEducationTime };
      default:
        break;
    }
  };

  const openTechnologyAddOrEditDialog = (name, data) => {
    setShowDialogTechnologyAddOrEdit(true);
  };

  const inputFocusHandler = (inputName) => {
    let result;
    linksInputFocused === inputName
      ? (result = `${styleSocialContainer} w-64`)
      : (result = styleSocialContainer);
    return result;
  };

  return (
    <div className="mwrapper py-20">
      {/* Main Info */}
      <div className="w-[90%] mx-auto fcenter flex-col mb-10">
        {showOneField && (
          <OneField
            data={{
              setShowOneField: setShowOneField,
              changeValue: getEditableInput(),
            }}
          />
        )}
        {showDialogTechnologyAddOrEdit && (
          <TechnologyAddOrEdit
            data={{ setShowDialog: setShowDialogTechnologyAddOrEdit }}
          />
        )}
        {showDialogTutorial && (
          <TutorialDialog data={{ setShowDialog: setShowDialogTutorial }} />
        )}
        {showDialogProject && (
          <ProjectDialog data={{ setShowDialog: setShowDialogProject }} />
        )}
        <span className="bg-gray-400 px-8 py-1 rounded-t-xl font-bf text-sm text-white">
          اطلاعات کلی
        </span>
        <div className="w-full fcenter flex-col gap-12 p-6 py-10 bg-gray-100 rounded-lg shadow-lg shadow-gray-300">
          {/* Name, Position and Resume */}
          <div className="w-full fcenter justify-between flex-col gap-8 md:flex-row ">
            <div className="flex flex-col items-start flex-grow">
              <div className="fcenter gap-1">
                <span className="font-bf text-sm text-gray-600">{name}</span>
                <img
                  name="title"
                  onClick={editHandler}
                  className="w-4 mhover"
                  src={editIco}
                />
              </div>
              <div className="fcenter gap-1">
                <span className="text-xs text-gray-500">{position}</span>
                <img
                  name="position"
                  onClick={editHandler}
                  className="w-4 mhover"
                  src={editIco}
                />
              </div>
            </div>
            <div className="fcenter justify-between px-4 py-2 gap-2 bg-white shadow-lg shadow-gray-300 rounded-lg ">
              <label forhtml="choose-resume" className="mhover">
                <span className="inline-block w-max text-center primary-btn text-xs px-4 ">
                  انتخاب فایل رزومه
                </span>
                <input
                  id="choose-resume"
                  type="file"
                  className="hidden"
                  accept="application/pdf , .docx , .doc"
                  onChange={(e) => {
                    setResumeFile(e.target.files[0]);
                  }}
                />
              </label>
              {resumeFile && (
                <span className="text-xs text-gray-400">{resumeFile.name}</span>
              )}
            </div>
          </div>
          {/* Cover Letter */}
          <p className="text-sm text-justify leading-5 text-gray-500">
            {coverLetter}
            <img
              name="coverLetter"
              onClick={editHandler}
              className="w-4 mhover inline"
              src={editIco}
            />
          </p>
          {/* Technologies */}
          <div className="fcenter justify-start flex-wrap gap-4 w-full">
            {technologies.map((e) => {
              return (
                <div
                  onClick={(event) =>
                    openTechnologyAddOrEditDialog("tech-edit", e)
                  }
                  key={e.name}
                  className="w-16 h-16 rounded-full bg-white shadow-lg mhover "
                >
                  <img src={e.link} />
                </div>
              );
            })}
            <div
              onClick={(event) => openTechnologyAddOrEditDialog("tech-add", "")}
              className="w-16 h-16 fcenter rounded-full bg-purple-500 shadow-lg mhover "
            >
              <img className="w-2/3" src={plusIco} />
            </div>
          </div>
          {/* University and Soft Skills */}
          <div className="w-full fcenter justify-between gap-4 flex-wrap">
            <div className="flex flex-col items-start gap-3 flex-grow">
              <div className="fcenter gap-1">
                <span className="text-xs text-gray-500">
                  {`دانشگاه : `}
                  <span className="font-bf text-sm text-gray-600">
                    {university}
                  </span>
                </span>
                <img
                  onClick={editHandler}
                  name="university"
                  className="w-4 mhover"
                  src={editIco}
                />
              </div>
              <div className="fcenter gap-1">
                <span className="text-xs text-gray-500">
                  {`مدرک : `}
                  <span className="font-bf text-sm text-gray-600">
                    {degree}
                  </span>
                </span>
                <img
                  onClick={editHandler}
                  name="degree"
                  className="w-4 mhover"
                  src={editIco}
                />
              </div>
              <div className="fcenter gap-1">
                <span className="text-xs text-gray-500">
                  {`سال تحصیل : `}
                  <span className="font-bf text-sm text-gray-600">
                    {educationTime}
                  </span>
                </span>
                <img
                  onClick={editHandler}
                  name="educationTime"
                  className="w-4 mhover"
                  src={editIco}
                />
              </div>
            </div>
            <div className="relative w-3/5 h-32 flex-grow bg-gray-200 shadow-md">
              <textarea
                className="minput h-full bg-transparent resize-none"
                placeholder="مهارت های نرم : با - از هم جدا کنید"
                value={inputSoftSkills}
                onChange={(e) => {
                  setInputSoftSkills(e.target.value);
                }}
              />
              {inputSoftSkills && (
                <img
                  className={`w-6 absolute bottom-2 left-2 cursor-pointer hover:scale-75 transition-all ${circleAnim}`}
                  src={confirmIco}
                  onClick={() => dispatch(changeSoftSkills(inputSoftSkills))}
                />
              )}
            </div>
          </div>
          {/* Social */}
          <div className="w-full fcenter mt-8 gap-2 gap-y-14 flex-wrap">
            <div className={inputFocusHandler("linkedin")}>
              <div className="w-14 h-14 fcenter absolute top-[-2rem]   bg-gray-500 rounded-full">
                <img src={linkedinIco} className="w-3/5" />
              </div>
              <div className="w-full pt-5">
                <input
                  type="text"
                  placeholder="https://exapmle.com"
                  className={styleSocialInput}
                  onFocus={() => {
                    setLinksInputFocused("linkedin");
                  }}
                  onBlur={() => setLinksInputFocused("")}
                />
                {linksInputFocused === "linkedin" && (
                  <img
                    className={`w-5 absolute bottom-5 right-5 cursor-pointer hover:scale-75 transition-all ${circleAnim}`}
                    src={confirmIco}
                    onClick={() => dispatch(changeSoftSkills(inputSoftSkills))}
                  />
                )}
              </div>
            </div>
            <div className={inputFocusHandler("github")}>
              <div className="w-14 h-14 fcenter absolute top-[-2rem]   bg-gray-500 rounded-full">
                <img src={githubIco} className="w-3/5" />
              </div>
              <div className="w-full pt-5">
                <input
                  type="text"
                  placeholder="https://exapmle.com"
                  className={styleSocialInput}
                  onFocus={() => {
                    setLinksInputFocused("github");
                  }}
                  onBlur={() => setLinksInputFocused("")}
                />
                {linksInputFocused === "github" && (
                  <img
                    className={`w-5 absolute bottom-5 right-5 cursor-pointer hover:scale-75 transition-all ${circleAnim}`}
                    src={confirmIco}
                    onClick={() => dispatch(changeSoftSkills(inputSoftSkills))}
                  />
                )}
              </div>
            </div>
            <div className={inputFocusHandler("gmail")}>
              <div className="w-14 h-14 fcenter absolute top-[-2rem]   bg-gray-500 rounded-full">
                <img src={gmailIco} className="w-3/5" />
              </div>
              <div className="w-full pt-5">
                <input
                  type="text"
                  placeholder="https://exapmle.com"
                  className={styleSocialInput}
                  onFocus={() => {
                    setLinksInputFocused("gmail");
                  }}
                  onBlur={() => setLinksInputFocused("")}
                />
                {linksInputFocused === "gmail" && (
                  <img
                    className={`w-5 absolute bottom-5 right-5 cursor-pointer hover:scale-75 transition-all ${circleAnim}`}
                    src={confirmIco}
                    onClick={() => dispatch(changeSoftSkills(inputSoftSkills))}
                  />
                )}
              </div>
            </div>
            <div className={inputFocusHandler("whatsapp")}>
              <div className="w-14 h-14 fcenter absolute top-[-2rem]   bg-gray-500 rounded-full">
                <img src={whatsappIco} className="w-3/5" />
              </div>
              <div className="w-full pt-5">
                <input
                  type="text"
                  placeholder="https://exapmle.com"
                  className={styleSocialInput}
                  onFocus={() => {
                    setLinksInputFocused("whatsapp");
                  }}
                  onBlur={() => setLinksInputFocused("")}
                />
                {linksInputFocused === "whatsapp" && (
                  <img
                    className={`w-5 absolute bottom-5 right-5 cursor-pointer hover:scale-75 transition-all ${circleAnim}`}
                    src={confirmIco}
                    onClick={() => dispatch(changeSoftSkills(inputSoftSkills))}
                  />
                )}
              </div>
            </div>
            <div className={inputFocusHandler("instagram")}>
              <div className="w-14 h-14 fcenter absolute top-[-2rem]   bg-gray-500 rounded-full">
                <img src={instagramIco} className="w-3/5" />
              </div>
              <div className="w-full pt-5">
                <input
                  type="text"
                  placeholder="https://exapmle.com"
                  className={styleSocialInput}
                  onFocus={() => {
                    setLinksInputFocused("instagram");
                  }}
                  onBlur={() => setLinksInputFocused("")}
                />
                {linksInputFocused === "instagram" && (
                  <img
                    className={`w-5 absolute bottom-5 right-5 cursor-pointer hover:scale-75 transition-all ${circleAnim}`}
                    src={confirmIco}
                    onClick={() => dispatch(changeSoftSkills(inputSoftSkills))}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="w-[90%] mx-auto fcenter flex-col mb-10">
        <span className="bg-gray-400 px-8 py-1 rounded-t-xl font-bf text-sm text-white">
          لیست پروژه ها
        </span>
        <div className="w-full fcenter flex-col gap-12 p-6 py-10 bg-gray-100 rounded-lg shadow-lg shadow-gray-300">
          <div className="fcenter gap-4 flex-wrap">
            {projects.map((e) => {
              return <InfoProjectList key={e.id} data={e} />;
            })}
            <div className="basis-60 flex-grow fcenter flex-col h-52 mhover bg-gray-300 gap-4 p-4  rounded-lg">
              <img className="w-10 opacity-60" src={plusIco} />
              <p className="text-sm text-gray-500">مشاهده پروژه های بیشتر</p>
            </div>
          </div>
          <button
            onClick={() => setShowDialogProject(true)}
            className="bg-gray-200 px-20 py-4 rounded-lg font-bf text-sm text-gray-500 mhover"
          >
            اضافه کردن پروژه جدید
          </button>
        </div>
      </div>

      {/* Tutorial List */}
      <div className="w-[90%] mx-auto fcenter flex-col mb-10">
        <span className="bg-gray-400 px-8 py-1 rounded-t-xl font-bf text-sm text-white">
          لیست آموزش ها
        </span>
        <div className="w-full fcenter flex-col gap-12 p-6 py-10 bg-gray-100 rounded-lg shadow-lg shadow-gray-300">
          <div className="fcenter gap-4 flex-wrap">
            {tutorials.map((e) => {
              return <InfoTutorialList key={e.id} data={e} />;
            })}
            <div className="basis-60 flex-grow fcenter flex-col h-52 mhover bg-gray-300 gap-4 p-4  rounded-lg">
              <img className="w-10 opacity-60" src={plusIco} />
              <p className="text-sm text-gray-500">مشاهده آموزش های بیشتر</p>
            </div>
          </div>
          <button
            onClick={() => setShowDialogTutorial(true)}
            className="bg-gray-200 px-20 py-4 rounded-lg font-bf text-sm text-gray-500 mhover"
          >
            اضافه کردن آموزش جدید
          </button>
        </div>
      </div>

      <button className="primary-btn mhover px-14">ذخیره اطلاعات</button>
    </div>
  );
};

export default Info;

// Custom Tailwind Css
const circleAnim =
  "active:bg-green-600 rounded-full active:animate-[ping_0.2s_ease-in-out]";
const styleSocialContainer =
  "bg-white relative fcenter p-3 rounded-lg shadow-md shadow-gray-300 flex-col relative duration-400";
const styleSocialInput =
  "minput w-full rounded-full text-left text-xs placeholder:text-gray-300 duration-400";
