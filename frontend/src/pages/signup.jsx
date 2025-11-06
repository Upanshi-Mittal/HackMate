
import { useNavigate } from 'react-router-dom';
  
const Signup = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res=await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                enrollmentNumber: e.target.enrollmentNumber.value,
                password: e.target.password.value,
            }),
        });
        const result=await res.json();
        if(result.success){
            navigate('/details');
        }
        const data = await res.json();
        console.log(data);
    };
  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          enrollment number:
          <input type="text" name="enrollmentNumber" id="enrollmentNumber" required/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" id="password" required/>
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>

  );
};

export default Signup;