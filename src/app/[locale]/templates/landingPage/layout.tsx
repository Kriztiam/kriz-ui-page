import "kriz-ui-next/yellow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landing page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
