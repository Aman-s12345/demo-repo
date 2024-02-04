
import { FaArrowRight } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logout } from "../services/operations/authAPI"
import ConfirmationModal from "../components/Common/ConfirmationModal"
import { VscSignOut } from "react-icons/vsc"
import { useState, useEffect } from "react";
import Footer from "../components/Common/Footer";

import { createimage, createtext, deletetext, deleteimage } from "../services/operations/authAPI"


// Image and Video Import
import Banner from "../assets/Images/banner.mp4"

import HighlightText from "../components/core/HomePage/HighlightText"



function Dashboard() {
  const { loading: authLoading } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.auth)
  console.log(user);
  const { image } = useSelector((state) => state.cart)
  const { text } = useSelector((state) => state.cart)
  const { token } = useSelector((state) => state.auth)
  const [confirmationModal, setConfirmationModal] = useState(null)
  const [rtspUrl, setRtspUrl] = useState("");
  const [textdata, settextdata] = useState("");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState(`${Banner}`);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const imageUrl = image.replace(/['"]+/g, '');


  const onSubmitHandler = (event) => {
    event.preventDefault();
    setUrl(rtspUrl);


    setRtspUrl("");

  };
  useEffect(() => {
    console.log(url);
  }, [url]);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };
  const onSubmitHandlerImage = async (event) => {
    event.preventDefault();
    console.log("File to upload:", file);
    dispatch(createimage(user.email, file));

  };
  const onSubmitHandlerText = (event) => {
    event.preventDefault();
    dispatch(createtext(user.email, textdata));

    // Clear the input field after submission

  };





  if (token == null) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }
  if (authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div>
      {/* Section 1 */}
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
        {/* Become a Instructor Button */}
        {/* rtsp url upload */}
        {<div className="flex flex-col mt-4">
          <form onSubmit={onSubmitHandler}>

            <label className="text-center text-4xl font-semibold pt-5 ">
              <div className="mb-4">
                Copy your<HighlightText text={"RTSP URL"} /> here
              </div>


              <div>
                <input
                  className="  text-richblack-800 w-full h-15 text-lg"
                  type="text"

                  placeholder="Copy your RTSP URL here"
                  value={rtspUrl}
                  onChange={(e) => setRtspUrl(e.target.value)}
                />

                <button type="submit" className="pt-3 border bg-yellow-50 cursor-pointer rounded-md py-2 px-4 mt-3 text-richblack-900">
                  Submit
                </button>

              </div>
            </label>
          </form>


        </div>
        }

        {/* logo */}
        {
          <div></div>
        }

        {/* CTA Buttons */}


        {/* Video */}
        <div className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
          <video
            className="shadow-[20px_20px_rgba(255,255,255)]"
            muted
            loop
            autoPlay
            controls
          >
            <source src={url}  />
          </video>
        </div>


        {/* image upload */}
        {image === "" && <div className="flex flex-col mt-4">
          <form onSubmit={onSubmitHandlerImage}>

            <label className="text-center text-2xl  pt-3 ">
              <div className="mb-4">
                Upload your Logo of stream
              </div>


              <div>
                <input
                  className="  text-richblack-800 w-full h-15 text-lg"
                  type="file"
                  onChange={handleFileChange}


                />

                <button type="submit" className="pt-3 border bg-yellow-50 cursor-pointer rounded-md py-2 px-4 mt-3 text-richblack-900">
                  Submit
                </button>

              </div>
            </label>
          </form>


        </div>
        }


        {
          image !== "" && <div className="text-center w-full text-xl  pt-3 ">

            <img src={imageUrl}></img>
            <button onClick={() => dispatch(deleteimage(user.email))} className=" ml-3 pt-3 border bg-yellow-50 cursor-pointer rounded-md py-2 px-4 mt-3 text-richblack-900">
              Delete Image
            </button>

          </div>
        }


        {/* text upload */}
        {text === "" && <div className="flex flex-col mt-4">
          <form onSubmit={onSubmitHandlerText}>

            <label className="text-center text-2xl  pt-3 ">
              <div className="mb-4">
                Write your live stream description
              </div>


              <div>
                <input
                  className="  text-richblack-800 w-full h-15 text-lg"
                  type="text"

                  placeholder="Write your description"
                  value={textdata}
                  onChange={(e) => settextdata(e.target.value)}
                />

                <button type="submit" className="pt-3 border bg-yellow-50 cursor-pointer rounded-md py-2 px-4 mt-3 text-richblack-900">
                  Submit
                </button>

              </div>
            </label>
          </form>


        </div>
        }
        {
          text !== "" && <div className="text-center w-full text-xl  pt-3 ">
            <p className="  text-richblack-50">{textdata}</p>
            <button onClick={() => dispatch(deletetext(user.email))} className=" ml-3 pt-3 border bg-yellow-50 cursor-pointer rounded-md py-2 px-4 mt-3 text-richblack-900">
              Delete Text
            </button>

          </div>
        }





        <a
          href="https://portfolio-two-smoky-82.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
            <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
              <p>Lets Chat (Go to my website)</p>
              <FaArrowRight />
            </div>
          </div>
        </a>
        <div className="flex flex-col pt-4">
          <button
            onClick={() =>
              setConfirmationModal({
                text1: "Are you sure?",
                text2: "You will be logged out of your account.",
                btn1Text: "Logout",
                btn2Text: "Cancel",
                btn1Handler: () => dispatch(logout(navigate)),
                btn2Handler: () => setConfirmationModal(null),
              })
            }
            className="px-8 py-2 text-sm font-medium text-richblack-300"
          >
            <div className="flex items-center gap-x-2">
              <VscSignOut className="text-lg" />
              <span>Logout</span>
            </div>
          </button>
        </div>

        {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}




      </div>
      <div className="pt-4 w-full">
        <Footer />
      </div>



    </div>

  )
}

export default Dashboard
