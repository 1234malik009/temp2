import React  from "antd";

const MainContent = () => {
  return (
    <div className="container-main">
    <div className="container-login">
   <h1>Login Here</h1>
    <p>User Name</p>
    <input type="text" placeholder="Username" style={{height:'24px'}} />
    <p>Password</p>
    <input type="password" placeholder="Password"  style={{height:'24px'}}  />
    <button style={{width:"100px",display:"inline", alignItems:'center', marginTop:'20px'}}>Login</button>
    </div>
   </div>
  );
};
export default MainContent