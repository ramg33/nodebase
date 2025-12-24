import { RegisterForm } from "@/features/auth/components/register-form ";
import { requiredUnauth } from "@/lib/auth-utils";

const page = async () => {
  await requiredUnauth();

  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default page;
