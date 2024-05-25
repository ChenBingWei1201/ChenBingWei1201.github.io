import GithubURL from "../images/github.png";
import FacebookURL from "../images/facebook.png";
import LinkedInURL from "../images/linkedin.png";
import HackMDURL from "../images/hackmd.png";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center h-24 w-full border-t border-black bg-gray-100">
      <div className="flex flex-row items-center justify-center">
        <a href="https://github.com/ChenBingWei1201" target="_blank">
          <img src={GithubURL} alt="github link" className="w-9 m-2" />
        </a>
        <a href="https://hackmd.io/@Bing-Wei-Chen" target="_blank">
          <img src={HackMDURL} alt="hackmd link" className="w-9 m-2 rounded border-black border" />
        </a>
        <a href="https://www.linkedin.com/in/bing-wei-chen-80620a2a2/" target="_blank">
          <img src={LinkedInURL} alt="linkedin link" className="w-9 m-2" />
        </a>
        <a href="https://www.facebook.com/ChenBingWei.CBW/" target="_blank">
          <img src={FacebookURL} alt="facebook link" className="w-9 m-2" />
        </a>
      </div>

      <p className="text-base">
        © 2024 Bing-Wei, Chen (陳秉緯)
      </p>
    </footer>
  );
}
