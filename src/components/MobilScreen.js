import React, { useState,useContext } from "react";
import { useForm } from "react-hook-form";
import balance from "../Image/balance.png";
import { CiCalculator2 } from "react-icons/ci";
import { BsJournalPlus } from "react-icons/bs";
import { DataContext } from "../DataProvider";

// import { AiOutlineCloseSquare } from "react-icons/ai";
import PopUpModalMobile from "./PopUpModalMobile";
const MobilScreen = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isOpen, setOpen] = useState(false);

  const { year, submit, calculator,diye,handleValueChange } =useContext(DataContext)

  return (
    <div className="bg-[#E7E7DE] md:hidden flex flex-col font-bold font-Vazirmatn text-lg">
      <div className="w-full mt-16 items-center grid grid-rows-1 gap-3 p-4">
        <div className="w-full">
          {/* description */}
          <div className=" w-[100%] text-center font-Vazirmatn font-bold  text-lg">
            برای محاسبه دیه تصادف ، سقط جنین و ... اطلاعات زیر را وارد کنید و بر
            روی محاسبه کلیک کنید
          </div>
          {/* year */}
          <div className="w-full mt-5 bg-white rounded-lg flex flex-col rtl p-4 shadow-xl">
            <div className="w-full flex justify-between items-center">
              <div className="w-[30%] items-center justify-center flex">
                سال دیه
              </div>
              <div className="w-full items-center justify-center flex">
                <select
                  id="year"
                  {...register("year", {
                    required: "لطفا سال دیه را وارد کنید ",
                  })}
                  className="w-full border-2 rounded-xl h-10 mt-2 text-md
                 flex outline-none  border-[#8EACCD]"
                  name="year"
                  onChange={handleValueChange}
                >
                  <option></option>
                  {year.sort((a,b)=>b-a).map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
              </div>
            </div>
            {errors.year && (
              <p className="flex items-center text-red-500 font-Vazirmatn text-xl justify-center font-bold">
                {errors.year.message}
              </p>
            )}
          </div>
          {/* gender */}
          <div className="w-full mt-5 bg-white rounded-lg flex items-center justify-between rtl p-4 shadow-xl">
            <div className="w-[30%] items-center justify-center flex">
              جنسیت
            </div>
            <div className="w-full ">
              <input
                type="radio"
                className="w-4 h-4 mr-5"
                id="gender"
                name="gender"
                value={
                  diye.gender === ""
                    ? "زن"
                    : diye.gender === "مرد"
                    ? "زن"
                    : diye.gender
                }
                onChange={handleValueChange}
              />
              <label>زن</label>
              <input
                type="radio"
                className="mr-5 w-4 h-4 "
                name="gender"
                value={
                  diye.gender === ""
                    ? "مرد"
                    : diye.gender === "زن"
                    ? "مرد"
                    : diye.gender
                }
                id="gender"
                onChange={handleValueChange}
              />
              <label>مرد</label>
            </div>
          </div>
          {/* type */}
          <form
            onSubmit={handleSubmit(() => {
              reset();
              submit(diye);
            })}
          >
            <div className="w-full mt-5 bg-white rounded-lg flex flex-col rtl p-4 shadow-xl">
              <div className="w-full flex flex-col ">
                <div className="w-full flex items-center justify-between">
                  <div className="w-[30%] items-center justify-center flex">
                    نوع دیه
                  </div>
                  <div className="w-full items-center justify-center flex">
                    <select
                      id="type"
                      {...register("type", {
                        required: "لطفا نوع دیه را وارد کنید ",
                      })}
                      className="w-full border-2 rounded-xl h-10 mt-2 text-md
                 flex outline-none  border-[#8EACCD]"
                      name="type"
                      onChange={handleValueChange}
                    >
                      <option></option>
                      <option value="جنین">جنین</option>
                      <option value="قتل نفس">قتل نفس</option>
                      <option value="اعضاء بدن">اعضاء بدن</option>
                    </select>
                  </div>
                </div>
                {errors.type && (
                  <p className="flex items-center text-red-500 font-Vazirmatn text-xl justify-center font-bold">
                    {errors.type.message}
                  </p>
                )}
              </div>
              <div className="w-full rtl">
                {/* bodypartName */}

                {diye.type === "جنین" ? (
                  <>
                    <div className="w-full mt-5 flex">بر اساس تکامل جنین</div>
                    <select
                      id="fetus"
                      {...register("fetus", {
                        required: "وضعیت جنین را مشخص نمایید",
                      })}
                      className="w-full border-2 rounded-xl h-10 mt-2 text-md
                      flex outline-none  border-[#8EACCD]"
                      name="fetus"
                      onChange={handleValueChange}
                    >
                      <option></option>
                      <option value="نطفه ای که در رحم مستقر شده است">
                        نطفه ای که در رحم مستقر شده است{" "}
                      </option>
                      <option value="جنین پسر که روح در آن دمیده شده است">
                        جنین پسر که روح در آن دمیده شده است.
                      </option>
                      <option value="جنین دختر که روح در آن دمیده شده است">
                        جنین دختر که روح در آن دمیده شده است{" "}
                      </option>
                      <option value="چند جنین در یک رحم باشد سقط هر یک از آن ها">
                        چند جنین در یک رحم باشد سقط هر یک از آن ها
                      </option>
                    </select>
                    {errors.fetus && (
                      <p className="flex items-center text-red-500 font-Vazirmatn text-xl justify-center font-bold">
                        {errors.fetus.message}
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    {diye.type === "قتل نفس" ? (
                      <>
                        <div className="flex items-center mt-10">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            value="قتل در ماه حرام یا مکه مکرمه واقع شده "
                            name="kill"
                            onChange={handleValueChange}
                            className="w-4 h-4 text-blue-600 bg-gray-100 font-Vazirmatn border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            for="default-checkbox"
                            class="ml-2 text-lg font-bold font-Vazirmatn   text-gray-900 dark:text-gray-300 mr-2 "
                          >
                            قتل در ماه حرام یا مکه مکرمه واقع شده
                          </label>
                        </div>
                      </>
                    ) : (
                      <>
                        {diye.type === "اعضاء بدن" ? (
                          <>
                            <div className="w-full grid grid-cols-2 gap-3 mt-5">
                              <div>
                                <label className="text-lg font-bold w-40 font-Vazirmatn">
                                  نام عضو بدن:
                                </label>
                                <select
                                  id="bodypartName"
                                  {...register("bodypartName", {
                                    required:
                                      "نام عضو آسیب دیده را انتخاب کنید ",
                                  })}
                                  className="w-full border-2 rounded-xl h-10 mt-2 text-md
                                  flex outline-none  border-[#8EACCD]"
                                  onChange={handleValueChange}
                                  name="bodypartName"
                                >
                                  <option></option>
                                  <option value="بینایی">بینایی</option>
                                  <option value="چشایی">چشایی</option>
                                  <option value="بینی">بینی</option>
                                </select>
                              </div>

                              <div>
                                <label className=" text-lg font-bold w-40 font-Vazirmatn">
                                  حالت‌های نقص عضو:
                                </label>
                                <select
                                  id="memberviolation"
                                  {...register("memberviolation", {
                                    required: "حالت نقص عضو را انتخاب کنید ",
                                  })}
                                  className="w-full border-2 rounded-xl h-10 mt-2 text-md
                                  flex outline-none  border-[#8EACCD]"
                                  name="memberviolation"
                                  onChange={handleValueChange}
                                >
                                  {diye.bodypartName === "بینی" ? (
                                    <>
                                      <option></option>
                                      <option value="قطع کردن یا از بین بردن تمام بینی">
                                        قطع کردن یا از بین بردن تمام بینی{" "}
                                      </option>
                                      <option value="قطع کردن یا از بین بردن نرمه پایین استخوان بینی">
                                        قطع کردن یا از بین بردن نرمه پایین
                                        استخوان بینی
                                      </option>
                                      <option value="از بین بردن تمام نرمه یا تمام و یا مقداری از استخوانبینی (دفعتا)">
                                        از بین بردن تمام نرمه یا تمام و یا
                                        مقداری از استخوان بینی (دفعتا)
                                      </option>
                                    </>
                                  ) : (
                                    <>
                                      {diye.bodypartName === "چشایی" ? (
                                        <>
                                          <option></option>
                                          <option value="از بین بردن حس چشایی و نقصان آن">
                                            از بین بردن حس چشایی و نقصان آن
                                          </option>
                                          <option value="قطع تمام زبان +از بین رفتن حس چشایی">
                                            قطع تمام زبان +از بین رفتن حس چشایی
                                          </option>
                                          <option value="اگر با جنایت بر غیر زبان ، چشایی از بین برود یا نقصان پیدا کند">
                                            اگر با جنایت بر غیر زبان ، چشایی از
                                            بین برود یا نقصان پیدا کند
                                          </option>
                                        </>
                                      ) : (
                                        <>
                                          <option></option>
                                          <option value="از بین بردن بینایی هر دو ">
                                            از بین بردن بینایی هر دو چشم{" "}
                                          </option>
                                          <option value="از بین بردن بینایی یک چشم">
                                            از بین بردن بینایی یک چشم{" "}
                                          </option>
                                          <option value="از بین بردن یا بیرون آوردن هر یک از دو چشم از حدقه">
                                            از بین بردن یا بیرون آوردن هر یک از
                                            دو چشم از حدقه
                                          </option>
                                        </>
                                      )}
                                    </>
                                  )}
                                </select>
                              </div>
                              {errors.bodypartName && (
                                <p className="flex items-center text-red-500 font-Vazirmatn text-xl justify-center font-bold rtl">
                                  {errors.bodypartName.message}
                                </p>
                              )}
                              {errors.memberviolation && (
                                <p className="flex items-center text-red-500 font-Vazirmatn text-xl justify-center font-bold rtl">
                                  {errors.memberviolation.message}
                                </p>
                              )}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </>
                )}
              </div>

              <div className="flex w-full items-center justify-between mt-5">
                <button className="w-full flex items-center justify-center border-2 p-2 rounded-xl border-[#D7E5CA] bg-[#8EACCD] text-white">
                  {/* افزودن */}
                  <BsJournalPlus size={35} className="m-2" />
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* bottom */}
        <div className="w-full flex flex-col bg-white rounded-lg p-5 rtl shadow-xl ">
          <div className="w-full ">نتیجه</div>
          <hr className="border-2 border-[#B2D3BE] w-full mt-2 " />
          <div className="w-full p-2 ">
            {calculator.map((item, index) => {
              // let x = calculator.length;
              return (
                <>
                  <div className="flex flex-col  ">
                    <label className="font-Vazirmatn text-lg font-bold mt-2">
                      سال دیه :{item.year}
                    </label>

                    <label className="font-Vazirmatn text-lg font-bold mt-2">
                      جنسیت : {item.gender}
                    </label>
                    <label className="font-Vazirmatn text-lg font-bold mt-2">
                      نوع دیه : {item.type}
                    </label>
                    {item.fetus !== "" ? (
                      <label className="font-Vazirmatn text-lg font-bold mt-2">
                        وضعیت تکامل جنین: {item.fetus}
                      </label>
                    ) : (
                      ""
                    )}
                    {item.bodypartName !== "" ? (
                      <label className="font-Vazirmatn text-lg font-bold mt-2">
                        نام عضو بدن: {item.bodypartName}
                      </label>
                    ) : (
                      ""
                    )}
                    {item.memberviolation !== "" ? (
                      <label className="font-Vazirmatn text-lg font-bold mt-2">
                        حالت های نقص عضو: {item.memberviolation}
                      </label>
                    ) : (
                      ""
                    )}
                    {item.kill !== "" ? (
                      <label className="font-Vazirmatn text-lg font-bold mt-2">
                        قتل در ماه های حرام یا مکه مکرمه:بله
                      </label>
                    ) : (
                      ""
                    )}
                    <div className="flex items-center justify-center w-full mt-5">
                      <hr className="border-2 border-[#B2D3BE] w-[100%]  " />
                    </div>
                  </div>

                  {/* <hr className="border-2 border-[#000]"/> */}
                </>
              );
            })}
          </div>
          <div className="w-full items-center justify-center mt-5">
            <button className="w-full border-2 p-2 rounded-lg flex bg-[#176B87] text-white items-center justify-center ">
              <CiCalculator2 size={35} className="m-2" />
              {/* محاسبه */}
            </button>
          </div>
        </div>
      </div>
      <div class="relative h-20 mb rounded-full bg-[#E7E7DE] overflow-hidden rtl">
        <button
          id="progress"
          class="absolute w-14 h-14 rounded-full bg-white flex items-center justify-center"
          onClick={() => setOpen(!isOpen)}
        >
          <img src={balance} className="w-7 h-7" alt="" />={" "}
        </button>
      </div>

      {isOpen && (
   <PopUpModalMobile/>
      )}
    </div>
  );
};

export default MobilScreen;
