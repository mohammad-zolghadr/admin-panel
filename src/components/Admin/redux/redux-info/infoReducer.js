import { toast } from "react-toastify";
const initState = {
  name: "محمد ذوالقدر",
  skill: "توسعه دهنده فرانت",
  resume: "",
  coverLetter:
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
  listOfTechnologies: [
    {
      id: 1,
      name: "HTML",
      tech: "HTML 5 - Semantic Tags",
      link: "",
    },
    {
      id: 2,
      name: "CSS",
      tech: "CSS 3",
      link: "",
    },
    {
      id: 3,
      name: "Javascript",
      tech: "ES6",
      link: "",
    },
    {
      id: 4,
      name: "React.js",
      tech: "React Hooks - React Router (SPA) - Redux - StyledComponents - Axios - REST",
      link: "",
    },
    {
      id: 5,
      name: "SASS",
      tech: "SCSS",
      link: "",
    },
    {
      id: 6,
      name: "Tailwind",
      tech: "Tailwind css V3.2.4",
      link: "",
    },
    {
      id: 7,
      name: "Figma",
      tech: "UI/UX Design",
      link: "",
    },
    {
      id: 8,
      name: "Github",
      tech: "github",
      link: "",
    },
  ],
  university: "سلمان فارسی کازرون",
  degree: "کارشناسی",
  educationTime: "مهر 1396 تا خرداد 1401",
  softSkills: "مسئولیت پذیری - مدیریت زمان",
  links: {
    linkedin: "https://www.linkedin.com/in/mohammad-zolghadr/",
    github: "https://github.com/mohammad-zolghadr",
    gmail: "mohammad.zol9978@gmail.com",
    whatsapp: "https://wa.me/+989164538713",
    instagram: "https://instagram.com/mozo.plus",
  },
  listOfProjects: [
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
  ],
  listOfTutorials: [
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
  ],
};

const infoReducer = (state = initState, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "CHANGE_SKILL":
      return { ...state, skill: action.payload };
    case "CHANGE_RESUME":
      // non-serilize file
      return { ...state, resume: action.payload };
    case "CHANGE_COVER_LETTER":
      return { ...state, coverLetter: action.payload };
    case "GET_LIST_OF_TECHNOLOGIES":
      // do sth
      break;
    case "ADD_ITEM_TO_LIST_OF_TECHNOLOGIES":
      let tempTechnologiesData = [
        ...state.listOfTechnologies,
        {
          ...action.payload,
          id: state.listOfTechnologies.length + 1,
        },
      ];
      return { ...state, listOfTechnologies: tempTechnologiesData };
    case "EDIT_ITEM_OF_TECHNOLOGIES":
      const filteredTechItem = state.listOfTechnologies.filter(
        (e) => e.id !== action.payload.id
      );
      return {
        ...state,
        listOfTechnologies: [...filteredTechItem, { ...action.payload }],
      };
    case "REMOVE_ITEM_OF_TECHNOLOGIES":
      const removedTechnologiesItems = state.listOfTechnologies.filter(
        (e) => e.id !== action.payload.id
      );
      return {
        ...state,
        listOfTechnologies: [...removedTechnologiesItems],
      };
    case "CHANGE_UNIVERSITY":
      return { ...state, university: action.payload };
    case "CHANGE_DEGREE":
      return { ...state, degree: action.payload };
    case "CHANGE_EDUCATION_TIME":
      return { ...state, educationTime: action.payload };
    case "CHANGE_SOFT_SKILLS":
      return { ...state, softSkills: action.payload };
    case "CHANGE_LINKS":
      return { ...state, links: action.payload };
    case "GET_LIST_OF_PROJECT":
      // do sth
      break;
    case "ADD_ITEM_TO_LIST_OF_PROJECT":
      let tempData = [
        ...state.listOfProjects,
        {
          ...action.payload,
          id: state.listOfProjects.length + 1,
          isMain: false,
        },
      ];
      return { ...state, listOfProjects: tempData };
    case "EDIT_ITEM_OF_PROJECT":
      const filteredItems = state.listOfProjects.filter(
        (e) => e.id !== action.payload.id
      );
      return {
        ...state,
        listOfProjects: [...filteredItems, { ...action.payload }],
      };
    case "REMOVE_ITEM_OF_PROJECT":
      const removedProjectItems = state.listOfProjects.filter(
        (e) => e.id !== action.payload.id
      );
      return {
        ...state,
        listOfProjects: [...removedProjectItems],
      };
    case "CHANGE_IS_MAIN_PROJECT":
      let countOfChecked = 0;
      state.listOfProjects.forEach((e) => e.isMain && ++countOfChecked);

      if (countOfChecked >= 5 && action.payload.isMain) {
        toast.error("فقط 5 تا از آیتم ها رو میتونی انتخاب کنی");
        return state;
      } else {
        const filteredItems_2 = state.listOfProjects.filter(
          (e) => e.id !== action.payload.id
        );
        return {
          ...state,
          listOfProjects: [...filteredItems_2, { ...action.payload }],
        };
      }
    case "GET_LIST_OF_TUTORIAL":
      // do sth
      break;
    case "ADD_ITEM_TO_LIST_OF_TUTORIAL":
      let tempTutorialItem = [
        ...state.listOfTutorials,
        {
          ...action.payload,
          id: state.listOfTutorials.length + 1,
          isMain: false,
        },
      ];
      return { ...state, listOfTutorials: tempTutorialItem };
    case "EDIT_ITEM_OF_TUTORIAL":
      const filteredTutorialItems = state.listOfTutorials.filter(
        (e) => e.id !== action.payload.id
      );
      return {
        ...state,
        listOfTutorials: [...filteredTutorialItems, { ...action.payload }],
      };
    case "REMOVE_ITEM_OF_TUTORIAL":
      const removedTutorialItems = state.listOfTutorials.filter(
        (e) => e.id !== action.payload.id
      );
      return {
        ...state,
        listOfTutorials: [...removedTutorialItems],
      };
    case "CHANGE_IS_MAIN_TUTORIAL":
      let countOfTutorialChecked = 0;
      state.listOfTutorials.forEach(
        (e) => e.isMain && ++countOfTutorialChecked
      );

      if (countOfTutorialChecked >= 5 && action.payload.isMain) {
        toast.error("فقط 5 تا از آیتم ها رو میتونی انتخاب کنی");
        return state;
      } else {
        const filteredItems_2 = state.listOfTutorials.filter(
          (e) => e.id !== action.payload.id
        );
        return {
          ...state,
          listOfTutorials: [...filteredItems_2, { ...action.payload }],
        };
      }
    default:
      return state;
  }
};

export default infoReducer;
