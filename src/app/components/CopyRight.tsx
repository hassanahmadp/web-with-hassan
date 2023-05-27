import React from 'react'

type Props = {
  year: number | string
}

const CopyRight = ({year}: Props) => {
  return <p className='w-full text-center font-thin opacity-40'>&copy; {year} WebWithHassan</p>
}

export default React.memo(CopyRight)