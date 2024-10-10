import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CommonTextFields from '../../../components/common/commonfields/textfield';
import loginbg from "../../../assets/login/login-bg.png";
import loginlogo from  "../../../assets/login/login-logo.png";
import "./login.css"
import { useDispatch } from 'react-redux';
import { addLoginApi } from '../../../redux/action/authAction';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();   
    const formData = new FormData();

// Append each key-value pair to the FormData object
//  formData.append('grant_type', 'client_credentials');
//  formData.append('client_id', '005e14a1-169d-4856-a682-ea8475a30ab2');
//  formData.append('client_secret', 'T1or#iH*46d9H^*j');
//  formData.append('code', '48647893-afed-444d-adcb-dac97753f4ce.711F750354D3E21DCCB0B4E8D9745DE94FA5E20AD3C0C2FA043DA2E07E9FB9EE');
//  formData.append('client_id', 'bb55c0a2-d2cc-407a-9c1e-5f65e12eae77');
//  formData.append('client_secret', 'pZbCUeYYLiJ-VBuHpWYq7LNue_7bUlek737g6jqjSqRF6');
//  formData.append('redirect_uri', 'https://cloud.uipath.com/colanglhoota/DefaultTenant/orchestrator_/swagger/oauth2-redirect.html');
//  formData.append('code_verifier', 'zkQAe-WJA-1qdGG4lEyRaU39K4vSxlHt5cYyzRQawp8');
const urlSearchParams = new URLSearchParams();

// Append each key-value pair to the URLSearchParams object
urlSearchParams.append('grant_type', 'client_credentials');
urlSearchParams.append('client_id', '005e14a1-169d-4856-a682-ea8475a30ab2');
urlSearchParams.append('client_secret', 'bO5EHKkMpnnq!)ip');
urlSearchParams.append('scope','OR.Folders')

 dispatch(addLoginApi(urlSearchParams,navigate))
  };

  return (
      <Box className="login-container" sx={{ backgroundImage:`url(${loginbg})` }}>
        <Box sx={{ width: '50%', maxWidth: 400 }} className="login-box-container">
          <div style={{display:"flex",justifyContent:"center",margin:"10px 0px"}}>
          <img src={loginlogo} />

          </div>
          <Typography variant="h5" align="center">
            Login
          </Typography>
          <div  style={{display:"flex",justifyContent:"center",margin:"10px 20px"}}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <CommonTextFields label={"Email"} placeholder={"user@gmail.com"} />
              </Grid>
              <Grid item xs={12}>
              <CommonTextFields label={"Password"} placeholder={"test@123"} />
              </Grid>
              <Grid item xs={12}>   

                <Button
                  type="submit"
                  sx={{width:"100%"}}
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>
              </Grid>
            </Grid>  

          </form>

          </div>
        </Box>
      </Box>
  );
}

export default LoginForm;