import Sidebar from "../../components/Sidebar/sidebar";

export default function HomePage() {
  return (
    <>
      <div className='flex'>
        <Sidebar />
      </div>
      <div className='text-3xl font-bold underline'>This is HomePage</div>
    </>
  );
}
