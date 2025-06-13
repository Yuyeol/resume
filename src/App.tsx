import { pdf } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import ResumePDF from "./components/ResumePDF";
import PDFDownloadButton from "./components/PDFDownloadButton";
import { isMobile } from "react-device-detect";

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
        width: "100vw",
        height: "100vh",
        overflowY: "auto",
        display: isMobile ? undefined : "flex",
        justifyContent: isMobile ? undefined : "center",
      }}
    >
      {pdfFile && (
        <Document
          file={pdfFile}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<div style={{ width: 0, height: 0 }} />}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <div key={`page_${index + 1}`} style={{ marginBottom: "10px" }}>
              <Page
                pageNumber={index + 1}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                loading={<div style={{ width: 0, height: 0 }} />}
              />
            </div>
          ))}
        </Document>
      )}
      <PDFDownloadButton />
    </div>
  );
}

export default App;
