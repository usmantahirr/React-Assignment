import Header from "../../common/components/Header";
import HeaderContent from "./HeaderContent";
import CoreLayout from "../../common/layouts/CoreLayout";

const Search = () => {
  return (
    <CoreLayout
      header={
        <Header>
          <HeaderContent />
        </Header>
      }
    >
      <p>Search form goes here</p>
    </CoreLayout>
  );
};

export default Search;
