import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-width footer-inner">
        <p>© {new Date().getFullYear()} Leonardo Marco</p>
        <div className="footer-links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn<span className="sr-only"> (abre em nova aba)</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
