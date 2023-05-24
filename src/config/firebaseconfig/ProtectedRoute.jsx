import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "./firebaseMethods";

const ProtectedRoute = ({ Component }) => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoader(true);
    checkAuth()
      .then((uid) => {
        setLoader(false);
        console.log("User Logged In");
        navigate("/dashboard");
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
        navigate("/login");
      });
  }, []);
  return (
    <>
      <div>{loader ? <h1>Loading...</h1> : <Component />}</div>
    </>
  );
};

export default ProtectedRoute;
