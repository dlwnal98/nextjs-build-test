import "../styles/globals.css";
import Providers from "./providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "콜센터 관리 시스템",
  description: "Next.js 14 + App Router 기반 콜센터 대시보드",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body cz-shortcut-listen="true">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
