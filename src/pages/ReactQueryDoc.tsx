import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const ReactQueryDoc: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    // public 폴더의 마크다운 파일을 fetch
    fetch("/resume/careers/mycapage/react-query.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text))
      .catch((error) => console.error("마크다운 파일 로드 실패:", error));
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily:
          "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
        lineHeight: "1.6",
        color: "#333",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 1000,
        }}
      >
        <button
          onClick={() => window.history.back()}
          style={{
            padding: "10px 15px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ← 이력서로 돌아가기
        </button>
      </div>

      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <h1
              style={{
                color: "#2c3e50",
                borderBottom: "3px solid #3498db",
                paddingBottom: "10px",
              }}
            >
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 style={{ color: "#34495e", marginTop: "30px" }}>{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 style={{ color: "#34495e" }}>{children}</h3>
          ),
          code: ({ children }) => (
            <code
              style={{
                backgroundColor: "#f8f9fa",
                padding: "2px 4px",
                borderRadius: "3px",
                fontSize: "0.9em",
              }}
            >
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre
              style={{
                backgroundColor: "#f8f9fa",
                padding: "15px",
                borderRadius: "5px",
                overflow: "auto",
                border: "1px solid #e9ecef",
              }}
            >
              {children}
            </pre>
          ),
          blockquote: ({ children }) => (
            <blockquote
              style={{
                borderLeft: "4px solid #3498db",
                paddingLeft: "15px",
                margin: "20px 0",
                fontStyle: "italic",
                color: "#7f8c8d",
              }}
            >
              {children}
            </blockquote>
          ),
          ul: ({ children }) => (
            <ul style={{ paddingLeft: "20px" }}>{children}</ul>
          ),
          li: ({ children }) => (
            <li style={{ marginBottom: "5px" }}>{children}</li>
          ),
        }}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default ReactQueryDoc;
