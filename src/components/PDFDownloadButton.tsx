import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./ResumePDF";

interface PDFDownloadButtonProps {
  fileName?: string;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
  fileName = "정유열 이력서.pdf",
}) => {
  return (
    <PDFDownloadLink
      document={<ResumePDF />}
      fileName={fileName}
      style={{
        padding: "5px 10px",
        backgroundColor: "#007bff",
        color: "white",
        borderRadius: "4px",
        position: "fixed",
        right: "20px",
        bottom: "20px",
        textDecoration: "none",
        fontWeight: 700,
      }}
    >
      PDF 다운로드
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;
