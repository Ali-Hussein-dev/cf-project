import Link from "next/link";
import css from "./Footer.module.scss";
import { FaDribbble, FaLinkedinIn, FaYoutube } from "react-icons/fa";
const legalLinks = [
  {
    label: "Privacy Policy",
    url: "/",
  },
  {
    label: "Terms of Service",
    url: "/",
  },
  {
    label: "Cookie Policy",
    url: "/",
  },
];
const socialLinks = [
  {
    name: "youtube",
    icon: <FaYoutube className="" size="17" />,
  },
  {
    name: "dribbble",
    icon: <FaDribbble className="" size="17" />,
  },
  {
    name: "linkedin",
    icon: <FaLinkedinIn className="" size="17" />,
  },
];
const categoriesLinks = [
  {
    label: "Designing",
    url: "/",
  },
  {
    label: "Marketing",
    url: "/",
  },
  {
    label: "Web Development",
    url: "/",
  },
];
const resourcesLinks = [
  {
    label: "Docs",
    url: "/",
  },
  {
    label: "Showcase",
    url: "/",
  },
  {
    label: "Blogs",
    url: "/",
  },
];
//======================================
export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.container}>
        {/* <hr /> */}
        <div className={css["footer-top"]}>
          <div className={css.about}>
            <h6>About</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni,
              nobis fugiat repellendus in placeat ex quos voluptatem voluptate
              dolores hic totam vero rerum!
            </p>
          </div>
          <div>
            <h6>Services</h6>
            <ul className="footer-links">
              {categoriesLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6>Resources</h6>
            <ul className="footer-links">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h6>Legal</h6>
            <ul className="footer-links">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.url}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className={css["footer-bottom"]}>
        <p className="">
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
        <div className="col-md-4 col-sm-6 col-xs-12">
          <ul className={css["social-icons"]}>
            {socialLinks.map((link, index) => (
              <li key={index} className={`${link.name}`}>
                {link.icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
