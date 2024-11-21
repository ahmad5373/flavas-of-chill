import { Dialog, Transition } from "@headlessui/react";
import { useFormik } from "formik";
import { Fragment, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import * as Yup from "yup";
import CustomInput from "../Custom/CustomInput";
import { FaRegTrashAlt } from "react-icons/fa";
import ReactSelect from "react-select";
import makeAnimated from 'react-select/animated';
import { toast } from "react-toastify";
const animatedComponents = makeAnimated();

export default function AddPitch({ isOpen, setIsOpen, category }) {
  function closeModal() {
    setIsOpen(false);
  }
  const [files, setFiles] = useState([]);
  const [facilty, setFacilty] = useState([]);
  const [images, setImages] = useState([]);
  const validation = useFormik({
    validateOnChange: false,
    initialValues: {
      name: "",
      description: "",
    },
    // validationSchema: Yup.object({
    //   name: Yup.string().required("Please Enter Pitch Name"),
    //   description: Yup.string().required("Please Enter Pitch Description"),
    //   price: Yup.number().required("Please Enter Pitch Price"),
    //   discount: Yup.number("Please Enter Discount in Numbers").max(
    //     99,
    //     "Discount Should be less than 100%"
    //   ),
    // }),
    onSubmit: async (values) => {
      try {
        // if (!images || images?.length === 0) {
        //   return toast.error("Please Select At least 1 Image", "error");
        // }
        const payload = {
          ...values,

          // categoryID: facilty?.id,
          // categoryName: facilty?.name,
          createdAt: Date.now(),
        };
        // await createPitch(payload, files);
        setIsOpen(false);
      } catch (e) {
        console.log(e);
        return toast.error(e?.message || "Something Went Wrong!, Please try Again", "error");
      }
    },
  });

  const options = [
    {
      label: "Parking",
      value: "parking",
      image: "https://media.istockphoto.com/id/513883690/photo/parking-garage-underground.jpg?s=2048x2048&w=is&k=20&c=vkV0H2oOLWOycBCZ5TRpyfiSmsF333j_4zXzPzC7CLM="
    },
    {
      label: "Camera",
      value: "camera",
      image: "https://images.pexels.com/photos/243757/pexels-photo-243757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      label: "Cafe",
      value: "cafe",
      image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      label: "Seating",
      value: "Seating",
      image: "https://images.pexels.com/photos/434633/pexels-photo-434633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ]
  const handleFile = (e) => {
    const filesSelected = Array.from(e.target.files || []);
    setFiles((prev) => [...filesSelected, ...prev]);
    const urls = filesSelected.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...urls]);
  };
  const handleDelete = (index) => {
    setImages((prev) => prev?.filter((_, i) => i !== index));
    setFiles((prev) => prev?.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex justify-between"
                  >
                    <p>Add new Pitch </p>
                    <div
                      onClick={closeModal}
                      className="border rounded-full flex items-center justify-center w-6 h-6 cursor-pointer hover:border-gray-700"
                    >
                      <RxCross2 />
                    </div>
                  </Dialog.Title>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                    className="mt-2"
                  >
                    <div className="bg-white px-5 py-8 space-y-5">
                      <div className="flex justify-between items-start">
                        <div className="flex justify-between items-center basis-[50%]">
                          <label
                            for="dropzone-file"
                            className="flex items-center w-full cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                          >
                            <div className="flex flex-wrap items-center gap-5 ">
                              <div>
                                <div className="w-16 h-12 border-2 border-green-150 border-dashed rounded-md text-green-150 flex items-center justify-center">
                                  <FaPlus className="w-5 h-5" />
                                </div>
                              </div>
                              <div>
                                <p className="font-semibold">Upload Pitch Image</p>
                                <p className="text-xs text-green-150 font-medium">
                                  <span className="text-gray-400 font-normal">
                                    Drag or Drop a file or{" "}
                                  </span>
                                  Browse
                                </p>
                              </div>
                            </div>
                            <input
                              id="dropzone-file"
                              // type="file"
                              className="hidden"
                              // multiple
                              // onChange={handleFile}
                            />
                          </label>
                        </div>
                        <div className="flex justify-start items-start flex-wrap basis-[50%] gap-3">
                          {/* Images Mapping */}
                          {images?.map((item, index) => {
                            return (
                              <div
                                key={index}
                                className="flex flex-col cursor-pointer w-[100px] h-[100px] justify-between items-center rounded-xl gap-2 relative"
                              >
                                <img
                                  className="object-fill h-80 rounded-xl"
                                  width={300}
                                  height={300}
                                  src={item}
                                  alt=""
                                  key={index}
                                />
                                <div className="absolute top-1 right-1 bg-white rounded-full border border-red-500 p-1">
                                  <FaRegTrashAlt
                                    color="#FF385C"
                                    className="hover:scale-110 basis-[10%] w-4 h-4"
                                    onClick={() => handleDelete(index)}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <ReactSelect
                        placeholder="Select Facilaty"
                        closeMenuOnSelect={false}
                        // value={facilty}
                        onChange={(e) => setFacilty(e)}
                        isMulti
                        defaultValue={[options[0], options[1]]}
                        options={options}
                        components={{ Option: CustomOption, ...animatedComponents }}
                      />
                      <div className="grid grid-cols-12 gap-4">
                        {/* Name Input */}
                        <div className="col-span-12">
                          <CustomInput
                            name={"name"}
                            label={"Pitch Name"}
                            placeholder="Hover Pitch Ground"
                            type="text"
                            error={validation.errors.name}
                            onChange={validation.handleChange}
                            value={validation.values.name || ""}
                          />
                        </div>
                        {/* Description */}
                        <div className="col-span-12">
                          <label
                            htmlFor="first_name"
                            className="block mb-2 font-semibold text-gray-950 dark:text-white capitalize"
                          >
                            Description
                          </label>
                          <textarea
                            rows={4}
                            type="text"
                            name="description"
                            className=" border text-gray-900 outline-none text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="About pitch"
                            onChange={validation.handleChange}
                            value={validation.values.description || ""}
                          />
                          {validation.errors.description && (
                            <div className="text-red-700 text-sm mt-1">
                              {validation.errors.description}
                            </div>
                          )}
                        </div>
                        {/* Price */}
                        <div className="col-span-6">
                          <CustomInput
                            name={"price"}
                            label={"Price"}
                            placeholder="Enter Product Price"
                            type="number"
                            error={validation.errors.price}
                            onChange={validation.handleChange}
                            value={validation.values.price || ""}
                          />
                        </div>
                        {/* Discount */}
                        <div className="col-span-6">
                          <CustomInput
                            name={"discount"}
                            label={"Discount%"}
                            placeholder="Enter Product Discount"
                            type="number"
                            error={validation.errors.discount}
                            onChange={validation.handleChange}
                            value={validation.values.discount || ""}
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          // disabled={loading}
                          type="submit"
                          className="font-medium bg-green-150 px-9 w-full rounded py-2.5 text-white disabled:bg-opacity-25"
                        >
                          {/* {loading ? "Creating..." : "Create"} */}
                          Create
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}


const CustomOption = (props) => {
  const { innerRef, innerProps, data } = props;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      className="flex justify-start gap-3 py-2 px-4 my-2 items-center cursor-pointer hover:bg-gray-200"
    >
      <img
        src={data.image}
        alt={data.label}
        style={{ width: 30, height: 30, marginRight: 10, borderRadius: 1000 }}
      />
      {data.label}
    </div>
  );
};