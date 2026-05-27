import React, { useEffect } from "react";
import { ChevronLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutApp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--warm-bg)",
        paddingTop: "40px",
        paddingBottom: "60px",
      }}
    >
      <div
        className="container"
        style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 20px" }}
      >
        <div
          style={{
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link
            to="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              color: "var(--ink)",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            <ChevronLeft size={20} style={{ marginRight: "4px" }} />
            Quay lại trang chủ
          </Link>
        </div>

        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(28px, 6vw, 40px)",
              color: "var(--ink)",
              marginBottom: "16px",
            }}
          >
            Trải nghiệm app{" "}
            <span className="text-highlight">Sống Sáng Suốt</span>
          </h1>
          <div
            style={{
              fontSize: "16px",
              color: "var(--ink-soft)",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: 1.8,
              textAlign: "justify"
            }}
          >
            <p style={{ marginBottom: "12px" }}>
              <strong>Sống Sáng Suốt</strong> là hành trình giúp mỗi người quay về quan sát chính mình, nhận diện những phản ứng vô thức và rèn luyện khả năng sống tỉnh thức trong từng tình huống đời thường.
            </p>
            <p style={{ marginBottom: "12px" }}>
              Chúng tôi không chỉ chia sẻ tri thức, mà hướng đến những công thức thực hành rõ ràng, dễ hiểu, dễ áp dụng để mỗi ngày bạn có thể thay đổi từ bên trong.
            </p>
            <p>
              Sống Sáng Suốt giúp bạn học cách làm chủ cảm xúc, nhìn sâu vào vấn đề, chuyển hóa mối quan hệ và đưa ra quyết định bằng sự bình tĩnh, sáng suốt và chân thật với chính mình.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "400px",
              borderRadius: "40px",
              boxShadow: "0 24px 64px rgba(0,0,0,0.15)",
              border: "8px solid var(--warm-bg)",
              overflow: "hidden",
              aspectRatio: "952/1292",
              position: "relative",
            }}
          >
            <iframe
              src="https://marvelapp.com/prototype/1cjg12de?emb=1&iosapp=false&frameless=false"
              width="100%"
              height="100%"
              allowtransparency={true}
              frameBorder="0"
              style={{
                WebkitClipPath: "inset(2px 2px)",
                clipPath: "inset(2px 2px)",
                borderRadius: "32px",
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />
          </div>

          <div style={{ textAlign: "center", marginTop: "32px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: "var(--ink)",
                marginBottom: "16px",
              }}
            >
              Tải ứng dụng ngay hôm nay
            </h3>
            <div style={{ marginBottom: "24px" }}>
              <img 
                src="/logo.png" 
                alt="Sống Sáng Suốt Logo" 
                style={{ 
                  width: "80px", 
                  height: "80px", 
                  borderRadius: "20px", 
                  boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                  border: "2px solid rgba(0,0,0,0.05)"
                }} 
              />
            </div>
            <div
              style={{
                display: "flex",
                gap: "16px",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://apps.apple.com/us/app/sống-sáng-suốt/id6738382979"
                target="_blank"
                rel="noreferrer"
                className="btn-store apple"
              >
                <svg
                  viewBox="0 0 384 512"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                  ></path>
                </svg>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      opacity: 0.8,
                      lineHeight: 1,
                    }}
                  >
                    Tải trên
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      lineHeight: 1,
                      marginTop: "2px",
                    }}
                  >
                    App Store
                  </span>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.app365hanhnguyen.hanhnguyen&hl=vi"
                target="_blank"
                rel="noreferrer"
                className="btn-store google"
              >
                <svg
                  viewBox="0 0 512 512"
                  width="24"
                  height="24"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                  ></path>
                </svg>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      opacity: 0.8,
                      lineHeight: 1,
                    }}
                  >
                    TẢI TRÊN
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      lineHeight: 1,
                      marginTop: "2px",
                    }}
                  >
                    Google Play
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
