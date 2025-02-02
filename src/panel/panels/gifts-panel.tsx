import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function GiftsPanel() {
  return (
    <div className="w-full p-4 md:p-4 border rounded-lg" dir="rtl">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-right">
        کارت‌های هدیه
      </h2>
      <Tabs defaultValue="received-gifts" className="w-full">
        <TabsList className="flex gap-2 pl-1 max-md:pl-[2.5rem] md:gap-1 mb-6 overflow-x-auto overflow-y-hidden overscroll-x-contain scrollbar-hide">
          <TabsTrigger
            value="sent-gifts"
            className="font-medium whitespace-nowrap"
          >
            هدیه دادم
          </TabsTrigger>

          <TabsTrigger
            value="received-gifts"
            className="font-medium whitespace-nowrap"
          >
            هدیه گرفتم
          </TabsTrigger>
        </TabsList>

        <TabsContent value="received-gifts">
          <div className="p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">
              هدیه‌های دریافتی
            </h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              در این بخش می‌توانید تمام کارت‌های هدیه‌ای که از دوستان یا خانواده
              دریافت کرده‌اید، مشاهده کنید. جزئیات مبلغ، تاریخ دریافت و نحوه
              استفاده از آن‌ها در این قسمت نمایش داده می‌شود.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="sent-gifts">
          <div className="p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">
              هدیه‌های ارسال‌شده
            </h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              تمامی کارت‌های هدیه‌ای که برای دیگران ارسال کرده‌اید، در اینجا
              نمایش داده می‌شوند. شما می‌توانید تاریخ ارسال، گیرنده و وضعیت
              استفاده از کارت‌های هدیه را مشاهده کنید.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
