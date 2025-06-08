import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import { login } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, actions) => {
        dispatch(login(values));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
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
          Login
        </button>
      </Form>
    </Formik>
  );
}
