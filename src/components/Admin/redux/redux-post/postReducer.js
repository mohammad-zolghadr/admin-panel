import pic from "../../../../assets/images/profile.svg";
const initState = {
  postsList: [
    {
      id: 1,
      title: "عنوان یک مقاله را اینجا می نویسیم",
      image: pic,
      status: "active",
      date: "1401/08/28",
    },
    {
      id: 2,
      title: "زندگی را دوست بداریم",
      image: pic,
      status: "active",
      date: "1396/06/28",
    },
    {
      id: 3,
      title: "آموزش برنامه نویسی فرانت اند",
      image: pic,
      status: "deactive",
      date: "1401/10/22",
    },
    {
      id: 4,
      title: "یک آموزش جدید میخوام بسازم براتون",
      image: pic,
      status: "active",
      date: "1403/04/02",
    },
  ],
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case "REMOVE_POST":
      const allItemsWithoutRemoved = state.postsList.filter(
        (element) => element.id !== action.payload.id
      );
      return {
        ...state,
        postsList: allItemsWithoutRemoved,
      };
    case "SEARCH_POST":
      const searchMatchedItem = state.postsList.filter((element) =>
        element.title.includes(action.payload)
      );
      return {
        ...state,
        postsList: searchMatchedItem,
      };

    default:
      return state;
  }
};

export default postReducer;
