import "./styles/main.css";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import Content from "./components/content";
import SidebarSmall from "./components/sidebar-small";

function App() {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <SidebarSmall />
        <Sidebar />
        <div className="flex flex-col w-full md:space-y-4">
          <Header />
          {/* <Content /> */}
        </div>
      </div>
    </main>
  );
}

export default App;
