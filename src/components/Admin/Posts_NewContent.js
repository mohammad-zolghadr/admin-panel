import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

// Components
import RichtextEditor from "./RichTextEditor";

const SUMMARY_LIMIT_CHAR = 120;

const PostsNewContent = () => {
  const [ivBody, setIvBody] = useState("");
  const [inputValue, setInputValue] = useState({ title: "", summary: "" });

  const inputHandler = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const onDrop = useCallback((acceptedFiles) => {
    // File Choosen
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="w-full md:w-10/12 lg:w-2/3 mx-auto">
      <form className="fcenter flex-col gap-12">
        <div className="w-full fcenter flex-col">
          <label className="inputLabel">عنوان مقاله</label>
          <input
            className="minput w-full shadow-lg text-xs py-4 focus:outline-none"
            type="text"
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
                  inputValue.summary.length === SUMMARY_LIMIT_CHAR && "#a22",
              }}
            >{`${inputValue.summary.length}/${SUMMARY_LIMIT_CHAR}`}</span>
          </div>
        </div>

        <div className="w-full fcenter flex-col gap-8 lg:flex-row lg:gap-4 ">
          <div className="w-full fcenter flex-col">
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
            />
          </div>
        </div>

        <div className="fcenter gap-4 flex-wrap mt-10 mb-16">
          <button className="secondary-btn rounded-full text-sm font-bf bg-gray-200 border-transparent text-gray-500 shadow-lg  mhover ">
            ذخیره پیش نویس
          </button>
          <button className="primary-btn rounded-full text-sm font-bf shadow-lg shadow-purple-300 mhover flex-1">
            انتشار محتوا
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostsNewContent;
