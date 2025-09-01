import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ClawKing from "./View/wensocket";

const Game = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically navigate after 3 seconds (3000 ms)
    const timer = setTimeout(() => {
      navigate("/PlayZone"); // SPA navigation
    }, 3000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <ClawKing />
    </div>
  );
};

export default Game;
