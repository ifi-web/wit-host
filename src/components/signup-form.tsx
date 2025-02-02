import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import SideFormImg from "@/assets/Images/form-side-img.jpg";

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-col gap-6 mx-4 md:min-w-[80vh]", className)}
      {...props}
    >
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8">
            <div className="flex flex-col gap-6 text-right">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">ثبت نام</h1>
                <p className="text-balance text-muted-foreground">
                  حساب کاربری جدید خود را ایجاد کنید
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="firstName">نام</Label>
                <Input id="firstName" type="text" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">نام خانوادگی</Label>
                <Input id="lastName" type="text" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phoneNumber">شماره تلفن</Label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  placeholder="+989xxxxxxxxx"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label className="text-right" htmlFor="email">
                  ایمیل
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="grid gap-2">
                  <Label htmlFor="password" className="">
                    رمز عبور
                  </Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Separator />
              <div className="grid gap-2">
                <Label htmlFor="confirmPassword">تایید رمز عبور</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  required
                  className="mt-2"
                />
              </div>
              <Button type="submit" className="w-full">
                ثبت نام
              </Button>
              <div className="text-center text-sm">
                حساب کاربری دارید؟
                <a href="#" className="underline mx-1 underline-offset-4">
                  ورود
                </a>
              </div>
            </div>
          </form>
          <div className="relative hidden bg-muted md:block">
            <img
              src={SideFormImg}
              alt="تصویر"
              className="absolute inset-0 h-full object-cover"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        با کلیک بر روی ثبت نام، شما با <a href="#">شرایط خدمات</a> و
        <a href="#">سیاست حفظ حریم خصوصی</a> ما موافقت می‌کنید.
      </div>
    </div>
  );
}
