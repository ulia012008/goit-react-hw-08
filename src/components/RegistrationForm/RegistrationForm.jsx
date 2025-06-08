import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label className={css.label}>
          Name
          <Field type="text" name="name" className={css.input} required />
        </label>
        <label className={css.label}>
          Email
          <Field type="email" name="email" className={css.input} required />
        </label>
        <label className={css.label}>
          Password
          <Field
            type="password"
            name="password"
            className={css.input}
            required
          />
        </label>
        <button type="submit" className={css.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
