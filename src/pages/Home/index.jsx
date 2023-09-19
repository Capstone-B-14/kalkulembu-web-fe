import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import cardData from "../../components/Card/cardData.jsx";

export default function HomePage() {
  return (
    <div className="flex bg-[#FBFBFB]">
      <Sidebar />
      <Card details={cardData} />
    </div>
  );
}
