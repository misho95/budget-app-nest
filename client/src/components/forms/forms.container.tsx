const FormContainer = ({ children }) => {
  return (
    <div className="bg-neutral-900 w-full min-h-screen flex justify-center items-center">
      {children}
    </div>
  );
};

export default FormContainer;
