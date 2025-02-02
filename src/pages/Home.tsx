import * as React from "react";
import { useMemo } from "react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import BlurFade from "@/components/ui/blur-fade";
import {
  ArrowDownLeft,
  DollarSign,
  MessagesSquare,
  PersonStanding,
  Timer,
  Zap,
  ZoomIn,
  Mail,
  MapPin,
  Phone,
  ShoppingCart
} from "lucide-react";
import { Features, Jobs, People, Faqs, FooterSec } from "@/data/datas";
import Autoplay from "embla-carousel-autoplay";
import Chatbot from "@/components/ui/chatbot";

const Home = () => {
  const { darkMode } = useTheme();

  const iconMap = useMemo(
    () => ({
      Timer: <Timer className="size-4 md:size-6" />,
      Zap: <Zap className="size-4 md:size-6" />,
      ZoomIn: <ZoomIn className="size-4 md:size-6" />,
      PersonStanding: <PersonStanding className="size-4 md:size-6" />,
      DollarSign: <DollarSign className="size-4 md:size-6" />,
      MessagesSquare: <MessagesSquare className="size-4 md:size-6" />
    }),
    []
  );
  const handleLearnMoreClick = () => {};

  const handleBuyNowClick = () => {};

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <>
      <Chatbot
        model="deepseek-chat"
        systemPrompt="You are a helpful assistant specialized in technical questions"
        position="bottom-right"
        mobileFullScreen
      />
      <BlurFade delay={0.25} inView>
        <h1 className="text-center pt-4 text-2xl font-[Doran] lg:hidden">
          {darkMode ? "دارک مارکت" : "وایت مارکت"}
        </h1>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <section className="flex flex-col justify-center items-center py-10 mx-4">
          <div className="container">
            <div dir="rtl" className="grid items-center gap-8 lg:grid-cols-2">
              <div className="flex flex-col lg:items-start lg:text-left">
                <Badge className="w-28" variant="outline">
                  <ArrowDownLeft className="ml-2 size-4" />
                  انتشار جدید
                </Badge>
                <h1 className="text-right my-6 text-pretty text-4xl font-bold lg:text-6xl">
                  {darkMode ? "دارک مارکت" : "وایت مارکت"}
                </h1>
                <p className="text-right mb-8 max-w-xl text-muted-foreground lg:text-xl">
                  {darkMode ? "دارک مارکت" : "وایت مارکت"}, فروشگاه آنلاین پیشرو
                  در ارائه بهترین محصولات با کیفیت و قیمت مناسب است. ما متعهد به
                  ارائه تجربه‌ای بی‌نظیر در خرید اینترنتی با خدمات مشتریان
                  استثنایی هستیم. به خانواده شتلاینی بپیوندید و از خرید آسان و
                  مطمئن لذت ببرید.
                </p>

                <div
                  dir="ltr"
                  className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-end"
                >
                  <Button
                    effect="ringHover"
                    variant="outline"
                    className="w-full sm:w-auto rounded-full"
                    onClick={handleLearnMoreClick}
                  >
                    <ArrowDownLeft className="" />
                    بیشتر بدانید
                  </Button>
                  <Button
                    className="w-full sm:w-auto"
                    onClick={handleBuyNowClick}
                    effect="expandIcon"
                    icon={ShoppingCart}
                    iconPlacement="left"
                  >
                    خرید کنید
                  </Button>
                </div>
              </div>
              <img
                src="https://fakeimg.pl/600x400/ffffff/000000"
                alt=""
                className="max-h-96 w-full rounded-md object-cover"
              />
            </div>
          </div>
        </section>
      </BlurFade>

      <BlurFade delay={0.25 * 2} inView>
        <section className="flex justify-center items-center text-center mx-4">
          <Carousel
            className="w-[100%] relative mx-10"
            plugins={[autoplayPlugin.current]}
            onMouseEnter={autoplayPlugin.current.stop}
            onMouseLeave={() => autoplayPlugin.current.play()}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="relative">
                  <Card className="w-full max-w-6xl mx-auto border shadow-lg overflow-hidden">
                    <div className="relative">
                      <div className="absolute top-2 right-2 flex justify-end">
                        <Badge
                          className="bg-red-600 text-white shadow-lg shadow-red-300 px-4 py-2"
                          variant="destructive"
                        >
                          تخفیف شگفت انگیز
                        </Badge>
                      </div>
                      <img
                        src="https://fakeimg.pl/600x400/ffffff/000000"
                        alt=""
                        className="max-h-[15rem] w-full object-cover"
                      />
                    </div>
                    <CardHeader className="">
                      <CardTitle className="text-lg font-semibold">
                        محصول {index + 1}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-500">
                        توضیحات کوتاه محصول {index + 1}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex justify-between items-center"></CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
          </Carousel>
        </section>
      </BlurFade>

      {/* <BlurFade delay={0.25 * 2} inView></BlurFade> */}
      {/* Add here */}

      <BlurFade delay={0.25 * 2} inView>
        <h1></h1>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <section dir="rtl" className="py-10 mx-4">
          <div className="container mx-auto max-w-screen-xl">
            <p className="mb-4 text-xs text-muted-foreground md:pl-5">
              ویژگی‌ها
            </p>
            <h2 className="text-3xl font-medium md:pl-5 lg:text-4xl">
              ویژگی‌های اصلی ما
            </h2>
            <div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20">
              {Features.map((feature, idx) => (
                <div
                  className="flex gap-6 rounded-lg md:block md:p-5"
                  key={idx}
                >
                  <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                    {iconMap[feature.icon as keyof typeof iconMap]}
                  </span>
                  <div>
                    <h3 className="font-medium md:mb-2 md:text-xl">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <section
          dir="rtl"
          className="flex justify-center items-center text-center py-10 mx-4"
        >
          <div className="container">
            <div className="mx-auto max-w-screen-lg">
              <div className="text-center lg:text-left">
                <h1 className="text-right text-3xl font-medium md:text-4xl">
                  فرصت‌های شغلی
                </h1>
              </div>
              <div className="mx-auto mt-6 flex flex-col gap-16 md:mt-14">
                {Jobs.map((JobCategory) => (
                  <div key={JobCategory.category} className="grid">
                    <h2 className="border-b pb-4 text-xl font-bold">
                      {JobCategory.category}
                    </h2>
                    {JobCategory.openings.map((Job) => (
                      <div
                        key={Job.title}
                        className="flex items-center justify-between border-b py-4"
                      >
                        <a
                          href={Job.link}
                          className="font-semibold hover:underline"
                        >
                          {Job.title}
                        </a>

                        <div
                          className={cn(
                            buttonVariants({
                              variant: "outline",
                              size: "sm"
                            }),
                            "pointer-events-none rounded-full"
                          )}
                        >
                          {Job.location}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <section className="flex flex-col justify-center items-center text-center py-10 mx-4">
          <div className="container flex flex-col items-center text-center">
            <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
              با تیم ما آشنا شوید
            </h2>
            <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
              {darkMode ? "دارک مارکت" : "وایت مارکت"} توسط یک تیم کوچک و متعهد
              دو نفره اداره می‌شود که با عشق و اشتیاق به ارائه بهترین محصولات
              دیجیتال برای مشتریان می‌پردازند. هر محصول با دقت و توجه به جزئیات
              تهیه شده است تا تجربه‌ای بی‌نظیر برای شما فراهم کند.
            </p>
          </div>
          <div className="container mt-5 flex justify-center">
            <div className="grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-2">
              {People.map((Person) => (
                <div key={Person.id} className="flex flex-col items-center">
                  <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
                    <AvatarImage src={Person.avatar} />
                    <AvatarFallback>{Person.name}</AvatarFallback>
                  </Avatar>
                  <p className="text-center font-medium">{Person.name}</p>
                  <p className="text-center text-muted-foreground">
                    {Person.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <section dir="rtl" className="flex justify-center py-10 mx-4">
          <div className="container">
            <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-5xl">
              سوالات متداول
            </h1>
            <Accordion type="single">
              {Faqs.map((Faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="hover:text-foreground/60 hover:no-underline">
                    {Faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{Faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <section
          dir="rtl"
          className="flex justify-center items-center text-center py-10 mx-4"
        >
          <div className="container">
            <div className="mb-14">
              <span className="text-sm font-semibold">با ما تماس بگیرید</span>
              <h1 className="mb-3 mt-1 text-balance text-3xl font-semibold md:text-4xl">
                با تیم دوستانه ما صحبت کنید
              </h1>
              <p className="text-lg text-muted-foreground">
                خوشحال می‌شویم که به شما کمک کنیم. فرم را پر کنید یا به ما ایمیل
                بزنید.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-3">
              <div className="flex flex-col items-center">
                <span className="mb-3 flex items-center justify-center size-12 rounded-full bg-accent">
                  <Mail className="h-6 w-6" />
                </span>
                <p className="mb-2 text-lg font-semibold">ایمیل بزنید</p>
                <p className="mb-3 text-muted-foreground">
                  تیم ما آماده کمک به شماست.
                </p>
                <a href="#" className="font-semibold hover:underline">
                  abc@example.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <span className="mb-3 flex items-center justify-center size-12 rounded-full bg-accent">
                  <MapPin className="h-6 w-6" />
                </span>
                <p className="mb-2 text-lg font-semibold">از ما دیدن کنید</p>
                <p className="mb-3 text-muted-foreground">
                  به دفتر ما بیایید و گفتگو کنید.
                </p>
                <a href="#" className="font-semibold hover:underline">
                  1234 خیابان نام، شهر نام
                </a>
              </div>
              <div className="flex flex-col items-center">
                <span className="mb-3 flex items-center justify-center size-12 rounded-full bg-accent">
                  <Phone className="h-6 w-6" />
                </span>
                <p className="mb-2 text-lg font-semibold">تماس بگیرید</p>
                <p className="mb-3 text-muted-foreground">
                  ما از دوشنبه تا جمعه، 9 صبح تا 5 بعدازظهر در دسترس هستیم.
                </p>
                <a href="#" className="font-semibold hover:underline">
                  +123 456 7890
                </a>
              </div>
            </div>
          </div>
        </section>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <section dir="rtl" className="flex justify-center py-32 mx-4">
          <div className="container">
            <footer>
              <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                <div className="col-span-2 mb-8 lg:mb-0">
                  <img
                    src="https://shadcnblocks.com/images/block/logos/shadcn-ui.svg"
                    alt="لوگو"
                    className="mb-4 h-7"
                  />
                  <p className="font-bold">شتلاینی</p>
                </div>
                {FooterSec.map((FooterSec, FooterSecIdx) => (
                  <div key={FooterSecIdx}>
                    <h3 className="mb-4 font-bold">{FooterSec.title}</h3>
                    <ul className="space-y-4 text-muted-foreground">
                      {FooterSec.links.map((link, linkIdx) => (
                        <li
                          key={linkIdx}
                          className="font-medium hover:text-primary"
                        >
                          <a href={link.href}>{link.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
                <p>
                  © 2025 {darkMode ? "دارک مارکت" : "وایت مارکت"}. کلیه حقوق
                  محفوظ است.
                </p>
                <ul className="flex gap-4">
                  <li className="underline hover:text-primary">
                    <a href="#">شرایط و ضوابط</a>
                  </li>
                  <li className="underline hover:text-primary">
                    <a href="#">سیاست حریم خصوصی</a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </section>
      </BlurFade>
    </>
  );
};

export default Home;
