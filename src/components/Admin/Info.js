import React from "react";

// icons
import plusIco from "../../assets/images/plus.svg";
import linkedinIco from "../../assets/images/linkedin.png";
import githubIco from "../../assets/images/github.png";
import gmailIco from "../../assets/images/gmail.png";
import whatsappIco from "../../assets/images/whatsapp.png";
import instagramIco from "../../assets/images/instagram.png";

const Info = () => {
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

  return (
    <div className="mwrapper">
      {/* Main Info */}
      <div className="mx-6 fcenter flex-col mb-10">
        <span className="bg-gray-400 px-8 py-1 rounded-t-xl font-bf text-sm text-white">
          اطلاعات کلی
        </span>
        <div className="w-full fcenter flex-col gap-12 p-6 pb-20 bg-gray-100 rounded-lg shadow-lg shadow-gray-300">
          {/* Name, Position and Resume */}
          <div className="w-full fcenter justify-between ">
            <div className="flex flex-col items-start flex-grow">
              <span className="font-bf text-sm text-gray-600">{name}</span>
              <span className="text-xs text-gray-500">{position}</span>
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
            {coverLetter}
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
              <span className="text-xs text-gray-500">
                {`دانشگاه : `}
                <span className="font-bf text-sm text-gray-600">
                  {university}
                </span>
              </span>
              <span className="text-xs text-gray-500">
                {`مدرک : `}
                <span className="font-bf text-sm text-gray-600">{degree}</span>
              </span>
              <span className="text-xs text-gray-500">
                {`سال تحصیل : `}
                <span className="font-bf text-sm text-gray-600">
                  {educationTime}
                </span>
              </span>
            </div>
            <textarea
              className="minput bg-gray-200 shadow-md w-3/5 h-32 flex-grow resize-none"
              placeholder="مهارت های نرم : با - از هم جدا کنید"
              value={softSkills}
            ></textarea>
          </div>
          {/* Social */}
          <div className="w-full fcenter mt-8 gap-4 gap-y-14 flex-wrap">
            <div className="bg-white fcenter p-3 rounded-lg shadow-md shadow-gray-300 flex-col relative">
              <div className="w-14 h-14 fcenter absolute top-[-2rem]  bg-gray-500 rounded-full">
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
              <div className="w-14 h-14 fcenter absolute top-[-2rem]  bg-gray-500 rounded-full">
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
              <div className="w-14 h-14 fcenter absolute top-[-2rem]  bg-gray-500 rounded-full">
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
              <div className="w-14 h-14 fcenter absolute top-[-2rem]  bg-gray-500 rounded-full">
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
              <div className="w-14 h-14 fcenter absolute top-[-2rem]  bg-gray-500 rounded-full">
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
    </div>
  );
};

export default Info;
