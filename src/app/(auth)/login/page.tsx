import CredentialLogin from "./credentials";
import SocialLogin from "./socials";

export default function LoginPage() {
  return (
    <div>
      <CredentialLogin />
      <SocialLogin />
    </div>
  );
}
