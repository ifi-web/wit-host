import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function QuestionsPanel() {
  return (
    <div className="w-full p-4 md:p-4 border rounded-lg" dir="rtl">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-right">
        دیدگاه‌ها و پرسش‌ها
      </h2>
      <Tabs defaultValue="my-questions" className="w-full">
        <TabsList className="flex gap-2 pl-1 max-md:pl-[2.5rem] md:gap-1 mb-6 overflow-x-auto overflow-y-hidden overscroll-x-contain scrollbar-hide">
          <TabsTrigger
            value="my-comments"
            className="flex items-center gap-2 font-medium whitespace-nowrap"
          >
            دیدگاه‌های من
          </TabsTrigger>

          <TabsTrigger
            value="pending-comments"
            className="flex items-center gap-2 font-medium whitespace-nowrap"
          >
            در انتظار دیدگاه
          </TabsTrigger>

          <TabsTrigger
            value="my-questions"
            className="flex items-center gap-2 font-medium whitespace-nowrap"
          >
            پرسش‌های من
          </TabsTrigger>
        </TabsList>

        <TabsContent value="my-questions">
          <div className="flex flex-col p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">پرسش‌های من</h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              تمامی پرسش‌هایی که شما در مورد محصولات یا خدمات مطرح کرده‌اید، در
              اینجا نمایش داده می‌شوند. شما می‌توانید پاسخ‌های دریافت‌شده را
              مشاهده و بررسی کنید.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="my-comments">
          <div className="flex flex-col p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">دیدگاه‌های من</h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              تمامی دیدگاه‌هایی که در مورد محصولات یا مقالات ثبت کرده‌اید، در
              این بخش قابل مشاهده هستند. شما می‌توانید وضعیت انتشار و تعاملات
              کاربران را بررسی کنید.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="pending-comments">
          <div className="flex flex-col p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">
              در انتظار دیدگاه
            </h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              دیدگاه‌هایی که هنوز توسط مدیریت سایت تأیید نشده‌اند، در اینجا قرار
              دارند. پس از بررسی و تأیید، این دیدگاه‌ها در بخش دیدگاه‌های من
              نمایش داده خواهند شد.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
