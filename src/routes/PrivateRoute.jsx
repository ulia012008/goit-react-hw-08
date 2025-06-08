import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";

export default function PrivateRoute({ component: Component }) {
  if (!Component) {
    throw new Error("Component prop is required for PrivateRoute");
  }
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  if (isRefreshing) return <p>Loading...</p>;

  return isLoggedIn ? <Component /> : <Navigate to="/login" />;
}
