import axios from "axios";
import { useMutation } from "react-query";

import { encodedString } from "../utils/base64Utils";
import configs from "../../config";

const { authUrl, clientId, clientSecret } = configs.api;

const fetchToken = () =>
  axios.post(
    authUrl,
    {
      grant_type: "client_credentials",
    },
    {
      headers: {
        Authorization: `Basic ${encodedString(`${clientId}:${clientSecret}`)}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

export const useAuthenticateSpotify = () =>
  useMutation(fetchToken, {
    onSuccess: (data) => {
      const token = data.data.access_token;
      localStorage.setItem("token", token || "");
    },
  });
