import { View } from "@/components/ui/view";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <View className="flex h-screen">{children}</View>;
}
