import './style.css';


export default function Card({ description, title, cover }) {
    return (
        <div className='card'>
            <img src={cover} alt='card cover' />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}