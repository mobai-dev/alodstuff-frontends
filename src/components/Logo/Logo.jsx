import img from '../../assets/alodnotes.png';

export default function Logo() {
    return (
        <div className='text-center'>
            <p>ALOD</p>
            <img src={img} alt="ALODnotes Logo" className='icon-small' />
            <p>notes</p>
        </div>
    );
}