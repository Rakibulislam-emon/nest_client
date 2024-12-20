import { IoChevronDownSharp } from "react-icons/io5";

export default function TopHeader() {
  const Links = [
    { name: "Home", href: "#" },
    { name: "Products", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ]
  return (
    <div className="lg:flex justify-between hidden ">
      <div className=" flex gap-x-4">
        {Links.map((link) => (
          <a key={link.name} href={link.href} className="border-r-2 pr-2">{link.name}</a>
        ))}
      </div>
      <div>
        <p>100% Secure delivery without contacting the courier</p>
      </div>
      <div className="flex gap-x-4">
        <p>Need help? Call Us:+ 1800 900</p>
        <p className="flex items-center  border-x-2 px-4">English
          <IoChevronDownSharp />
        </p>
        <p className="flex items-center ">US  <IoChevronDownSharp /></p>
      </div>
    </div>
  )
}
