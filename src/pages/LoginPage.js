import React, { useEffect } from "react";
import { Typography, notification, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import {
  clearState,
  loginUser,
  userAuthSelector,
} from "../features/useAuthSlice";

const { Text } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userAuthSelector);

  const onFinish = (values) => {
    //dispatch(loginUser(values));
    navigate("/");
  };

  useEffect(() => {
    sessionStorage.removeItem("rmstoken");
    sessionStorage.removeItem("rmsuser");
    return () => {
      dispatch(clearState());
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isError) {
      notification.error({ message: errorMessage });
      form.resetFields();
      dispatch(clearState());
    }

    if (isSuccess) {
      dispatch(clearState());
      notification.success({ message: "Successfully loggedin !" });
      form.resetFields();
      navigate("/");
    }
  }, [isError, isSuccess]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="container-login">
      <LoginForm onFinish={onFinish} form={form} loading={isFetching} />
      <div className="loginFooter">
        <Text type="secondary">
          Copyright ©2021 Produced by Atop Technologies
        </Text>
        <Text type="secondary">Version 1.0.0</Text>
      </div>
    </div>
  );
};

export default LoginPage;
