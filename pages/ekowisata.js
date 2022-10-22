import React from 'react'
import dynamic from 'next/dynamic'
import Navdash from '../component/Navdash'

const Map = dynamic(() =>import("../component/map/Map"),{ssr:false});


export default function ekowisata() {
  return (
    <div>
        <nav class="navbar bg-light">
            <div class="container-fluid">
                    <a class="navbar-brand" href="#">&lt; Dashboard</a>
            </div>
        </nav>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col col-lg-3'>
                    hello
                </div>
                <div className='col col-lg-9'>
                    <Map/>
                </div>
            </div>
        </div>
    </div>
  )
}
