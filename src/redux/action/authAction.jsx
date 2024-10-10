import axios from "axios";

export function addLoginApi(body, navigate,setLoading) {
    return async (dispatch) => {
    //   setLoading(true)
    //   dispatch(loginApiReducer({ isLoading: true }));
      axios
        .post(`https://cloud.uipath.com/identity_/connect/token`, body.toString(),{
            headers:{
                "Content-Type":"application/x-www-form-urlencoded"
            }
        })
        .then((e) => {
            let data = e?.data;
            let access = data?.access_token;
            sessionStorage.setItem('ur',1);
            sessionStorage.setItem('access',access)
            navigate('/')
            return data;
        })
        .catch((e) => {
        //   let err = e?.response?.data?.detail || e?.message
        //   dispatch(loginApiReducer({ isLoading: false }));
        //   showToast(err,"error");
        //   setLoading(false)
        });
    };
    // return apiHelper(loginApiReducer, "POST", "/login/", body);
  }