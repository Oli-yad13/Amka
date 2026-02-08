import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Case Studies",
    description: "See how PSI Ethiopia and healthcare providers across Addis Ababa are transforming operations with AMKA Systems.",
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
