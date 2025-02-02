import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ListsPanel() {
  return (
    <div className="w-full p-4 md:p-4 border rounded-lg" dir="rtl">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-right">
        لیست‌ها
      </h2>
      <Tabs defaultValue="favorites" className="w-full">
        <TabsList className="flex gap-2 pl-1 max-md:pl-[2.5rem] md:gap-1 mb-6 overflow-x-auto overflow-y-hidden overscroll-x-contain scrollbar-hide">
          <TabsTrigger
            value="notifications"
            className="flex items-center gap-2 font-medium whitespace-nowrap"
          >
            اطلاع‌رسانی‌ها
          </TabsTrigger>

          <TabsTrigger
            value="otherLists"
            className="flex items-center gap-2 font-medium whitespace-nowrap"
          >
            لیست‌های دیگر
          </TabsTrigger>

          <TabsTrigger
            value="favorites"
            className="flex items-center gap-2 font-medium whitespace-nowrap"
          >
            لیست علاقه‌مندی
          </TabsTrigger>
        </TabsList>

        <TabsContent value="favorites">
          <div className="flex flex-col p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">
              لیست علاقه‌مندی
            </h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              در اینجا مواردی که به عنوان علاقه‌مندی‌های شما ذخیره شده‌اند نمایش
              داده می‌شوند.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="otherLists">
          <div className="flex flex-col p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">لیست‌های دیگر</h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              در اینجا سایر لیست‌هایی که ایجاد کرده‌اید قابل مشاهده هستند.
            </p>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <div className="flex flex-col p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">اطلاع‌رسانی‌ها</h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              در این قسمت تمامی اطلاع‌رسانی‌ها و پیام‌های مربوط به حساب شما
              نمایش داده می‌شوند.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
