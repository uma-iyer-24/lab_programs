import { useState } from "react";

function Voting() {
  const [age, setAge] = useState("");
  const [hasVoted, setHasVoted] = useState(false);
  const [winner, setWinner] = useState("");

  const handleVote = (candidate) => {
    if (age < 18) {
      setWinner("Not eligible to vote");
      return;
    }
    if (hasVoted) {
      setWinner("You already voted");
      return;
    }

    setWinner(` ${candidate} wins!`);
    setHasVoted(true);
  };

  return (
    <div>
      <h1>Simple Voting</h1>
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br /><br />
      <button onClick={() => handleVote("Russell")}>Vote Russell</button>
      <button onClick={() => handleVote("Antonelli")}>Vote Antonelli</button>
      <button onClick={() => handleVote("Hamilton")}>Vote Hamilton</button>
      <button onClick={() => handleVote("Leclerc")}>Vote Leclerc</button>

      <h2>{winner}</h2>
    </div>
  );
}

export default Voting;