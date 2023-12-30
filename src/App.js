import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Components/Layout";
import Home from "./Pages/Home";
import PostPage from "./Pages/PostPage";
import { DbContext } from "./utilities/DBContext";
import { client } from "./utilities/ApolloClient";
import { useContext, useState, useEffect } from "react";
import './style.css';
import './App.css';






// Use a custom domain as the supabase URL


///
function App() {

  // console.log("app rendered");
  const dbContext = useContext(DbContext);
  const [posts, setPosts] = useState();
  const [isDark, setIsDark] = useState(false);
  async function fetchPosts() {
    const data = await dbContext.GetAllPostsSummary();

    if (data) {

      setPosts(data)
    }
  }

  useEffect(() => {
    fetchPosts();

  }, [])//run once only on initial render
  return (


    <>
      {
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
      }
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={posts ? <Home posts={posts} theme={isDark} /> : ""} />
          <Route path="post/:postid" element={<PostPage />} />

        </Route>
      </Routes>

    </>




  );
}

export default App;
