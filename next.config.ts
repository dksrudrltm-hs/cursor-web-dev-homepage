import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Turbopack 설정 (Next.js 16 기본)
  turbopack: {
    // 루트 디렉토리 명시 (상위 디렉토리의 package-lock.json 오류 방지)
    root: path.join(__dirname),
  },
  // 패키지 최적화
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;
