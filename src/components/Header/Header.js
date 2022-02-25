export const Header = ({catId}) => {
    return (
        <header className={`header-productos ${catId ? catId : 'home'}`}></header>
    )
}