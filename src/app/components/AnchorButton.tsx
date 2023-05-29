import Link from "next/link"
import React from "react"

type Props = {
  additionalClass?: string
  nextAnchor?: boolean
  download?: boolean
  inverseColors?: boolean
  link: string
  downloadName?: string
  label: string
}

const AnchorButton = ({nextAnchor, additionalClass, download, link, downloadName, label, inverseColors }: Props) => {
  
  const className = `${
    additionalClass ? additionalClass : ""
  } py-1 px-3 block font-medium border-accent border-2 ${
    !inverseColors ? "text-black hover:text-accent bg-accent hover:bg-black" : "text-accent hover:text-black bg-black hover:bg-accent"
  }  transition-all duration-300`

  if (nextAnchor) {
    return <Link className={className} href={link}>{label}</Link>
  }

  return (
    <a
      className={className}
      href={link}
      download={download && downloadName}
    >
      {label}
    </a>
  )
}

export default React.memo(AnchorButton)
