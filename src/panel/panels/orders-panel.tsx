import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const orderEncounters = {
  currentOrders: 15,
  deliveredOrders: 85,
  returnedOrders: 85,
  canceledOrders: 85
};

export default function OrdersPanel() {
  return (
    <div className="w-full p-4 md:p-4 border rounded-lg">
      <h2 className="text-lg md:text-xl font-semibold mb-4 text-center md:text-right">
        تاریخچه سفارشات
      </h2>
      <Tabs defaultValue="current" className="w-full">
        <TabsList className="flex gap-2 pl-1 max-md:pl-[11.5rem] md:gap-1 mb-6 overflow-x-auto overflow-y-hidden overscroll-x-contain scrollbar-hide">
          <TabsTrigger
            value="canceled"
            className="flex items-center gap-2 font-medium whitespace-nowrap"
          >
            <Badge variant="outline">{orderEncounters.canceledOrders}</Badge>
            لغو شده
          </TabsTrigger>

          <TabsTrigger
            value="returned"
            className="flex items-center gap-2 font-medium whitespace-nowrap"
          >
            <Badge variant="outline">{orderEncounters.returnedOrders}</Badge>
            مرجوع شده
          </TabsTrigger>

          <TabsTrigger
            value="delivered"
            className="flex items-center gap-2 font-medium whitespace-nowrap"
          >
            <Badge variant="outline">{orderEncounters.deliveredOrders}</Badge>
            تحویل شده
          </TabsTrigger>

          <TabsTrigger
            value="current"
            className="flex items-center gap-2 font-medium whitespace-nowrap"
          >
            <Badge variant="outline">{orderEncounters.currentOrders}</Badge>
            جاری
          </TabsTrigger>
        </TabsList>

        <TabsContent value="current">
          <div className="flex flex-col p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">سفارشات جاری</h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              در اینجا سفارشاتی که در حال پردازش یا ارسال هستند نمایش داده
              می‌شوند
            </p>
          </div>
        </TabsContent>

        <TabsContent value="delivered">
          <div className="flex flex-col p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">
              سفارشات تحویل شده
            </h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              تمامی سفارشاتی که با موفقیت تحویل داده شده‌اند، در اینجا قابل
              مشاهده هستند
            </p>
          </div>
        </TabsContent>

        <TabsContent value="returned">
          <div className="flex flex-col p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">
              سفارشات مرجوع شده
            </h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              سفارشاتی که به هر دلیلی مرجوع شده‌اند، در این قسمت نمایش داده
              می‌شوند
            </p>
          </div>
        </TabsContent>

        <TabsContent value="canceled">
          <div className="flex flex-col p-3 md:p-4 border rounded-lg text-right">
            <h3 className="text-md md:text-lg font-semibold">
              سفارشات لغو شده
            </h3>
            <p className="mt-2 text-sm md:text-base text-zinc-600">
              تمامی سفارشاتی که لغو شده‌اند، در اینجا قرار دارند
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
