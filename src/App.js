import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

import { teamsSelector } from "./store/Teams/selector";
import { gamesSelector } from "./store/Games/selector";
import {updateDataGames} from "./store/Games/actions";
import {updateData} from "./store/Teams/actions";

import { Table } from "./components/Table/Table";
import AddTeamForm from "./components/AddTeamForm";
import Results from "./components/GameResults/index";

function App() {
  const teams = useSelector(teamsSelector);
  const games = useSelector(gamesSelector);

  const dispatch=useDispatch();
  useEffect(()=>{
    if(localStorage.getItem('games')){
      dispatch(updateDataGames(JSON.parse(localStorage.getItem('games'))))
    }
    if(localStorage.getItem('teams')){
      dispatch(updateData(JSON.parse(localStorage.getItem('teams'))))
    }
  },[])


  return (
    <div>
      <AddTeamForm />
      <Table></Table>
      <Results/>
    </div>
  );
}

export default App;
