import { PDFViewer } from "@react-pdf/renderer";
import ResumePDF from "./components/ResumePDF";
import PDFDownloadButton from "./components/PDFDownloadButton";

function App() {
  return (
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
  );
}

export default App;
