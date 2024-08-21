import { useRouter, usePathname } from "next/navigation";

export const GetRoute = () => {
  const router = useRouter();
  //   return router.pathname;
  return usePathname();
};
