import React from 'react'

import Navdash from '../component/Navdash'
import dynamic from 'next/dynamic'
const Ekowisata = dynamic(() =>import("../component/Ekowisata"),{ssr:false});


export default function ekowisata() {
  return (
    <div>
        <Ekowisata/>
    </div>
  )
}
