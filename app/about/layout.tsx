import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "AMKA Systems builds digital health infrastructure for Ethiopian healthcare providers. Learn about our mission, values, and partnerships.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
