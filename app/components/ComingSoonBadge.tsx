export default function ComingSoonBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-teal/30 bg-teal/10 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-teal backdrop-blur-sm ${className}`}
    >
      Coming soon
    </span>
  );
}
