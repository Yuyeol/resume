import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./ResumePDF";

interface PDFDownloadButtonProps {
  fileName?: string;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
  fileName = "이력서.pdf",
}) => {
  return (
    <PDFDownloadLink
      document={<ResumePDF />}
      fileName={fileName}
      style={{
        padding: "10px 20px",
        backgroundColor: "#4CAF50",
        color: "white",
        borderRadius: "4px",
        position: "fixed",
        right: "20px",
        bottom: "20px",
      }}
    >
      {({ loading }) => (loading ? "문서 생성 중..." : "PDF 다운로드")}
    </PDFDownloadLink>
  );
};

export default PDFDownloadButton;
