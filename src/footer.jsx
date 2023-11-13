import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="footer">
            <p id="credit">
                Created by Dillon Walsh.
                <br />
                For more of my work check
                <a
                    id="profile-link"
                    href="https://github.com/Dillonpw/projects"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <br />
                &copy;<span id="year">2023</span> All Rights Reserved
            </p>
        </footer>
    );
}
