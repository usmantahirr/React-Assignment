import { useEffect } from "react";

import { useAuthenticateSpotify } from "../hooks/useAuthenticateSpotify";
import FullPageLoader from "../components/FullPageLoader";
import AuthContext from "./authContext";
import ErrorLayout from "../layouts/ErrorLayout";

const AuthContextContainer = ({ children }) => {
  const { mutate, isLoading, isError, data, error } = useAuthenticateSpotify();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      mutate();
    }
  }, [mutate]);

  const renderBody = () => {
    if (isLoading) {
      return <FullPageLoader message="Authentication in process..." />;
    }

    if (isError) {
      return (
        <ErrorLayout message={error?.message}>
          <button onClick={() => mutate()}>Try again</button>
        </ErrorLayout>
      );
    }

    if (!localStorage.getItem("token")) {
      return (
        <ErrorLayout message="Token not found">
          <button onClick={() => mutate()}>Try again</button>
        </ErrorLayout>
      );
    }

    return children;
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!data?.data,
      }}
    >
      {renderBody()}
    </AuthContext.Provider>
  );
};

export default AuthContextContainer;
