const AppContainer = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-neutral-200 flex flex-col gap-10 items-center">
      {children}
    </div>
  );
};

export default AppContainer;
