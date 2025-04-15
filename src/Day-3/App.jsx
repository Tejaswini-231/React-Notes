
// import Details from "./PropsExample.jsx";
import Render from "./ConditionalRendering.jsx";

function App() {

  return (
    <>
          {/* <Details name="Mark" age={22} grad={true}/>
          <Details name="Antony" age={45} grad={true}/>
          <Details name="Scuber" age={27} grad={false}/>
          <Details name="Kariat" age={89} grad={true}/>
          <Details name="Margaret" age={11} grad={false}/>
          <Details />
          <Details name="Ajack" age="22" grad={false}/> */}
          <Render name="teju" isLogged={true}/>
          <Render name="liki" isLogged={false}/>
    </>
  );
}

export default App;
