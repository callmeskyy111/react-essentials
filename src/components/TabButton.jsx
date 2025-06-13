function TabButton({ children, onSelect, isSelected }) {
  console.log(`TabContent Component rendering.. ✔️`);
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

export default TabButton;
