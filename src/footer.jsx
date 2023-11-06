export default function Footer() {
    return (
        <footer className="footer">
            <p id="credit1">
                Created by Dillon Walsh. For more of my work check{' '}
                <a
                    id="profile-link"
                    href="https://github.com/Dillonpw/projects"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>
            </p>
            <div className="copyr">
                &copy;<span id="year">2023</span> All Rights Reserved
            </div>
        </footer>
    );
}
