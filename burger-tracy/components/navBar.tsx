import Link from "next/link"
import '@/styles/navBar.css'
export default function navBar(){

    return(
        <div className="navBar__section">
            <div className="navBar__logo">
                {/* <img src="">
                </img> */}
            </div>

            <div className="navBar__section__contents">
                <Link href={'/'} className="navBar__link">Home</Link>
                <Link href={'/'} className="navBar__link">About</Link>
                <Link href={'/'} className="navBar__link">Catering</Link>
                <Link href={'/'} className="navBar__link">Menu</Link>
            </div>
        </div>
    )
}