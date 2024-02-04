import { toast } from "react-hot-toast"
import { setLoading , setUser, setToken } from "../../slices/authSlice"
import { apiConnector } from "../apiConnector"
import { endpoints } from "../apis"
import { removeFromImage , removeFromText} from "../../slices/cartSlice"
import { addToImage ,addToText   } from "../../slices/cartSlice"

const {
  SENDOTP_API,
  SIGNUP_API,
  LOGIN_API,
  CREATE_IMAGE,
  DELETE_IMAGE,
  CREATE_TEXT,
  DELETE_TEXT,
} = endpoints

export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      })
      console.log("SENDOTP API RESPONSE............", response)

      console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("OTP Sent Successfully")
      navigate("/verify-email")
    } catch (error) {
      console.log("SENDOTP API ERROR............", error)
      toast.error("Could Not Send OTP")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function signUp(
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  otp,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      })

      console.log("SIGNUP API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Signup Successful")
      navigate("/login")
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Signup Failed")
      navigate("/signup")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })

      console.log("LOGIN API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("Login Successful")
      dispatch(setToken(response.data.token))
      dispatch(setUser(response.data.user));
      navigate("/dashboard")
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}


export function createimage(email, thumbnailFile) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('thumbnailImage', thumbnailFile);

      const response = await apiConnector("POST", CREATE_IMAGE, formData, {
        'Content-Type': 'multipart/form-data', // Important for handling form data
      });

      console.log("Image uploaded response: ", response);

      if (!response.data.success) {
        console.log("Image upload API error: ", response);
        throw new Error(response.data.message);
      }
      dispatch(addToImage(response.data.image));

      toast.success("Image upload successful");
    } catch (error) {
      console.log("Image upload API error: ", error);
      toast.error("Image upload failed");
    }

    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function deleteimage(email) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", DELETE_IMAGE , {
        email
      });

      console.log("Image deleted response: ", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(removeFromImage());

      toast.success("Logo deleted successful");
    } catch (error) {
      console.log("Logo delete krne me  error: ", error);
      toast.error("Can't delete the logo from Db");
    }

    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function createtext(email , text) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", CREATE_TEXT , {
        email,
        text
      });

      console.log("text deleted response: ", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(addToText(response.data.text));

      toast.success("Description added successful");
    } catch (error) {
      console.log("Text upload krne me  error: ", error);
      toast.error("Cannt upload text to db");
    }

    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function deletetext(email) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));

    try {
      const response = await apiConnector("POST", DELETE_TEXT , {
        email
      });

      console.log("Text deleted response: ", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(removeFromText());

      toast.success("Description  deleted successfully");
    } catch (error) {
      console.log("Text delete krne me  error: ", error);
      toast.error("Can't delete text from Db");
    }

    dispatch(setLoading(false));
    toast.dismiss(toastId);
  };
}

export function logout(navigate) {
  return (dispatch) => {

    dispatch(setToken(null))
 
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}


