import axios from "axios";

export const APIService = async (url,method, body, params) => {

   const roles = "Admin";
   const access = sessionStorage.getItem('access')
  if (window.navigator.onLine) {
    return await axios({
      method: method,
      baseURL: process.env.REACT_APP_BASEURL,
      url: url,
      data: body,
       headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        // "Content-Type":"application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization":`Bearer ${access}`
        // Authorization:`Bearer ${access}`
      }
    })
      .then((e) => {
        if (roles === null || undefined || "") {
          sessionStorage.clear();
          // navigate('/')
        } 
  
        else if (e.status === 200 || e.status === 201) {
          return {
            status: "success",
            data: e?.data,
          };
        } else {
          return {
            status: "error",
            message: e.status && e.statusText,
          };
        }
      })
      .catch((e) => {
        if (e.message === "Network Error") {
          // navigate("/common/networkIssue");
       
       

        }
        else if(e?.response?.status === 503){
          window.location.href = '/service-unavailable'
        }
        
        else if(e?.response?.status === 400|| e?.response?.status === 500) {
            // handle error here
        } 
        // else if (e.response.status === 401 || e.response.status === 403) {
        //   // UNCOMMENT THIS CODE WHEN API IS READY
        //   const refreshToken =
        //     typeof window !== "undefined"
        //       ? sessionStorage.getItem("RefreshToken")
        //       : "";
        //   if (e.response.status === 401) {
        //     axios
        //       .post(`${AUTH_BASE_URL}/api/refresh_token/`, {
        //         refresh: refreshToken,
        //       })
        //       .then((token) => {
        //         const { data } = token;
        //         sessionStorage.setItem("AccessToken", data.access);
        //         // navigate(0);
        //         window.location.reload()
        //         // return axios.request(e.config)
        //         // sessionStorage.setItem("refreshToken", data.refresh);
        //         // navigate(window.location.pathname);
        //       });
        //   }

        //   // REMOVE THIS CODE WHEN API IS READY
        //   // errorMessage(e?.response?.data?.httpStatus);
        //   // navigate("/login");
        //   // sessionStorage.clear();
        //   // localStorage.clear();
        // }
        if (roles === null || undefined || "") {
          // navigate("/auth/login");
        }
        // return Promise.reject(e);
      });
  } else {
    // navigate("/common/internetIssue");
  }
};
