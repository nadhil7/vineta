import Link from "next/link";

interface SectionHeaderProps {
    title: string;
    viewAllHref?: string;
}

export default function SectionHeader({ title, viewAllHref }: SectionHeaderProps) {
    return (
        <div className="section-row-header">
            <h2 className="section-title">{title}</h2>
            {viewAllHref && (
                <Link href={viewAllHref} className="view-all-link">
                    View All
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width="16" height="16">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </Link>
            )}
        </div>
    );
}
