export default function Header() {
    function handleMoreInfo(e) {
        e.preventDefault();
        e.stopPropagation();
        alert(
            "fill out the inputs as you see fit, and watch your personal information populate automatically \nThen move down to the experience and education fields and submit when you're ready!"
        );
    }
    return (
        <div className="header">
            <h1>CV Template</h1>
            <button onClick={handleMoreInfo}>More Info</button>
        </div>
    );
}
