import './ItemListContainer.css';

export const ItemListContainer = ({greetings}) => {
    return (
        <section className='saludo'>
            <h2>{greetings}</h2>
        </section>
    )
}