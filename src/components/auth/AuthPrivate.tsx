import { AuthLogin } from "./AuthLogin";
import { ProfileProps } from "./AuthProfile";

type PrivateProps = {
  isLoggedIn: boolean
  component: React.ComponentType<ProfileProps>
}

export const AuthPrivate = ({isLoggedIn, component: Component}: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name='John'/>
  } else {
    return <AuthLogin />
  }
}