import axios, { AxiosError } from "axios";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const CreateCategorySchema = Yup.object().shape({
  name: Yup.string(),
  // .min(2, "Too Short!")
  // .max(80, "Too Long!")
  // .required("Required"),
  image: Yup.string().url("Invalid URL").required("Required"),
});

const initialValues = {
  name: "",
  image: "",
};

export const CreateCategoryPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Create Category</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={CreateCategorySchema}
        onSubmit={async (values, { setStatus, setSubmitting }) => {
          try {
            const { status, data } = await axios.post(
              "https://api.escuelajs.co/api/v1/categories",
              values,
            );
            console.log(data);
            if (status === 201) {
              navigate("/categories");
            }
          } catch (error) {
            if (error instanceof AxiosError) {
              setStatus(error.response?.data.message[0] || "Server error");
            }
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ errors, touched, status }) => (
          <Form>
            <Field name="name" placeholder="Name" />
            {touched.name && errors.name && <div>{errors.name}</div>}

            <Field name="image" placeholder="Image URL" />
            {touched.image && errors.image && <div>{errors.image}</div>}

            {status && <div>{status}</div>}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
