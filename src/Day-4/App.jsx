// import List from "./List.jsx";
import Button from "./Button.jsx";

function App() {
  
  const colors=[
    {id : 1 , name : "Red" , lovedBy : 23},
    {id : 2 , name : "Green" , lovedBy : 45},
    {id : 3 , name : "Orange" , lovedBy : 12},
    {id : 4 , name : "Black" , lovedBy : 95},
    {id : 5 , name : "White" , lovedBy : 85}];

    const things=[
      {id : 6 , name : "Table" , lovedBy : 45},
      {id : 7 , name : "Chair" , lovedBy : 78},
      {id : 8 , name : "Board" , lovedBy : 25},
      {id : 9 , name : "Desk" , lovedBy : 63},
      {id : 10 , name : "Slamb" , lovedBy : 91}];

  return (
    <>
      <Button />
        {/* <List name={colors} groupOf="Colors"/> 
        <List name={things} groupOf="Objects" /> */}
    </>
  )
}

export default App;
