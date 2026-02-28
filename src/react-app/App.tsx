import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import BlogPost from "@/react-app/pages/BlogPost";
import BlogIndex from "@/react-app/pages/BlogIndex";
import PracticeArea from "@/react-app/pages/PracticeArea";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/areas/:slug" element={<PracticeArea />} />
      </Routes>
    </Router>
  );
}
