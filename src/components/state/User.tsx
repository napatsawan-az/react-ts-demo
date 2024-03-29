import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  // type assertion
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Vishwas",
      email: "vishwas@example.com",
    });
  };

  //   const hangdleLogout = () => {
  //     setUser(null);
  //   };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={hangdleLogout}>Logout</button> */}
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </>
  );
};

export default User;
