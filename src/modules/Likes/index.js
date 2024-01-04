import Header from "../../common/components/Header";
import HeaderContent from "./HeaderContent";
import CoreLayout from "../../common/layouts/CoreLayout";

const Likes = () => {
  return (
    <CoreLayout
      header={
        <Header>
          <HeaderContent />
        </Header>
      }
    >
      <p>All your liked items goes here</p>
    </CoreLayout>
  );
};

export default Likes;
