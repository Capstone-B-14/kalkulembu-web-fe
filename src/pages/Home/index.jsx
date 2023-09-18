import Sidebar from "../../components/Sidebar/index.jsx";
import Card from "../../components/Card/card.jsx";

export default function HomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
