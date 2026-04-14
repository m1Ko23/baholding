import type { Metadata } from "next";
import AboutPage from "@/components/AboutPage";

export const metadata: Metadata = {
  title: "О компании | B.A. Holding",
  description: "История, ценности, директория и руководство B.A. Holding",
};

export default function AboutRoute() {
  return <AboutPage />;
}