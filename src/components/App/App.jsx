import { FaBeer } from "react-icons/fa";
import AppBar from "../AppBar/AppBar";
import OfficerList from "../OfficerList/OfficerList";
import officers from "../../officers.json";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <AppBar />
      <h1>
        React is amazing!
        <FaBeer className={css.mySuperIcon} />{" "}
      </h1>
      <OfficerList items={officers} />
    </div>
  );
}
