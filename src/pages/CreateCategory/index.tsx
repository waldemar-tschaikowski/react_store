import axios from "axios";
import { Formik, Form, Field } from "formik";

interface CategoryFormValues {
  name: string;
  image: string;
}

const CreateCategory = () => {
  const initialValues: CategoryFormValues = {
    name: "Food",
    image: "",
  };

  const fetchCreateCategory = async (
    values: CategoryFormValues,
    resetForm: () => void,
  ) => {
    try {
      const { data } = await axios.post(
        "https://api.escuelajs.co/api/v1/categories/",
        values,
      );

      console.log(data);

      alert(`Создано: ${data.name}`);

      resetForm();
    } catch (e: any) {
      alert(`Ошибка: ${e.message}`);
    }
  };

  return (
    <div>
      <h1>Create Category</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          fetchCreateCategory(values, actions.resetForm);
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <label htmlFor="name">Category Name</label>
          <Field id="name" name="name" placeholder="Name" />

          <label htmlFor="image">Image</label>
          <Field id="image" name="image" placeholder="Image" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateCategory;
