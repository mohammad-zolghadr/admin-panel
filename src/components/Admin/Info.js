import React from "react";

// icons
import plusIco from "../../assets/images/plus.svg";
import linkedinIco from "../../assets/images/linkedin.png";
import githubIco from "../../assets/images/github.png";
import gmailIco from "../../assets/images/gmail.png";
import whatsappIco from "../../assets/images/whatsapp.png";
import instagramIco from "../../assets/images/instagram.png";
import editIco from "../../assets/images/edit_red.svg";

// Components
import InfoProjectList from "./Info_ProjectList";
import InfoTutorialList from "./Info_TutorialList";
import OneField from "./dialog-editInfo/OneField";
import { useState } from "react";

const Info = () => {
  const [showOneField, setShowOneField] = useState(false);
  const [inputTitle, setInputTitle] = useState();
  const [inputPosition, setInputPosition] = useState();
  const [inputCoverLetter, setInputCoverLetter] = useState();
  const [inputUniversity, setInputUniversity] = useState();
  const [inputDegree, setInputDegree] = useState();
  const [inputEducationTime, setInputEducationTime] = useState();
  const {
    name,
    position,
    resumeFile,
    coverLetter,
    university,
    degree,
    educationTime,
    softSkills,
    linkLinkedin,
    linkGithub,
    linkGmail,
    linkWhatsapp,
    linkInstagram,
  } = {
    name: "محمد ذوالقدر",
    position: "توسعه دهنده فرانت اند",
    resumeFile: "",
    coverLetter:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
    university: "سلمان فارسی کازرون",
    degree: "لیسانس",
    educationTime: "مهر 1396 تا خرداد 1401",
    softSkills: "مسئولیت پذیری - مدیریت زمان - مدیریت بحران",
    linkLinkedin: "https://www.linkedin.com/in/mohammad-zolghadr/",
    linkGithub: "https://github.com/mohammad-zolghadr",
    linkGmail: "mohammad.zol9978@gmail.com",
    linkWhatsapp: "https://wa.me/+989164538713",
    linkInstagram: "https://instagram.com/mozo.plus",
  };
  const technologies = [
    {
      name: "HTML",
      tech: "HTML 5 - Semantic Tags",
      link: "",
    },
    {
      name: "CSS",
      tech: "CSS 3",
      link: "",
    },
    {
      name: "Javascript",
      tech: "ES6",
      link: "",
    },
    {
      name: "React.js",
      tech: "React Hooks - React Router (SPA) - Redux - StyledComponents - Axios - REST",
      link: "",
    },
    {
      name: "SASS",
      tech: "SCSS",
      link: "",
    },
    {
      name: "Tailwind",
      tech: "Tailwind css V3.2.4",
      link: "",
    },
    {
      name: "Figma",
      tech: "UI/UX Design",
      link: "",
    },
    {
      name: "Github",
      tech: "github",
      link: "",
    },
  ];
  const projects = [
    {
      id: 1,
      title: "پنل ادمین با تیلویند",
      isMain: true,
      description:
        "این پنل ادمین به صورت فول استک با React.js و تیلویند ساخته شده است",
      technologies:
        "React.js - Node.js - Redux - React Router DOM (SPA) - Local Storage - Tailwindcss - SASS - Axios - Figma",
      link: "https://github.com/mohammad-zolghadr/admin-panel",
    },
    {
      id: 2,
      title: "پنل ادمین با تیلویند",
      isMain: true,
      description:
        "این پنل ادمین به صورت فول استک با React.js و تیلویند ساخته شده است",
      technologies:
        "React.js - Node.js - Redux - React Router DOM (SPA) - Local Storage - Tailwindcss - SASS - Axios - Figma",
      link: "https://github.com/mohammad-zolghadr/admin-panel",
    },
    {
      id: 3,
      title: "سومین پروژه تستی من",
      isMain: false,
      description:
        "این پنل ادمین به صورت فول استک با React.js و تیلویند ساخته شده است",
      technologies:
        "React.js - Node.js - Redux - React Router DOM (SPA) - Local Storage - Tailwindcss - SASS - Axios - Figma",
      link: "https://github.com/mohammad-zolghadr/admin-panel",
    },
    {
      id: 4,
      title: "پنل ادمین با تیلویند",
      isMain: true,
      description:
        "این پنل ادمین به صورت فول استک با React.js و تیلویند ساخته شده است",
      technologies:
        "React.js - Node.js - Redux - React Router DOM (SPA) - Local Storage - Tailwindcss - SASS - Axios - Figma",
      link: "https://github.com/mohammad-zolghadr/admin-panel",
    },
    {
      id: 5,
      title: "پروژه برای موسسه خیریه",
      isMain: false,
      description:
        "پروژه ای کاربردی با دیزاین شکیل که با فیگما طراحی شده است و با React.js پیاده سازی شده است",
      technologies:
        "React.js - Node.js - Redux - React Router DOM (SPA) - Local Storage - Tailwindcss - SASS - Axios - Figma",
      link: "https://github.com/mohammad-zolghadr/admin-panel",
    },
  ];
  const tutorials = [
    {
      id: 1,
      title: "آموزش ارتباط با API در React.js",
      time: "5 ساعت",
      platform: "فرادرس",
      imageLink: "",
      isMain: true,
      description:
        "در این آموزش و با استفاده از پروتکل HTTP ما سعی کردیم که یک آموزش کامل از نحوه ارتباط با API ها با معماری REST در محیط React.js با استفاده از fetch و پکیج axios تهیه کنیم تا شما عزیزان بتوانید با ارتباط برقرار کردن با API ها، وبسایت های داینامیک و بهتری را بسازید. پیش نیاز این آموزش، آشنایی حداقلی با HTML و CSS و Javascript و React.js است. البته که اگر این موارد را خیلی ابتدایی هم بلد باشید کفایت میکند چون در این آموزش ما سعی کرده ایم که مباحث را از پایه ای ترین شکل ممکن آموزش دهیم.",
      link: "https://github.com/mohammad-zolghadr/admin-panel",
    },
    {
      id: 2,
      title: "آموزش ارتباط با API در React.js",
      time: "5 ساعت",
      platform: "فرادرس",
      imageLink: "",
      isMain: true,
      description:
        "در این آموزش و با استفاده از پروتکل HTTP ما سعی کردیم که یک آموزش کامل از نحوه ارتباط با API ها با معماری REST در محیط React.js با استفاده از fetch و پکیج axios تهیه کنیم تا شما عزیزان بتوانید با ارتباط برقرار کردن با API ها، وبسایت های داینامیک و بهتری را بسازید. پیش نیاز این آموزش، آشنایی حداقلی با HTML و CSS و Javascript و React.js است. البته که اگر این موارد را خیلی ابتدایی هم بلد باشید کفایت میکند چون در این آموزش ما سعی کرده ایم که مباحث را از پایه ای ترین شکل ممکن آموزش دهیم.",
      link: "https://github.com/mohammad-zolghadr/admin-panel",
    },
    {
      id: 3,
      title: "آموزش ارتباط با API در React.js",
      time: "5 ساعت",
      platform: "فرادرس",
      imageLink: "",
      isMain: true,
      description:
        "در این آموزش و با استفاده از پروتکل HTTP ما سعی کردیم که یک آموزش کامل از نحوه ارتباط با API ها با معماری REST در محیط React.js با استفاده از fetch و پکیج axios تهیه کنیم تا شما عزیزان بتوانید با ارتباط برقرار کردن با API ها، وبسایت های داینامیک و بهتری را بسازید. پیش نیاز این آموزش، آشنایی حداقلی با HTML و CSS و Javascript و React.js است. البته که اگر این موارد را خیلی ابتدایی هم بلد باشید کفایت میکند چون در این آموزش ما سعی کرده ایم که مباحث را از پایه ای ترین شکل ممکن آموزش دهیم.",
      link: "https://github.com/mohammad-zolghadr/admin-panel",
    },
    {
      id: 4,
      title: "آموزش ارتباط با API در React.js",
      time: "5 ساعت",
      platform: "فرادرس",
      imageLink: "",
      isMain: true,
      description:
        "در این آموزش و با استفاده از پروتکل HTTP ما سعی کردیم که یک آموزش کامل از نحوه ارتباط با API ها با معماری REST در محیط React.js با استفاده از fetch و پکیج axios تهیه کنیم تا شما عزیزان بتوانید با ارتباط برقرار کردن با API ها، وبسایت های داینامیک و بهتری را بسازید. پیش نیاز این آموزش، آشنایی حداقلی با HTML و CSS و Javascript و React.js است. البته که اگر این موارد را خیلی ابتدایی هم بلد باشید کفایت میکند چون در این آموزش ما سعی کرده ایم که مباحث را از پایه ای ترین شکل ممکن آموزش دهیم.",
      link: "https://github.com/mohammad-zolghadr/admin-panel",
    },
    {
      id: 5,
      title: "آموزش ارتباط با API در React.js",
      time: "5 ساعت",
      platform: "فرادرس",
      imageLink: "",
      isMain: true,
      description:
        "در این آموزش و با استفاده از پروتکل HTTP ما سعی کردیم که یک آموزش کامل از نحوه ارتباط با API ها با معماری REST در محیط React.js با استفاده از fetch و پکیج axios تهیه کنیم تا شما عزیزان بتوانید با ارتباط برقرار کردن با API ها، وبسایت های داینامیک و بهتری را بسازید. پیش نیاز این آموزش، آشنایی حداقلی با HTML و CSS و Javascript و React.js است. البته که اگر این موارد را خیلی ابتدایی هم بلد باشید کفایت میکند چون در این آموزش ما سعی کرده ایم که مباحث را از پایه ای ترین شکل ممکن آموزش دهیم.",
      link: "https://github.com/mohammad-zolghadr/admin-panel",
    },
  ];

  const editHandler = (e) => {
    setShowOneField(e.target.name);
  };

  const getEditableInput = () => {
    switch (showOneField) {
      case "title":
        return setInputTitle;
      case "position":
        return setInputPosition;
      case "coverLetter":
        return setInputCoverLetter;
      case "university":
        return setInputUniversity;
      case "degree":
        return setInputDegree;
      case "educationTime":
        return setInputEducationTime;
      default:
        break;
    }
  };

  return (
    <div className="mwrapper py-20">
      {/* Main Info */}
      <div className="w-[90%] mx-auto fcenter flex-col mb-10">
        {showOneField && (
          <OneField
            data={{
              setShowOneField: setShowOneField,
              setInputValue: getEditableInput(),
            }}
          />
        )}
        <span className="bg-gray-400 px-8 py-1 rounded-t-xl font-bf text-sm text-white">
          اطلاعات کلی
        </span>
        <div className="w-full fcenter flex-col gap-12 p-6 py-10 bg-gray-100 rounded-lg shadow-lg shadow-gray-300">
          {/* Name, Position and Resume */}
          <div className="w-full fcenter justify-between ">
            <div className="flex flex-col items-start flex-grow">
              <div className="fcenter gap-1">
                <span className="font-bf text-sm text-gray-600">
                  {inputTitle ? inputTitle : name}
                </span>
                <img
                  name="title"
                  onClick={editHandler}
                  className="w-4 mhover"
                  src={editIco}
                />
              </div>
              <div className="fcenter gap-1">
                <span className="text-xs text-gray-500">
                  {inputPosition ? inputPosition : position}
                </span>
                <img
                  name="position"
                  onClick={editHandler}
                  className="w-4 mhover"
                  src={editIco}
                />
              </div>
            </div>
            <div className="fcenter justify-between px-4 py-2 gap-8 bg-white shadow-lg shadow-gray-300 rounded-lg ">
              <label forhtml="choose-resume" className="mhover">
                <span className="inline-block primary-btn text-xs px-4 ">
                  انتخاب فایل رزومه
                </span>
                <input
                  id="choose-resume"
                  type="file"
                  className="hidden"
                  accept="application/pdf,application/vnd.ms-excel"
                />
              </label>
              {!resumeFile && (
                <span className="text-sm text-gray-400">
                  {resumeFile.name}Resume.pdf
                </span>
              )}
            </div>
          </div>
          {/* Cover Letter */}
          <p className="text-sm text-justify leading-5 text-gray-500">
            {inputCoverLetter ? inputCoverLetter : coverLetter}{" "}
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
                  key={e.name}
                  className="w-16 h-16 rounded-full bg-white shadow-lg mhover "
                >
                  <img src={e.link} />
                </div>
              );
            })}
            <div className="w-16 h-16 fcenter rounded-full bg-purple-500 shadow-lg mhover ">
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
                    {inputUniversity ? inputUniversity : university}
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
                    {inputDegree ? inputDegree : degree}
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
                    {inputEducationTime ? inputEducationTime : educationTime}
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
            <textarea
              className="minput bg-gray-200 shadow-md w-3/5 h-32 flex-grow resize-none"
              placeholder="مهارت های نرم : با - از هم جدا کنید"
              value={softSkills}
            ></textarea>
          </div>
          {/* Social */}
          <div className="w-full fcenter mt-8 gap-2 gap-y-14 flex-wrap">
            <div className="bg-white fcenter p-3 rounded-lg shadow-md shadow-gray-300 flex-col relative">
              <div className="w-14 h-14 fcenter absolute top-[-2rem]   bg-gray-500 rounded-full">
                <img src={linkedinIco} className="w-3/5" />
              </div>
              <div className="pt-5">
                <input
                  type="text"
                  placeholder="https://exapmle.com"
                  className="minput rounded-full text-left text-xs placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="bg-white fcenter p-3 rounded-lg shadow-md shadow-gray-300 flex-col relative">
              <div className="w-14 h-14 fcenter absolute top-[-2rem]   bg-gray-500 rounded-full">
                <img src={githubIco} className="w-3/5" />
              </div>
              <div className="pt-5">
                <input
                  type="text"
                  placeholder="https://exapmle.com"
                  className="minput rounded-full text-left text-xs placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="bg-white fcenter p-3 rounded-lg shadow-md shadow-gray-300 flex-col relative">
              <div className="w-14 h-14 fcenter absolute top-[-2rem]   bg-gray-500 rounded-full">
                <img src={gmailIco} className="w-3/5" />
              </div>
              <div className="pt-5">
                <input
                  type="text"
                  placeholder="https://exapmle.com"
                  className="minput rounded-full text-left text-xs placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="bg-white fcenter p-3 rounded-lg shadow-md shadow-gray-300 flex-col relative">
              <div className="w-14 h-14 fcenter absolute top-[-2rem]   bg-gray-500 rounded-full">
                <img src={whatsappIco} className="w-3/5" />
              </div>
              <div className="pt-5">
                <input
                  type="text"
                  placeholder="https://exapmle.com"
                  className="minput rounded-full text-left text-xs placeholder:text-gray-400"
                />
              </div>
            </div>
            <div className="bg-white fcenter p-3 rounded-lg shadow-md shadow-gray-300 flex-col relative">
              <div className="w-14 h-14 fcenter absolute top-[-2rem]   bg-gray-500 rounded-full">
                <img src={instagramIco} className="w-3/5" />
              </div>
              <div className="pt-5">
                <input
                  type="text"
                  placeholder="https://exapmle.com"
                  className="minput rounded-full text-left text-xs placeholder:text-gray-400"
                />
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
          <button className="bg-gray-200 px-20 py-4 rounded-lg font-bf text-sm text-gray-500 mhover">
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
          <button className="bg-gray-200 px-20 py-4 rounded-lg font-bf text-sm text-gray-500 mhover">
            اضافه کردن آموزش جدید
          </button>
        </div>
      </div>

      <button className="primary-btn mhover px-14">ذخیره اطلاعات</button>
    </div>
  );
};

export default Info;
