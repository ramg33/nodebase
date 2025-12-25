import { requiredAuth } from "@/lib/auth-utils";

const Page = async () => {
  await requiredAuth();
  return <p>Credentials</p>;
};

export default Page;
