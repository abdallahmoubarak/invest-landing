import { BiDollarCircle } from "react-icons/bi";
import { Button, FlatLogo, TopBar } from "watermonster";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex items-center justify-between gap-2 py-4">
      <a href="#">
        <FlatLogo height={"3.2rem"} />
      </a>
      <Link
        href={`https://wa.me/+96170097533?text=I want to invest with you, my investment amount is:`}
      >
        <Button text="Invest in the project" icon={<BiDollarCircle />} />
      </Link>
    </div>
  );
}
