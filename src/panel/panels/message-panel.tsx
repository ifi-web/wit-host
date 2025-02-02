import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MessagesPanel() {
  return (
    <div className="w-full p-4 md:p-4 border rounded-lg" dir="rtl">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-right">
        پیام‌ها
      </h2>
      <Tabs defaultValue="read-all" className="w-full">
        <TabsList className="flex gap-2 pl-1 max-md:pl-[9rem] md:gap-1 mb-6 overflow-x-auto overflow-y-hidden overscroll-x-contain scrollbar-hide">
          <TabsTrigger
            value="all-messages"
            className="font-medium whitespace-nowrap"
          >
            همه پیام‌ها
          </TabsTrigger>
          <TabsTrigger
            value="activities"
            className="font-medium whitespace-nowrap"
          >
            فعالیت‌ها
          </TabsTrigger>
          <TabsTrigger value="orders" className="font-medium whitespace-nowrap">
            سفارش‌ها
          </TabsTrigger>
          <TabsTrigger
            value="discounts"
            className="font-medium whitespace-nowrap"
          >
            تخفیف‌ها
          </TabsTrigger>
          <TabsTrigger
            value="read-all"
            className="font-medium whitespace-nowrap"
          >
            خواندن همه
          </TabsTrigger>
        </TabsList>

        <TabsContent value="read-all">
          <div className="p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">
              خواندن همه پیام‌ها
            </h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              تمامی پیام‌های جدید و خوانده‌نشده در این بخش نمایش داده می‌شوند.
              شما می‌توانید پیام‌های تبلیغاتی، اطلاع‌رسانی‌ها و پیام‌های مهم را
              بررسی کنید.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="all-messages">
          <div className="p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">همه پیام‌ها</h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              لیست کاملی از پیام‌های دریافتی شامل اطلاع‌رسانی‌های مهم، پیشنهادات
              ویژه و سایر مکاتبات در اینجا قابل مشاهده است.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="activities">
          <div className="p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">فعالیت‌ها</h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              تمامی پیام‌های مربوط به فعالیت‌های شما، شامل بروزرسانی‌های حساب،
              تغییرات پروفایل و اعلان‌های مهم، در این بخش ذخیره می‌شوند.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="orders">
          <div className="p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">
              پیام‌های سفارش‌ها
            </h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              در اینجا پیام‌های مربوط به سفارش‌های شما، از جمله تأیید خرید،
              ارسال محصول و تغییر وضعیت سفارش نمایش داده می‌شوند.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="discounts">
          <div className="p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">
              تخفیف‌ها و پیشنهادات ویژه
            </h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              در این بخش می‌توانید پیشنهادهای تخفیفی، کدهای کوپن و
              اطلاع‌رسانی‌های مرتبط با جشنواره‌های فروش را مشاهده کنید.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
