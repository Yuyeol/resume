import { PDFViewer } from "@react-pdf/renderer";
import ResumePDF from "./components/ResumePDF";
import PDFDownloadButton from "./components/PDFDownloadButton";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          height: "100vh",
        }}
      >
        <PDFViewer
          width="100%"
          height="100%"
          style={{ border: "none" }}
          showToolbar={false}
        >
          <ResumePDF />
        </PDFViewer>
      </div>
      <PDFDownloadButton />
    </div>
  );
}

export default App;
