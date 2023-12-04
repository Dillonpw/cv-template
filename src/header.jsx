import logo from '/assets/logo.svg';

export default function Header() {
    function handleMoreInfo(e) {
        e.preventDefault();
        e.stopPropagation();
        alert(
            "fill out the inputs as you see fit, and watch your personal information populate automatically \nThen move down to the experience and education fields and submit when you're ready\nThis is meant to be used as a draft to put ideas onto \"paper\" not as a real resume.\n Use 'command + P' or 'ctrl + p' to print yout template"
        );
    }
    return (
        <div className="header">
            <img src={logo} alt="Logo" />
            <h1>CV Template</h1>
            <button onClick={handleMoreInfo}>More Info</button>
        </div>
    );
}
