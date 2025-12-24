import { LoginForm } from "@/features/auth/components/login-form";
import { requiredUnauth } from "@/lib/auth-utils";
const Page = async () => {
  await requiredUnauth();
  return <LoginForm />;
};

export default Page;
