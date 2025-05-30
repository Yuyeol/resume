import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PDFViewer } from "@react-pdf/renderer";
import ResumePDF from "./components/ResumePDF";
import PDFDownloadButton from "./components/PDFDownloadButton";
import ReactQueryDoc from "./pages/ReactQueryDoc";

function App() {
  return (
    <Router basename="/resume">
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                position: "relative",
                width: "100dvw",
                height: "100dvh",
              }}
            >
              <PDFViewer width="100%" height="100%" showToolbar={false}>
                <ResumePDF />
              </PDFViewer>
              <PDFDownloadButton />
            </div>
          }
        />
        <Route path="/docs/react-query" element={<ReactQueryDoc />} />
      </Routes>
    </Router>
  );
}

export default App;
