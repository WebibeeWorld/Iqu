"use client";
import { NAV_LINKS } from "@/constants";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { Link as MyLink } from "react-scroll";
import Link from "next/link";
import { MdContactPhone } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="flex justify-between items-end w-full gap-4">
            {/* <Link href="/" className="relative h-10 w-10 md:h-20 md:w-20">
            <Image src="/logo.png" alt="logo" width={200} height={60} />
          </Link> */}
            <h3 className="font-lora text-lg md:text-2xl">IQU Clinic</h3>
            <div className="flex items-center gap-4">
              <Link href={"/"}>
                <MdContactPhone className="h-7 w-7 block md:hidden" />
              </Link>
              <Link href={"/"}>
                <FaMapLocationDot className="h-7 w-7 block md:hidden" />
              </Link>
            </div>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {NAV_LINKS.slice(0, 4).map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <MyLink
              to={item.key}
              spy={true}
              offset={-50}
              smooth={true}
              duration={500}
              className="btn capitalize cursor-pointer w-full"
              key={index}
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
            >
              {item.label}
            </MyLink>
          </NavbarItem>
        ))}
        <MyLink
          to={"contact_us"}
          spy={true}
          offset={-50}
          smooth={true}
          duration={500}
        >
          <button
            className={`flexCenter gap-3 rounded-full border bg-green-800 px-4 py-2 text-white ml-8`}
          >
            Contact
          </button>
        </MyLink>
      </NavbarContent>

      <NavbarMenu>
        {NAV_LINKS.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <MyLink
              to={item.key}
              spy={true}
              offset={-50}
              smooth={true}
              duration={500}
              className="btn capitalize cursor-pointer"
              key={index}
              // color={
              //   index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              // }
              // className="w-full"
              // href={item.href}
              // size="lg"
            >
              {item.label}
            </MyLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

// const Navbar = () => {
//   return (
//     <nav className="flexBetween max-container padding-container relative z-30 py-5">
//       <Link href="/">
//         <Image src="/logo.png" alt="logo"width={200} height={60} />
//       </Link>

//       <ul className="hidden h-full gap-12 lg:flex">
//         {NAV_LINKS.map((link) => (
//           <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
//             {link.label}
//           </Link>
//         ))}
//       </ul>

// <MobileMenu/>

//       {/* <Image
//         src="menu.svg"
//         alt="menu"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden"
//       /> */}

//     </nav>
//   )
// }

// export default Navbar
