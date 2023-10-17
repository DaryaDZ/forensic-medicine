import React,{useState} from 'react'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { useForm } from "react-hook-form";
const PopUpModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [calculator, setCalculator] = useState([]);
  const [diye, setDiye] = useState({
    year: "",
    gender: "",
    type: "",
    bodypartName: "",
    memberviolation: "",
    kill: "",
    fetus: "",
  });
  const year = [
    1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386,
    1387, 1388, 1398, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398,
    1399, 1400, 1401, 1402,
  ];
  const handleValueChange = (e) => {
    setDiye({ ...diye, [e.target.name]: e.target.value });
    // setSate(e.target.value)
  };
  const submit = () => {
    // console.log(diye)

    let newState = [diye, ...calculator];
    setCalculator(newState);
    // console.log(newState)
  };
  return (
    <>
    <div className='bg-gray-900/30 flex items-center justify-center fixed h-screen top-0 w-full'  >
      <div className='w-[70%] bg-white h-[95%]  rounded-3xl p-10' >
        <div className='w-full rtl'>
          <button onClick={()=>setIsOpen(!isOpen)}>
          <AiOutlineCloseSquare size={35}/>
        </button>
        </div>
          {/* form */}
          <div className='grid grid-cols-2 gap-2 top-0  border-2 border-[#192655]'>
            <div className='w-full overflow-auto max-h-[80%]'>
            <div className="font-Vazirmatn w-[100%] text-4xl flex items-center justify-center p-5 font-bold">
              نتیجه
              </div>
              <div className="w-[85%] flex flex-col gap-2 rtl">
              {calculator.map((item, index) => {
                let x = calculator.length;
                return (
                  <>
                    <div className="flex flex-col">
                      <label className="font-Vazirmatn text-2xl font-bold mt-2">
                        سال دیه :{item.year}
                      </label>

                      <label className="font-Vazirmatn text-2xl font-bold mt-2">
                        جنسیت : {item.gender}
                      </label>
                      <label className="font-Vazirmatn text-2xl font-bold mt-2">
                        نوع دیه : {item.type}
                      </label>
                      {item.fetus !== "" ? (
                        <label className="font-Vazirmatn text-2xl font-bold mt-2">
                          وضعیت تکامل جنین: {item.fetus}
                        </label>
                      ) : (
                        ""
                      )}
                      {item.bodypartName !== "" ? (
                        <label className="font-Vazirmatn text-2xl font-bold mt-2">
                          نام عضو بدن: {item.bodypartName}
                        </label>
                      ) : (
                        ""
                      )}
                      {item.memberviolation !== "" ? (
                        <label className="font-Vazirmatn text-2xl font-bold mt-2">
                          حالت های نقص عضو: {item.memberviolation}
                        </label>
                      ) : (
                        ""
                      )}
                      {item.kill !== "" ? (
                        <label className="font-Vazirmatn text-2xl font-bold mt-2">
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
                {/* 
               <button className="w-[20%] font-Vazirmatn border-4 p-5 m-5
                 rounded-full border-[#D7E5CA] bg-[#D7E5CA]
                 text-xl font-bold hover:shadow shadow-2xl">
                  محاسبه
                   </button> */}
              </div>
            </div>
            </div>

          <div className='w-full rtl p-5'>
          <label className="text-4xl mb-10  mt-2 font-bold items-center flex justify-center font-Vazirmatn">
          محاسبه دیه
            </label>
            
          <div className=" w-[100%] h-[94%] flex flex-col rtl">
            <div className="w-full font-Vazirmatn text-2xl font-bold flex items-center justify-center">
              برای محاسبه دیه تصادف ، سقط جنین و ... اطلاعات زیر را وارد کنید و
              بر روی محاسبه کلیک کنید.
            </div>
            <div className="w-full bg-white h-32 flex flex-col p-3 items-center justify-center rounded-3xl">
              <div className="w-full  flex items-center p-1">
                <lable className="text-2xl font-bold flex items-center font-Vazirmatn">
                  سال دیه:
                </lable>

                <select
                  id="year"
                  {...register("year", {
                    required: "لطفا سال دیه را وارد کنید ",
                  })}
                  className="w-[80%] border-4 rounded-xl h-16 mt-2 text-2xl
                 flex outline-none mr-10 border-[#8EACCD]"
                  name="year"
                  onChange={handleValueChange}
                >
                  <option></option>
                  {year
                    .sort((a, b) => b - a)
                    .map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                </select>
              </div>

              {errors.year && (
                <p className="flex items-center text-red-500 font-Vazirmatn text-xl justify-center font-bold">
                  {errors.year.message}
                </p>
              )}
            </div>

            <div className="w-full h-32 bg-white p-5 flex items-center flex-col  rounded-3xl">
              <div className="w-full h-16 flex items-center  p-1 ">
                <lable className="text-2xl font-bold font-Vazirmatn">
                  جنسیت:
                </lable>
                <input
                  type="radio"
                  className="mr-24 w-6 h-6 "
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
                <label className="text-xl mr-3 font-bold font-Vazirmatn">
                  زن
                </label>
                <input
                  type="radio"
                  className="mr-24 w-6 h-6 "
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
                <label className="text-xl mr-3 font-bold font-Vazirmatn">
                  مرد
                </label>
              </div>

              {/* {errors.gender  && (
                  <p className="flex items-center text-red-500 font-Vazirmatn text-xl justify-center font-bold">{errors.gender.message}</p>)} */}
            </div>
            <form
              onSubmit={handleSubmit(() => {
                reset();
                submit(diye);
              })}
            >
              <div className="w-full  bg-white p-5  flex flex-col rounded-3xl">
                <div className="flex items-center">
                  <lable className="text-2xl font-bold font-Vazirmatn">
                    نوع دیه:
                  </lable>
                  <select
                    {...register("type", {
                      required: "نوع دیه را انتخاب کنید.",
                    })}
                    id="type"
                    className="w-[80%] font-Vazirmatn text-3xl border-4 rounded-xl h-16 mt-2 text-2xl  flex outline-none mr-10 border-[#8EACCD]"
                    name="type"
                    onChange={handleValueChange}
                  >
                    <option></option>
                    <option value="قتل نفس">قتل نفس</option>
                    <option value="جنین">جنین</option>
                    <option value="اعضای بدن">اعضای بدن</option>
                  </select>
                </div>
                {errors.type && (
                  <p className="flex items-center text-red-500 font-Vazirmatn text-xl justify-center font-bold">
                    {errors.type.message}
                  </p>
                )}
                {diye.type === "قتل نفس" ? (
                  <>
                    <div className="flex items-center mt-10">
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value="قتل در ماه حرام یا مکه مکرمه واقع شده "
                        name="kill"
                        onChange={handleValueChange}
                        className="w-6 h-6 text-blue-600 bg-gray-100 font-Vazirmatn border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label
                        for="default-checkbox"
                        class="ml-2 text-3xl font-Vazirmatn   text-gray-900 dark:text-gray-300 mr-2 "
                      >
                        قتل در ماه حرام یا مکه مکرمه واقع شده
                      </label>
                    </div>
                  </>
                ) : (
                  <>
                    {diye.type === "جنین" ? (
                      <>
                        <div className="flex items-center mt-5 flex-col justify-center">
                          <div className="w-full rtl">
                            <label className=" text-2xl w-52 rtl font-Vazirmatn">
                              براساس تکامل جنین:
                            </label>
                          </div>
                          <select
                            id="fetus"
                            {...register("fetus", {
                              required: "وضعیت جنین را مشخص نمایید",
                            })}
                            className="w-[70%] font-Vazirmatn text-2xl border-4 rounded-xl h-16 mt-4 text-2xl  flex outline-none border-[#8EACCD]"
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
                        </div>
                      </>
                    ) : (
                      <>
                        {diye.type === "اعضای بدن" ? (
                          <>
                            <div className="w-full grid grid-cols-2 gap-3 mt-5">
                              <div>
                                <label className="text-2xl w-40 font-Vazirmatn">
                                  نام عضو بدن:
                                </label>
                                <select
                                  id="bodypartName"
                                  {...register("bodypartName", {
                                    required:
                                      "نام عضو آسیب دیده را انتخاب کنید ",
                                  })}
                                  className="w-[80%] border-4 font-Vazirmatn rounded-xl h-16 mt-4 text-2xl  flex outline-none border-[#8EACCD]"
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
                                <label className=" text-2xl w-40 font-Vazirmatn">
                                  حالت‌های نقص عضو:
                                </label>
                                <select
                                  id="memberviolation"
                                  {...register("memberviolation", {
                                    required: "حالت نقص عضو را انتخاب کنید ",
                                  })}
                                  className="w-[80%] font-Vazirmatn border-4 rounded-xl h-16 mt-4 text-2xl  flex outline-none border-[#8EACCD]"
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

                <div className="w-full font-Vazirmatn  mt-5 flex items-center justify-center ">
                  <button
                    className="w-[20%] border-4 p-5 m-5
                 rounded-full border-[#D7E5CA] bg-[#8EACCD]
                  text-white text-xl font-bold hover:shadow shadow-2xl "
                  >
                    افزودن
                  </button>

                  <button
                    className="w-[20%] font-Vazirmatn border-4 p-5 m-5
                 rounded-full border-[#D7E5CA] bg-[#D7E5CA]
                 text-xl font-bold hover:shadow shadow-2xl"
                  >
                    محاسبه
                  </button>
                </div>
              </div>
            </form>
          </div>
            </div>
          </div>
         




        </div>
        {isOpen &&window.location.assign('/')}
    </div>
    
    </>
  )
}

export default PopUpModal
