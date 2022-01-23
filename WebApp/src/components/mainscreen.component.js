import PostView from "./postview.component";
import SideBar from "./sidebar.component";

const MainScreen = () => {
  return (
    <div className="container-fluid">
      <div className="container col-10 d-flex">
        <PostView />
        <SideBar />
      </div>
    </div>
  );
};

export default MainScreen;
