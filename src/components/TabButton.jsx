function TabButton({ children, onSelect }) {
    console.log(`TabContent Component rendering.. ✔️`);
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

export default TabButton;
