"use client"

type Props = {
  mobileView: boolean,
  scrolled: boolean
}

import { useEffect, useState } from "react"
import CopyRight from "./CopyRight"
import AnchorButton from "./AnchorButton"
import Link from "next/link"


const Header = ({scrolled,mobileView}:Props) => {
  const [showMenu, setShowMenu] = useState(false)
  const year = new Date().getFullYear()
  const navItemClass = `text-medium cursor-pointer uppercase opacity-60 hover:opacity-100 hover:text-accent`

  useEffect(() => {
    if(mobileView) setShowMenu(false)
  }, [mobileView])
  

  return (
    <header
      className={`fixed left-0 top-0 w-full z-20 ${
        scrolled ? "bg-blackTwo shadow-lg shadow-black" : "bg-black"
      } bg-black transition-all duration-500 `}
      // style={{ backdropFilter: "blur(20px)" }}
    >
      <main className="container mx-auto p-4 flex justify-between items-center w-full gap-12">
        <div className="flex justify-center items-center h-8 gap-1">
          <img src="/images/Logo.png" alt="logo" className="h-full" />
          <h1 className={`text-medium text-xl`}>WebWithHassan</h1>
        </div>
        {/* Desktop Menu */}
        {!mobileView && (
          <div className={`hidden sm:flex items-center list-none flex-auto gap-4`}>
            <Link href="/"
              className={`ml-auto text-xs ${navItemClass}`}
            >
              home
            </Link>
            <Link href="/" className={`text-xs ${navItemClass}`}>
              about
            </Link>
            <Link href="/" className={`text-xs ${navItemClass}`}>
              projects
            </Link>
            {/* <Link href="/" className={`text-xs ${navItemClass}`}>
              certificates
            </Link> */}
            <Link href="/contact"
              className={`text-xs ${navItemClass}`}
            >
              contact
            </Link>
          </div>
        )}
        {/* Mobile Menu */}
        <div
          className={`flex fixed z-20 flex-col sm:hidden gap-5 items-center list-none h-screen pt-24 px-4 pb-4 overflow-auto w-2/3 top-0 right-0 justify-center bg-blackFour shadow-2xl shadow-blackTwo transition-transform duration-500 ${
            !showMenu ? "translate-x-[110%]" : "translate-x-0"
          }`}
        >
          <Link href="/" className={`text-lg w-full text-center ${navItemClass}`}>
            home
          </Link>
          <Link href="/" className={`text-lg w-full text-center ${navItemClass}`}>
            about
          </Link>
          <Link href="/" className={`text-lg w-full text-center ${navItemClass}`}>
            projects
          </Link>
          {/* <Link href="/" className={`text-lg w-full text-center ${navItemClass}`}>
            certificates
          </Link> */}
          <Link href="/contact"
            className={`text-lg w-full text-center ${navItemClass}`}
          >
            contact
          </Link>
          <div
            className={`text-medium mt-auto flex w-full gap-4 justify-center items-center flex-col`}
          >
            <AnchorButton download={true} additionalClass="w-full text-center" downloadName="Ahmad Hassan CV" link="/public/docs/resume 1752023.pdf" label="Download CV"/>
            <CopyRight year={year} />
          </div>
        </div>
        <div
          className={`${
            showMenu && "rotate-180"
          } flex sm:hidden ml-auto z-20 h-8 w-10 p-1 flex-col justify-between transition-all duration-500 ease-in-out`}
          onClick={() => setShowMenu(prev => !prev)}
        >
          <div
            className={`w-full h-1 rounded-xl bg-accent transition-all duration-500 ease-in-out ${
              showMenu && "translate-y-[10px] rotate-[225deg]"
            }`}
          ></div>
          <div
            className={`w-full h-1 rounded-xl bg-accent transition-all duration-500 ease-in-out ${
              showMenu && "opacity-0"
            }`}
          ></div>
          <div
            className={`w-full h-1 rounded-xl bg-accent transition-all duration-500 ease-in-out ${
              showMenu && "translate-y-[-10px] rotate-[-45deg]"
            }`}
          ></div>
        </div>
      </main>
    </header>
  )
}

export default Header
