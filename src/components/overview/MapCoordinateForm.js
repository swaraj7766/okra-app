import { Button, Form, InputNumber } from "antd";
import React, { useEffect, useState } from "react";

const MapCoordinateForm = (props) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    //console.log("Finish:", values);
    props.flyToMap(values);
    form.resetFields();
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <Form
        form={form}
        name="horizontal_login"
        layout="inline"
        onFinish={onFinish}
      >
        <Form.Item
          name="lat"
          style={{ marginBottom: "0px" }}
          rules={[
            {
              required: true,
              message: "Field is required!",
            },
            () => ({
              validator(_, value) {
                if (!value || isLatitude(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("latitude value must be between -90 to 90!")
                );
              },
            }),
          ]}
        >
          <InputNumber
            controls={false}
            placeholder="latitude"
            style={{ width: 250 }}
          />
        </Form.Item>
        <Form.Item
          name="lng"
          style={{ marginBottom: "0px" }}
          rules={[
            {
              required: true,
              message: "Field is required!",
            },
            () => ({
              validator(_, value) {
                if (!value || isLongitude(value)) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Longitude value must be between -180 to 180!")
                );
              },
            }),
          ]}
        >
          <InputNumber
            controls={false}
            placeholder="Longitude"
            style={{ width: 250 }}
          />
        </Form.Item>
        <Form.Item shouldUpdate>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
            >
              Fly To Entered Coordinate
            </Button>
          )}
        </Form.Item>
      </Form>
    </div>
  );
};

export default MapCoordinateForm;

const isLatitude = (num) => isFinite(num) && Math.abs(num) <= 90;
const isLongitude = (num) => isFinite(num) && Math.abs(num) <= 180;
