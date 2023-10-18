import React, { useState ,useContext} from "react";
import { useForm } from "react-hook-form";
import { CiCalculator2 } from "react-icons/ci";
import { BsJournalPlus } from "react-icons/bs";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { DataContext } from "../DataProvider";

const PopUpModalMobile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isOpen, setOpen] = useState(false);

  const { year, submit, calculator,diye,handleValueChange } =useContext(DataContext)
  return (
    <div className="bg-gray-900/30 md:hidden items-center justify-center fixed h-screen p-2 top-0 w-full flex overflow-auto">
      <div className="bg-white w-[90%] p-2">
        <div className="w-full rtl">
          <button onClick={() => setOpen(!isOpen)}>
            <AiOutlineCloseSquare size={35} />
          </button>
        </div>
        <div className="grid grid-rows-1 gap-2 rounded-xl border-2 border-[#192655] w-full">
          <div className="w-full flex flex-col">
            {/* hellp */}
            <div className="w-full font-Vazirmatn text-lg rtl text-justify  p-3 font-bold flex items-center justify-center">
              برای محاسبه دیه تصادف ، سقط جنین و ... اطلاعات زیر را وارد کنید و
              بر روی محاسبه کلیک کنید.
            </div>
            {/* year */}
            <div className="w-full flex-col flex rtl p-2">
              <div className="w-full font-Vazirmatn text-lg rtl  font-bold rtl ">
                سال دیه
              </div>
              <select
                className="w-full outline-none h-12 border-2 rounded-xl border-[#B2D3BE] text-lg"
                name="year"
                id="year"
                {...register("year", {
                  required: "لطفا سال دیه را وارد کنید ",
                })}
                onChange={handleValueChange}
              >
                <option></option>
                {year
                  .sort((a, b) => b - a)
                  .map((item) => {
                    return (
                      <>
                        <option value={item}>{item}</option>
                      </>
                    );
                  })}
              </select>
            </div>
            {errors.year && (
              <p className="flex items-center text-red-500 font-Vazirmatn text-xl justify-center font-bold">
                {errors.year.message}
              </p>
            )}
          </div>
          {/* gender */}
          <div className="w-full">
            <div className="flex w-full  items-center justify-center rtl w-full">
              <div className="text-lg font-bold font-Vazirmatn w-full p-2">
                جنسیت
              </div>
              <div className="w-full ">
                <input
                  type="radio"
                  className=" w-4 h-4 rtl"
                  name="gender"
                  value={
                    diye.gender === ""
                      ? "زن"
                      : diye.gender === "مرد"
                      ? "زن"
                      : diye.gender
                  }
                  id="gender"
                  onChange={handleValueChange}
                />
                <label className="text-lg mr-3 font-bold font-Vazirmatn">
                  زن
                </label>
                <input
                  type="radio"
                  className="mr-10 w-4 h-4 rtl"
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
                <label className="text-lg mr-3 font-bold font-Vazirmatn">
                  مرد
                </label>
              </div>
            </div>
          </div>
          {/* form */}
          <form
            className="w-full flex-col flex rtl p-2 "
            onSubmit={handleSubmit(() => {
              reset();
              submit(diye);
            })}
          >
            <div className="w-full  bg-white flex flex-col rounded-3xl">
              <div className="w-full font-Vazirmatn text-lg rtl  font-bold rtl ">
                نوع دیه
              </div>
              <select
                className="w-full outline-none h-12 border-2 rounded-xl border-[#B2D3BE] text-lg"
                name="type"
                id="type"
                {...register("type", {
                  required: "نوع دیه را انتخاب کنید.",
                })}
                onChange={handleValueChange}
              >
                <option></option>
                <option value="قتل نفس">قتل نفس</option>
                <option value="جنین">جنین</option>
                <option value="اعضای بدن">اعضای بدن</option>
              </select>
              {errors.type && (
                <p className="flex items-center text-red-500 font-Vazirmatn text-xl justify-center font-bold">
                  {errors.type.message}
                </p>
              )}
              <div className="w-full rtl ">
                {diye.type === "جنین" ? (
                  <>
                    <div className="w-full rtl">
                      <label className=" text-lg w-52 rtl font-Vazirmatn">
                        براساس تکامل جنین:
                      </label>
                    </div>
                    <select
                      id="fetus"
                      {...register("fetus", {
                        required: "وضعیت جنین را مشخص نمایید",
                      })}
                      className="w-full font-Vazirmatn text-lg border-2 rounded-xl h-12 mt-4 text-lg  flex outline-none border-[#B2D3BE]"
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
                    {diye.type === "اعضای بدن" ? (
                      <>
                        <div className="w-full grid grid-cols-2 gap-3 mt-5">
                          <div className="w-full">
                            <label className="text-lg w-40 font-Vazirmatn w-full">
                              نام عضو بدن:
                            </label>
                            <select
                              id="bodypartName"
                              {...register("bodypartName", {
                                required: "نام عضو آسیب دیده را انتخاب کنید ",
                              })}
                              className="w-full border-2 font-Vazirmatn rounded-xl h-14 mt-4 text-lg  flex outline-none border-[#8EACCD]"
                              onChange={handleValueChange}
                              name="bodypartName"
                            >
                              <option></option>
                              <option value="بینایی">بینایی</option>
                              <option value="چشایی">چشایی</option>
                              <option value="بینی">بینی</option>
                            </select>
                          </div>

                          <div className="w-full">
                            <label className=" text-lg w-40 font-Vazirmatn w-full">
                              حالت‌های نقص عضو:
                            </label>
                            <select
                              id="memberviolation"
                              {...register("memberviolation", {
                                required: "حالت نقص عضو را انتخاب کنید ",
                              })}
                              className="w-full font-Vazirmatn border-2 rounded-xl h-14 mt-4 text-lg  flex outline-none border-[#8EACCD]"
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
                                    قطع کردن یا از بین بردن نرمه پایین استخوان
                                    بینی
                                  </option>
                                  <option value="از بین بردن تمام نرمه یا تمام و یا مقداری از استخوانبینی (دفعتا)">
                                    از بین بردن تمام نرمه یا تمام و یا مقداری از
                                    استخوان بینی (دفعتا)
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
                                        اگر با جنایت بر غیر زبان ، چشایی از بین
                                        برود یا نقصان پیدا کند
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
                                        از بین بردن یا بیرون آوردن هر یک از دو
                                        چشم از حدقه
                                      </option>
                                    </>
                                  )}
                                </>
                              )}
                            </select>
                          </div>
                          {errors.bodypartName && (
                            <p className="flex items-center text-red-500 font-Vazirmatn text-lg justify-center font-bold rtl">
                              {errors.bodypartName.message}
                            </p>
                          )}
                          {errors.memberviolation && (
                            <p className="flex items-center text-red-500 font-Vazirmatn text-lg justify-center font-bold rtl">
                              {errors.memberviolation.message}
                            </p>
                          )}
                        </div>
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
                                class="ml-2 text-lg font-Vazirmatn   text-gray-900 dark:text-gray-300 mr-2 "
                              >
                                قتل در ماه حرام یا مکه مکرمه واقع شده
                              </label>
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
              <div className=" items-center justify-center flex w-full">
                <button
                  className="w-full  border-2 p-2 m-5
           rounded-lg border-[#D7E5CA] bg-[#8EACCD]
            text-white text-xl font-bold hover:shadow shadow-2xl items-center justify-center flex"
                >
                  <BsJournalPlus size={35} />
                </button>
              </div>
            </div>
          </form>
          <div>
            <div className="font-Vazirmatn w-[100%] text-2xl flex items-center justify-center p-2 font-bold">
              نتیجه
            </div>
            <div className="w-full flex flex-col gap-2 p-2 rtl">
              {calculator.map((item) => {
                let x = calculator.length;
                return (
                  <>
                    <div className="flex flex-col">
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
                    </div>
                    {/* <hr className="border-2 border-[#000]"/> */}
                  </>
                );
              })}
              <div className="w-full flex items-center justify-center">
                <button
                  className="w-full font-Vazirmatn border-2 
           rounded-xl border-[#D7E5CA] bg-[#D7E5CA]
           text-xl font-bold hover:shadow shadow-2xl  flex items-center justify-center"
                >
                  <CiCalculator2 size={35} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && window.location.assign("/")}
    </div>
  );
};

export default PopUpModalMobile;
