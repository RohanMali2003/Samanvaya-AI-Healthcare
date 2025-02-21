import Link from "next/link"

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container flex flex-col items-center gap-4 py-8 text-center">
                <h2 className="font-bold">ReLive</h2>
                <p className="text-sm text-muted-foreground max-w-lg">
                    AI-powered support for addiction recovery and mental well-being. Combining predictive insights,
                    secure prescriptions, and personalized coping strategies.
                </p>
                <div className="flex space-x-6">
                    <Link href="/ReLive-Presentation.pdf" className="text-muted-foreground transition-colors hover:text-primary">
                        Project Presentation
                    </Link>
                    <Link href="https://youtube.com/your-video-link" className="text-muted-foreground transition-colors hover:text-primary">
                        Watch Demo
                    </Link>
                </div>
                <div className="border-t w-full pt-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} ReLive. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
