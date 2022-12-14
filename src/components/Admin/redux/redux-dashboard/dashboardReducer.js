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
      message:
        "یه پیشنهاد جدید دارم برای شما. لطفا لینک این وبسایت را در پروفایل لینکدین خود قرار دهید و همچنین کدهای مربوط به آن را در پروفایل گیت هاب خود آپلود کنید تا ما هم بتوانیم از آنها استفاده کنیم. ممنون از شما و به امیدو موفقیت روز افزونتان - ارادتمند شما، علی رضا جهان پور برنامه نویس فرانت اند",
      email: "exampla@gmail.com",
      date: "1403/04/02",
    },
  ],
  weekChartData: [1264, 2424, 9754, 3796, 2849, 4560, 3940],
  postsChartData: [26, 12, 54, 21, 43, 72, 42],
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_MESSAGES":
      // do sth
      break;
    case "REMOVE_MESSAGE":
      const messageFiltered = state.messageData.filter(
        (element) => element.id !== action.payload.id
      );
      return {
        ...state,
        messageData: messageFiltered,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
