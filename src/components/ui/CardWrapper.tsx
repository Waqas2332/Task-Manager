import { type ReactNode } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/card";

type CardWrapperProps = {
  title: string;
  description: string;
  children: ReactNode;
};

export default function CardWrapper({
  children,
  title,
  description,
}: CardWrapperProps) {
  return (
    <Card className="w-[450px]">
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}
