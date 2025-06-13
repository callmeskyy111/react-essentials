function Tabs({ children, buttons, buttonsContainer }) {
  // Setting Component-Types dynamically
  const BtnsContainer = buttonsContainer;
  // Alternative: Default Props.
  return (
    <>
      <BtnsContainer>{buttons}</BtnsContainer>
      {children}
    </>
  );
}

export default Tabs;
