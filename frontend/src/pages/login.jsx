const login = async (e) => {
        e.preventDefault();
        const res=await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                enrollmentNumber: e.target.enrollmentNumber.value,
                password: e.target.password.value,
            }),
        });
        const data = await res.json();
        console.log(data);
    };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={login}>
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
        <button type="submit">Log In</button>
      </form>
    </div>
  );


export default Login;   