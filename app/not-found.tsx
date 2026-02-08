import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-6">
            <div className="text-center max-w-lg">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-amka-deep mb-6">404</p>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                    Page not found.
                </h1>
                <p className="text-xl text-gray-600 mb-10">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-8 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-amka-deep transition-colors"
                    >
                        Back to Home
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-4 rounded-full border border-gray-200 text-gray-900 font-bold hover:border-amka-deep hover:text-amka-deep transition-colors"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </main>
    );
}
