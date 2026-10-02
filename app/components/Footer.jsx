export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/80 py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <div className="flex items-center gap-3">
          <span>© {new Date().getFullYear()} Anshuman Pati</span>
          <span className="text-neutral-300">·</span>
          <span>Bengaluru, India</span>
        </div>

        <span className="font-hand text-base text-blue-600">
          thanks for reading, let us build something great
        </span>
      </div>
    </footer>
  );
}
