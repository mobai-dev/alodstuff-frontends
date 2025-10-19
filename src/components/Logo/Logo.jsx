import img from '../../assets/alodnotes.svg';
import './Logo.css'

export default function Logo() {
    return (
        <div className='logo-div'>
            <img src={img} alt="ALODnotes Logo" />
            <p>ALODnotes</p>
        </div>
    );
}