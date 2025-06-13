import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import Examples from "./components/Examples";

function App() {

  console.log(`App Component rendering.. ☑️`);
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
       <Examples/>
      </main>
    </>
  );
}

export default App;
