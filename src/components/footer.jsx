import GithubURL from "../images/github.png";
import FacebookURL from "../images/facebook.png";
import LinkedInURL from "../images/linkedin.png";
import HackMDURL from "../images/hackmd.png";

const icons = [
  {
    href: "https://github.com/ChenBingWei1201",
    src: GithubURL,
    alt: "github link",
  },
  {
    href: "https://hackmd.io/@Bing-Wei-Chen",
    src: HackMDURL,
    alt: "hackmd link",
  },
  {
    href: "https://www.linkedin.com/in/chenbingwei1201/",
    src: LinkedInURL,
    alt: "linkedin link",
  },
  {
    href: "https://www.facebook.com/ChenBingWei.CBW/",
    src: FacebookURL,
    alt: "facebook link",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center h-24 w-full border-t border-black bg-gray-100">
      <div className="flex flex-row items-center justify-center">
        {icons.map((icon) => <a href={icon.href} target="_blank">
          <img src={icon.src} alt={icon.alt} className="w-9 m-2" />
        </a>)}
      </div>
      <p className="text-base">
        © 2024 Bing-Wei, Chen (陳秉緯)
      </p>
    </footer>
  );
}
