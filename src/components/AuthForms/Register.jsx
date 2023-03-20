import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, Label } from './Forms.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <input type="text" required name="name" />
      </Label>
      <Label>
        Email
        <input type="email" required name="email" />
      </Label>
      <Label>
        Password
        <input
          type="password"
          required
          placeholder="Including letters and numbers"
          name="password"
        />
      </Label>
      <button type="submit">Register</button>
    </Form>
  );
};
