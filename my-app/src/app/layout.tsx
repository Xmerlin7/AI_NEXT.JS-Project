export const metadata = {
  title: "Next",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header
        style={{ backgroundColor: "#333", color: "#fff", padding: "10px 20px" }}
      >
        <nav>
          <ul style={{ display: "flex", listStyleType: "none", gap: "20px" }}>
            <li>
              <a href="/" style={{ color: "#fff", textDecoration: "none" }}>
                Home
              </a>
            </li>
            <li>
              <a
                href="/products"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/blog"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main style={{ minHeight: "80vh", padding: "20px" }}>{children}</main>

      <footer
        style={{
          backgroundColor: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "10px 0",
        }}
      >
        <p>&copy; 2024 Your Website Name. All Rights Reserved.</p>
        <a href="/privacy" style={{ color: "#fff", textDecoration: "none" }}>
          Privacy Policy
        </a>
      </footer>
    </>
  );
}
