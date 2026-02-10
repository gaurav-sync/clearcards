export default function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">ClearCards</h3>
          <p className="text-white/70 text-lg">
            Invitation cards made possible by brand sponsorships
          </p>
        </div>
        <div className="text-white/50 text-sm">
          © {new Date().getFullYear()} ClearCards. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
