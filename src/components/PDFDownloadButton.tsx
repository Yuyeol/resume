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
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <PDFDownloadLink
        document={<ResumePDF />}
        fileName={fileName}
        style={{
          padding: "10px 15px",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        {({ loading }) => (loading ? "문서 생성 중..." : "PDF 다운로드")}
      </PDFDownloadLink>

      <a
        href="/resume/docs/react-query"
        style={{
          padding: "10px 15px",
          backgroundColor: "#28a745",
          color: "white",
          borderRadius: "4px",
          textDecoration: "none",
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        기술 문서 보기
      </a>
    </div>
  );
};

export default PDFDownloadButton;
