import Header from "../../common/components/Header";
import HeaderContent from "./HeaderContent";
import CoreLayout from "../../common/layouts/CoreLayout";

const Charts = () => {
  return (
    <CoreLayout
      header={
        <Header>
          <HeaderContent />
        </Header>
      }
    >
      <p>All your Charts goes here</p>
    </CoreLayout>
  );
};

export default Charts;
