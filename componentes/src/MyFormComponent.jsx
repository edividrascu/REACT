import useLoginForm from './useLoginForm';

const MyFormComponent = () => {
  const { formData, handleInputChange } = useLoginForm();

  return (
    <form>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyFormComponent;
