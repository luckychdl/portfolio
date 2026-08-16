export type NavItem = {
  label: string;
  href: string;
  /** pathname prefix used to mark the item active */
  match: string;
};

export const navItems: NavItem[] = [
  { label: "ABOUT", href: "/about", match: "/about" },
  { label: "SKILLS", href: "/skills", match: "/skills" },
  { label: "PROJECTS", href: "/projects?type=LOCUSKOREA", match: "/projects" },
  { label: "CONTACT", href: "/contact", match: "/contact" },
];
