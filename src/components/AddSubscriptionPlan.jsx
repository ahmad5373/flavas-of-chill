import { Dialog, Transition } from "@headlessui/react";
import { useFormik } from "formik";
import { Fragment, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
// import * as Yup from "yup";
import CustomInput from "../components/Custom/CustomInput";
import { FaRegTrashAlt } from "react-icons/fa";
import ReactSelect from "react-select";
import makeAnimated from 'react-select/animated';
// import { toast } from "react-toastify";
const animatedComponents = makeAnimated();

export default function AddSubscriptions({ isOpen, setIsOpen, category }) {
  function closeModal() {
    setIsOpen(false);
  }
  const [loading, setLoading] = useState(false);
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
    //   name: Yup.string().required("Please Enter subscription Name"),
    //   description: Yup.string().required("Please Enter subscription Description"),
    //   price: Yup.number().required("Please Enter subscription Price"),
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

          createdAt: Date.now(),
        };
        // await createsubscription(payload, files);
        setIsOpen(false);
      } catch (e) {
        console.log(e);
        return console.error(e?.message || "Something Went Wrong!, Please try Again", "error");
      }
    },
  });

  const options = [
    {
      label: "Yearly",
      value: "yearly",
    },
    {
      label: "Monthly",
      value: "monthly",
    },
    {
      label: "Weekly",
      value: "weekly",
    },
    {
      label: "Per Sound",
      value: "soundBase",
    }
  ]

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
                    <p>Add new Subsription </p>
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
                      <ReactSelect
                        placeholder="Select Duration"
                        // closeMenuOnSelect={false}
                        // value={facilty}
                        onChange={(e) => setFacilty(e)}
                        defaultValue={[options[0]]}
                        options={options}
                        components={{ Option: CustomOption, ...animatedComponents }}
                      />
                      <div className="grid grid-cols-12 gap-4">
                        {/* Name Input */}
                        <div className="col-span-12">
                          <CustomInput
                            name={"name"}
                            label={"subscription Name"}
                            placeholder="Hover subscription Ground"
                            type="text"
                            error={validation.errors.name}
                            onChange={validation.handleChange}
                            value={validation.values.name || ""}
                          />
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
                      </div>
                      <div>
                        <button
                          // disabled={loading}
                          type="submit"
                          className="font-medium bg-gray-150 px-9 w-full rounded py-2.5 text-white disabled:bg-opacity-25"
                        >
                          {loading ? "Creating..." : "Create"}
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