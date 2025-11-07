import { useNavigate } from "react-router-dom";
import "./details.css";  // ✅ Add this

const Details = () => {
    const navigate = useNavigate();

    const detailsSave = (e) => {
        e.preventDefault();

        const userDetails = {
            personalEmail: e.target.personalEmail.value,
            phoneNumber: e.target.phoneNumber.value,
            githubProfile: e.target.githubProfile.value,
            linkedinProfile: e.target.linkedinProfile.value,
            skills: e.target.skills.value,
            portfolio: e.target.portfolio.value,
        };

        localStorage.setItem("userDetails", JSON.stringify(userDetails));

        localStorage.setItem(
            "jiit_session",
            JSON.stringify({
                name: userDetails.personalEmail.split("@")[0],
                enrollmentno: "Prototype123",
                instituteid: "JIIT",
            })
        );

        navigate("/home");
    };

    return (
        <div className="details-container">
            <form className="details-card" onSubmit={detailsSave}>
                <h1 className="details-title">Your Details</h1>

                <input type="email" name="personalEmail" placeholder="Personal Email" required className="details-input" />
                <input type="tel" name="phoneNumber" placeholder="Phone Number" required className="details-input" />
                <input type="url" name="githubProfile" placeholder="GitHub Profile URL" required className="details-input" />
                <input type="url" name="linkedinProfile" placeholder="LinkedIn Profile URL" required className="details-input" />
                <input type="text" name="skills" placeholder="Skills (comma-separated)" required className="details-input" />
                <input type="url" name="portfolio" placeholder="Portfolio URL" required className="details-input" />

                <button className="details-btn" type="submit">
                    Save & Continue
                </button>
            </form>
        </div>
    );
};

export default Details;
