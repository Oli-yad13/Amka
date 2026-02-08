import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resources",
    description: "Guides, whitepapers, and insights on digital health in Ethiopia. Learn how to digitize your clinic with AMKA Systems.",
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
    return children;
}
