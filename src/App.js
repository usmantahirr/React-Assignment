import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Discover from "./modules/Discover";
import Likes from "./modules/Likes";
import Search from "./modules/Search";
import Playlists from "./modules/playlists";
import Charts from "./modules/charts";
import AuthContextContainer from "./common/context/contextContainer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextContainer>
        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favourites" element={<Likes />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/charts" element={<Charts />} />
        </Routes>
      </AuthContextContainer>
    </QueryClientProvider>
  );
}

export default App;
