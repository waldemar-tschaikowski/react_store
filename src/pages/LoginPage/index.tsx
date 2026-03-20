import axios from "axios";
import { Formik, Form, Field } from "formik";
import useAuth from "../../hooks/useAuth";

interface LoginValues {
  email: string;
  password: string;
}

const PROFILE_URL = "https://api.escuelajs.co/api/v1/auth/profile";

async function fetchLogin(values: LoginValues) {
  const LOGIN_URL = "https://api.escuelajs.co/api/v1/auth/login";
  const { data, status } = await axios.post(LOGIN_URL, values);
  console.log(data, status);
  const { access_token } = data;
  localStorage.setItem("access_token", access_token);
}

const LoginPage = () => {
  const { setUser } = useAuth();
  const initialValues: LoginValues = {
    email: "",
    password: "",
  };
  return (
    <div>
      <h1>Sign in</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          await fetchLogin(values);

          const accessToken = localStorage.getItem("access_token");

          const config = {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          };
          // получили юзера с сервера по токену
          const { data } = await axios.get(PROFILE_URL, config);
          // сохранили этого юзера в контекст
          setUser(data);

          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="Email" type="email" />

          <label htmlFor="password">Password</label>
          <Field
            id="password"
            name="password"
            placeholder="Password"
            type="password"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
