import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  return <div>{isLoggedIn ? <Component name="Vishwas" /> : <Login />}</div>;
};

export default Private;
