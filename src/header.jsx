import logo from '/assets/logo.svg';

export default function Header() {
    function handleMoreInfo(e) {
        e.preventDefault();
        e.stopPropagation();
        alert(
            "fill out the inputs as you see fit, and watch your Personal Info populate automatically \nThen move down to the Experience and Education fields and submit when you're ready\nThis is meant to be used as a draft to put ideas onto \"paper\" not as a real resume.\n Use 'command + P' or 'ctrl + p' to print yout template"
        );
    }
    return (
        <div className="header">
            <img src={logo} alt="Logo" />
            <button className="headBtn" onClick={handleMoreInfo}>
                More Info
            </button>
            <button
                className="headBtn"
                onClick={() => window.location.reload()}
            >
                Reset
            </button>
   
        </div>
    );
}
