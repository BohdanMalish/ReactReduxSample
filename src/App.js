import { Table } from "./components/Table/Table";
import AddTeamForm from "./components/AddTeamForm";
import Results from "./components/GameResults/index";
function App() {
  return (
    <div>
      <AddTeamForm />
      <Table></Table>
      <Results/>
    </div>
  );
}

export default App;
