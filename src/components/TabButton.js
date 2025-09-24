export default function TabButton({ children, isSelected, ...props }) {
  // function handleClick() {
  //   console.log("Hello Wolrd " + children);
  // }

  //Se colocarmos o () depois da chamada da função, ela é executada no momento que é renderizada. Como queremos executar quando clicar, então vamos colocar sem o ()
  // return (
  //   <li>
  //     <button onClick={handleClick}>{children}</button>
  //   </li>
  // );
  console.log("TabButton Component Executing");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
