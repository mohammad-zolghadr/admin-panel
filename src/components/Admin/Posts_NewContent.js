import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

// Redux
import { useDispatch } from "react-redux";
import { addPost, editPost } from "./redux/redux-post/postActions";

// Components
import RichtextEditor from "./RichTextEditor";
import Loading from "../Loading";

// Functions
import { uploadImage } from "../../fakeBackendFuctions";

const SUMMARY_LIMIT_CHAR = 120;

const PostsNewContent = () => {
  const { state } = useLocation();
  const { id, title, summary, hashtag, image, body, status, date } =
    state ?? "";
  const dispatch = useDispatch();
  const [ivBody, setIvBody] = useState(body);
  const [inputValue, setInputValue] = useState({
    title: title,
    summary: summary,
    hashtag: hashtag,
  });
  const [isShowLoading, setIsShowLoading] = useState(false);

  const inputHandler = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const onDrop = useCallback((acceptedFiles) => {
    // File Choosen
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const resetInputs = () => {
    setIvBody("");
    setInputValue({ title: "", summary: "", hashtag: "" });
  };

  const formSubmited = (e) => {
    e.preventDefault();
    console.log(inputValue.title, ivBody);
    if (!inputValue.title || !ivBody || !inputValue.summary)
      toast.error(
        "پر کردن فیلد عنوان مقاله، متن پست و خلاصه کوتاه از پست اجباریست و نمیتواند خالی باشد"
      );
    else {
      setIsShowLoading(true);
      if (status) {
        // Must Edit
        uploadImage()
          .then((imageLink) => {
            dispatch(
              editPost({
                title: inputValue.title,
                body: ivBody,
                summary: inputValue.summary,
                image: imageLink,
                hashtag: inputValue.hashtag,
                status: e.target.name,
                date: date,
                id: id,
              })
            );
            toast.success("محتوای جدید با موفقیت ویرایش شد");
            resetInputs();
            setIsShowLoading(false);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          })
          .catch((error) => {
            console.log(error);
            setIsShowLoading(false);
            toast.error("متاسفانه مشکلی پیش اومده و محتوای جدیدت آپلود نشد!");
          });
      } else {
        // Must Add
        uploadImage()
          .then((imageLink) => {
            dispatch(
              addPost({
                title: inputValue.title,
                body: ivBody,
                summary: inputValue.summary,
                image: imageLink,
                hashtag: inputValue.hashtag,
                status: e.target.name,
              })
            );
            toast.success("محتوای جدید با موفقیت آپلود شد");
            resetInputs();
            setIsShowLoading(false);
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          })
          .catch((error) => {
            setIsShowLoading(false);
            toast.error("متاسفانه مشکلی پیش اومده و محتوای جدیدت آپلود نشد!");
          });
      }
    }
  };

  return (
    <div className="w-full md:w-10/12 lg:w-2/3 mx-auto">
      {isShowLoading && <Loading data={{ full: true }} />}
      <ToastContainer position="bottom-left" />
      <form className="fcenter flex-col gap-12">
        <div className="w-full fcenter flex-col">
          <label className="inputLabel">عنوان مقاله</label>
          <input
            value={inputValue.title}
            className="minput w-full shadow-lg text-xs py-4 focus:outline-none"
            type="text"
            name="title"
            onChange={inputHandler}
          />
        </div>

        <div className="w-full fcenter flex-col">
          <label className="inputLabel">متن پست</label>
          <RichtextEditor
            hocState={{ ivBody, setIvBody }}
            className="minput w-full shadow-lg"
            type="text"
          />
        </div>

        <div className="w-full fcenter flex-col">
          <label className="inputLabel">خلاصه کوتاه از پست</label>
          <div className="w-full relative">
            <textarea
              className="minput w-full h-28 shadow-lg text-xs py-4 focus:outline-none resize-none"
              name="summary"
              type="text"
              value={inputValue.summary}
              onChange={inputHandler}
              maxLength="120"
            />
            <span
              className="absolute left-5 bottom-4 text-[10px] text-gray-400 font-bf"
              style={{
                color:
                  inputValue.summary?.length === SUMMARY_LIMIT_CHAR && "#a22",
              }}
            >{`${
              inputValue.summary ? inputValue.summary.length : 0
            }/${SUMMARY_LIMIT_CHAR}`}</span>
          </div>
        </div>

        <div className="w-full fcenter flex-col gap-8 lg:flex-row lg:gap-4 ">
          <div className="w-full fcenter flex-col shadow-lg">
            <span className="inputLabel">آپلود تصویر</span>
            <div
              className="flex items-center justify-center w-full"
              {...getRootProps()}
            >
              <label
                forhtml="dropzone-file"
                className="fcenter flex-col w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-100 hover:bg-gray-50 duration-300"
              >
                <div className="fcenter flex-col gap-2 py-6 px-4">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="text-xs text-gray-500">
                    <span className="font-bf">انتخاب کنید</span> یا تصویر را
                    بکشید و در این کادر رها کنید
                  </p>
                  <p className="text-xs text-gray-500">
                    فرمت های قابل قبول : PNG, JPG
                  </p>
                </div>
                <input
                  {...getInputProps()}
                  id="dropzone-file"
                  type="file"
                  className="hidden"
                  accept="image/png,image/jpeg"
                />
              </label>
            </div>
          </div>
          <div className="w-full fcenter flex-col">
            <label className="inputLabel">هشتگ های مرتبط</label>
            <textarea
              placeholder="هشتگ ها را با - از هم جدا کنید"
              className="minput placeholder:text-gray-400 w-full h-40 shadow-lg text-xs py-4 focus:outline-none resize-none"
              type="text"
              name="hashtag"
              value={inputValue.hashtag}
              onChange={inputHandler}
            />
          </div>
        </div>

        <div className="fcenter gap-4 flex-wrap mt-10 mb-16">
          <button
            onClick={formSubmited}
            type="submit"
            name="deactive"
            className="secondary-btn rounded-full text-sm font-bf bg-gray-200 border-transparent text-gray-500 shadow-lg  mhover "
          >
            ذخیره پیش نویس
          </button>
          <button
            onClick={formSubmited}
            type="submit"
            name="active"
            className="primary-btn rounded-full text-sm font-bf shadow-lg shadow-purple-300 mhover flex-1"
          >
            انتشار محتوا
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostsNewContent;
