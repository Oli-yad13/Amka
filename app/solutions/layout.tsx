import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Solutions",
    description: "Smart HMIS, Interoperable MRS, and medical campaign systems for Ethiopian healthcare facilities. Offline-first, OpenMRS compatible.",
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
