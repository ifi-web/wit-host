import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";
import { ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";

export default function ProductCard() {
  return (
    <Card
      className="flex flex-col justify-center items-center text-right w-auto h-[300px] m-1"
      dir="rtl"
    >
      <CardHeader className="">
        <CardTitle>نام محصول</CardTitle>
      </CardHeader>
      <CardContent className="">
        <img className="" src="https://placehold.co/100" alt="" />
      </CardContent>
      <CardFooter className="flex flex-col">
        <CardDescription className="my-1">USB Type-C</CardDescription>
        <CardDescription className="my-1">100,000 تومان</CardDescription>
        <Button variant="outline" className="mt-2" effect="ringHover">
          اضافه به سبد
          <ShoppingBasket />
        </Button>
      </CardFooter>
    </Card>
  );
}
