import axios from "axios";
import { Formik, Form, Field } from "formik";

interface RegisterValues {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

async function fetchRegister(values: RegisterValues) {
  const { data, status } = await axios.post(
    "https://api.escuelajs.co/api/v1/users",
    values,
  );
  console.log(data, status);
}

const RegisterPage = () => {
  const initialValues: RegisterValues = {
    name: "John",
    email: "",
    password: "",
    avatar: "",
  };

  return (
    <div>
      <h1>Sign up</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          fetchRegister(values);
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="name">First Name</label>
          <Field id="name" name="name" placeholder="Name" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="Email" />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="Password"
            type="password"
          />

          <label htmlFor="avatar">Avatar</label>
          <Field id="avatar" name="avatar" placeholder="Avatar" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterPage;
