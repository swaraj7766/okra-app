import { Navigate } from "react-router-dom";
import jwt from "jsonwebtoken";
import { useDispatch } from "react-redux";
import { setUser } from "../../features/useAuthSlice";

export default function PrivateRoute({ children }) {
  let auth = useAuth();
  // const user = sessionStorage.getItem("rmsuser");
  // const dispatch = useDispatch();
  // if (auth) {
  //   dispatch(setUser(user));
  // }
  return auth ? children : <Navigate to="/login" replace={true} />;
}

export const useAuth = () => {
  // const token = sessionStorage.getItem("rmstoken");
  // console.log("rendered");
  // try {
  //   const decoded = jwt.decode(token);
  //   if (token && decoded.exp >= new Date().getTime() / 1000) {
  //     return true;
  //   } else return false;
  // } catch (err) {
  //   return false;
  // }
  return true;
};
