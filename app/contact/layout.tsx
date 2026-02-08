import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact",
    description: "Get in touch with AMKA Systems. Schedule a demo, request information, or partner with us. Based in Addis Ababa, Ethiopia.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
