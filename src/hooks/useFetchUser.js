import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";
import { BASE_URL } from "../utils/constants";

const useFetchUser = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${BASE_URL}/auth/profile`, {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();

        if (data.userInfo) {
          setUser(data.userInfo);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        navigate("/login");
      }
    };

    fetchUser();
  }, [ navigate]);

  return null;
};

export default useFetchUser;
