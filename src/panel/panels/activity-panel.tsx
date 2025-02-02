import { Button } from "@/components/ui/button";
import { ChevronLeft, ShoppingBasket, Sparkles } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import React from "react";
import ProductCard from "@/components/ProductCard";
interface OrderStatusItemProps {
  count: number;
  status: string;
}

const OrderStatusItem = React.memo(
  ({ count, status }: OrderStatusItemProps) => (
    <div className="order-status-item flex items-center justify-between px-4 py-2 rounded-md border border-gray-200">
      <ShoppingBasket className="h-6 w-6" />
      <div className="flex flex-col">
        <span className="text-sm font-medium">{count} سفارش</span>
        <span className="text-xs text-gray-500">{status}</span>
      </div>
    </div>
  )
);

export default function ActivityPanel() {
  return (
    <div className="activity-panel flex flex-col w-full">
      <div className="order-info border-[1px] p-4 rounded-lg mb-2">
        <div className="flex flex-row md:flex-row items-center justify-between">
          <div className="flex items-center">
            <Button
              className="order-info-button mr-2"
              variant="link"
              effect="expandIcon"
              icon={ChevronLeft}
              iconPlacement="left"
            >
              مشاهده همه
            </Button>
          </div>
          <h2 className="flex flex-rowtext-md font-medium">
            سفارش‌های من
            <Sparkles
              color="Purple"
              className="SparkleIcon ml-2"
              strokeWidth={2}
              size={20}
            />
          </h2>
        </div>
        <div className="order-status-list text-right grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <OrderStatusItem count={0} status="مرجوع شده" />
          <OrderStatusItem count={0} status="تحویل شده" />
          <OrderStatusItem count={0} status="جاری" />
        </div>
      </div>

      <div className="activity-order-info border-[1px] p-4 rounded-lg mb-2">
        <div className="flex flex-row md:flex-row items-center justify-between">
          <div className="flex items-center">
            <Button
              className="order-info-button mr-2"
              variant="link"
              effect="expandIcon"
              icon={ChevronLeft}
              iconPlacement="left"
            >
              مشاهده همه
            </Button>
          </div>
          <h2 className="flex flex-rowtext-md font-medium">
            از لیست‌های شما
            <Sparkles
              color="Purple"
              className="SparkleIcon ml-2"
              strokeWidth={2}
              size={20}
            />
          </h2>
        </div>
        <div className="product-list flex justify-end items-center text-center">
          <ScrollArea
            dir="rtl"
            className="w-full whitespace-nowrap mt-3 h-[315px]"
          >
            <div className="flex flex-row w-1 h-auto">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>

      <div className="recently-order-info border-[1px] p-4 rounded-lg mb-2">
        <div className="flex flex-row md:flex-row items-center justify-between">
          <div className="flex items-center">
            <Button
              className="order-info-button mr-2"
              variant="link"
              effect="expandIcon"
              icon={ChevronLeft}
              iconPlacement="left"
            >
              مشاهده همه
            </Button>
          </div>
          <h2 className="flex flex-rowtext-md font-medium">
            خریدهای پرتکرار شما
            <Sparkles
              color="Purple"
              className="SparkleIcon ml-2"
              strokeWidth={2}
              size={20}
            />
          </h2>
        </div>
        <div className="product-list flex justify-end items-center text-center">
          <ScrollArea
            dir="rtl"
            className="w-full whitespace-nowrap mt-3 h-[315px]"
          >
            <div className="flex flex-row w-1 h-auto">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
