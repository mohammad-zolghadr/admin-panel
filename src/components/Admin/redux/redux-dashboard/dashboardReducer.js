const initialState = {
  messageData: [
    {
      id: 1,
      message: "متن پیغام به صورت خلاصه شده...",
      email: "exampla@gmail.com",
      date: "1401/08/28",
    },
    {
      id: 2,
      message: "فلان قسمت مشکل داره داداش",
      email: "exampla@gmail.com",
      date: "1396/06/28",
    },
    {
      id: 3,
      message:
        "این قسمت فقط برای پیام مستقیم به ادمین هست نه کامنت گذاشتن زیر مقاله ها و پست ها",
      email: "exampla@gmail.com",
      date: "1401/10/22",
    },
    {
      id: 4,
      message: "یه پیشنهاد جدید دارم برای شما",
      email: "exampla@gmail.com",
      date: "1403/04/02",
    },
  ],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_MESSAGES":
      // do sth
      break;
    case "REMOVE_MESSAGE":
      // do sth
      break;
    default:
      return state;
  }
};

export default dashboardReducer;
