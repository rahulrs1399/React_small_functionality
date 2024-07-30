import React from 'react'
import { Link } from 'react-router-dom'
import './homestyle.css'

// p-4 flex-wrap font-medium text-2xl border border-black rounded-md hover:shadow-black 

const Home = () => {
  return (
    <div>
        <div className=' flex flex-wrap mt-10'>
            <Link className='linkTab' to={"/testtab"}>TestTab</Link>
            <Link className='linkTab' to={"/filterbycategory"}>Filterbycategory</Link>
            <Link className='linkTab' to={"/accordian"}>Accordian</Link>
            <Link className='linkTab' to={"/randomcolor"}>RandomColor</Link>
            <Link className='linkTab' to={"/starrating"}>StarRating</Link>
            <Link className='linkTab' to={"/imageSlider"}>ImageSlider</Link>
            <Link className='linkTab' to={"/loadmoredata"}>LoadMoreData</Link>
            <Link className='linkTab' to={"/treeview"}>TreeView</Link>
            <Link className='linkTab' to={"/qrcodegenerator"}>QrCodeGenerator</Link>
            <Link className='linkTab' to={"/darklighmode"}>DarkLighMode</Link>
            <Link className='linkTab' to={"/scrollindicator"}>ScrollIndicator</Link>
            <Link className='linkTab' to={"/modaltest"}>ModalTest</Link>
            <Link className='linkTab' to={"/githubprofilefinder"}>GithubProfileFinder</Link>
            <Link className='linkTab' to={"/searchsuggestions"}>SearchSuggestions</Link>
            <Link className='linkTab' to={"/filterbycategory"}>Filterbycategory</Link>
            <Link className='linkTab' to={"/tictacttoe"}>TicTactToe</Link>
        </div>
    </div>
  )
}

export default Home