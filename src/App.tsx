import { pdf } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import ResumePDF from "./components/ResumePDF";
import PDFDownloadButton from "./components/PDFDownloadButton";

function App() {
  const [pdfFile, setPdfFile] = useState<Blob | null>(null);
  const [numPages, setNumPages] = useState<number>();

  useEffect(() => {
    const generatePdf = async () => {
      const blob = await pdf(<ResumePDF />).toBlob();
      setPdfFile(blob);
    };
    generatePdf();
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100dvw",
        height: "100dvh",
        overflowY: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {pdfFile && (
        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      )}
      <PDFDownloadButton />
    </div>
  );
}

export default App;
