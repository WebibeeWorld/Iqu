"use client"
import { usePathname} from "next/navigation";
import OtherNavbar from "./OtherNavbar";
import Header from "./Navbar";

const DefaultNavbvar = () => {
    const path = usePathname();
    const isHome = path === "/";
  return (
    isHome ? (<Header />) : (<OtherNavbar />)
  )
}

export default DefaultNavbvar