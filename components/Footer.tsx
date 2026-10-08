export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="container-main py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-bold">MJ Veterinary Anatomy</h3>
            <p className="text-slate-300 mt-2">دراسة تشريح الحيوانات والطب البيطري</p>
          </div>
          <div className="text-slate-300 text-sm">
            © 2026 All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}