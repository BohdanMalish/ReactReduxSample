import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTeam } from "../../store/Teams/actions";

function AddTeamForm() {
  const dispatch = useDispatch();

  const [teamName, setTeamName] = useState("");
  
  return (
    <div>
      <input
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="Team Name"
      ></input>
      <button onClick={() => dispatch(addTeam(teamName))}>Add</button>
    </div>
  );
}
export default AddTeamForm;
