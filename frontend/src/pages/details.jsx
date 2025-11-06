import {Navigate} from 'react-router-dom'
const Details = () => {
    const navigate = Navigate();
    const detailsSave = async (e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:5000/details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                personalEmail: e.target.personalEmail.value,
                phoneNumber: e.target.phoneNumber.value,
                githubProfile: e.target.githubProfile.value,
                linkedinProfile: e.target.linkedinProfile.value,
                skills: e.target.skills.value,
                portfolio: e.target.portfolio.value,
            }),
        });
        const data = await res.json();
        if (data.success) {
            navigate('/home');
        }
        console.log(data);
    };
    return (
        <div>
            <form onSubmit={detailsSave}>
                <h1>Details Page</h1>
                <label>
                    personal email:
                    <input type="email" name="personalEmail" id="personalEmail" required />
                </label>
                <br />
                <label>
                    phone number:
                    <input type="tel" name="phoneNumber" id="phoneNumber" required />
                </label>
                <br />
                <label>
                    github profile:
                    <input type="url" name="githubProfile" id="githubProfile" required />
                </label>
                <br />
                <label>
                    linkedin profile:
                    <input type="url" name="linkedinProfile" id="linkedinProfile" required />
                </label>
                <br />
                <label>
                    Skills:
                    <input type="text" name="skills" id="skills" required />
                </label>
                <br />
                <label>
                    Portfolio:
                    <input type="url" name="portfolio" id="portfolio" required />
                </label>
                <br />
                <button type="submit">Submit</button>
        </form>
    </div >
  )
}

export default Details
