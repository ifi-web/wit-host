import { memo, useState, useMemo, useCallback } from "react";
import {
  Activity,
  Plus,
  Package,
  List,
  MessageCircle,
  MapPin,
  Gift,
  Mail,
  History,
  User,
  Edit,
  Wallet
} from "lucide-react";

import BlurFade from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

import ActivityPanel from "./panels/activity-panel";
import PlusPanel from "./panels/plus-panel";
import OrdersPanel from "./panels/orders-panel";
import ListsPanel from "./panels/lists-panel";
import QuestionsPanel from "./panels/questions-panel";
import AddressesPanel from "./panels/addresses-panel";
import GiftsPanel from "./panels/gifts-panel";
import MessagesPanel from "./panels/message-panel";
import HistoryPanel from "./panels/history-panel";
import AccountInfoPanel from "./panels/accountinfo-panel";

interface LinkButtonProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const LinkButton = memo(({ label, icon, onClick }: LinkButtonProps) => (
  <Button
    variant="ghost"
    effect="shineHover"
    className="flex justify-end items-center text-right w-full"
    onClick={onClick}
  >
    {label} {icon}
  </Button>
));

const PANELS: Record<string, React.ReactNode> = {
  activity: <ActivityPanel />,
  plus: <PlusPanel />,
  orders: <OrdersPanel />,
  lists: <ListsPanel />,
  questions: <QuestionsPanel />,
  addresses: <AddressesPanel />,
  gifts: <GiftsPanel />,
  messages: <MessagesPanel />,
  history: <HistoryPanel />,
  accountInfo: <AccountInfoPanel />
};

const UserPanel = memo(() => {
  const [activePanel, setActivePanel] = useState<string>("activity");

  const handleEditClick = useCallback(() => {
    console.log("Edit button clicked");
  }, []);

  const linkButtons = useMemo(
    () => [
      {
        label: "خلاصه فعالیت‌ها",
        icon: <Activity className="ml-1 mt-[2px]" />,
        onClick: () => setActivePanel("activity")
      },
      {
        label: "پلاس",
        icon: <Plus className="ml-1 mt-[1px]" />,
        onClick: () => setActivePanel("plus")
      },
      {
        label: "سفارش‌ها",
        icon: <Package className="ml-1 mt-[1px]" />,
        onClick: () => setActivePanel("orders")
      },
      {
        label: "لیست‌های من",
        icon: <List className="ml-1 mt-[1px]" />,
        onClick: () => setActivePanel("lists")
      },
      {
        label: "دیدگاه‌ها و پرسش‌ها",
        icon: <MessageCircle className="ml-1 mt-[1px]" />,
        onClick: () => setActivePanel("questions")
      },
      {
        label: "آدرس‌ها",
        icon: <MapPin className="ml-1 mt-[1px]" />,
        onClick: () => setActivePanel("addresses")
      },
      {
        label: "کارت‌های هدیه",
        icon: <Gift className="ml-1 mt-[1px]" />,
        onClick: () => setActivePanel("gifts")
      },
      {
        label: "پیام‌ها",
        icon: <Mail className="ml-1 mt-[1px]" />,
        onClick: () => setActivePanel("messages")
      },
      {
        label: "بازدید‌های اخیر",
        icon: <History className="ml-1 mt-[1px]" />,
        onClick: () => setActivePanel("history")
      },
      {
        label: "اطلاعات حساب کاربری",
        icon: <User className="ml-1 mt-[1px]" />,
        onClick: () => setActivePanel("accountInfo")
      }
    ],
    []
  );

  const [walletMoney] = useState<number>(15323254);
  const [amount, setAmount] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedHub, setSelectedHub] = useState("پارسیان");
  const paymentHubs = ["پارسیان", "ملت", "تجارت"];

  return (
    <BlurFade delay={0.5} inView>
      <div className="flex justify-center items-center w-full h-full p-5">
        <div className="Panel flex flex-col w-full lg:flex-row lg:w-3/4 xl:w-2/3 max-w-7xl">
          <aside className="LP flex flex-col h-full border rounded-lg m-1 py-3 px-4 flex-[0.4] lg:order-2">
            <div className="LP-1 flex flex-col">
              <div className="flex flex-row justify-between items-center text-right">
                <Button
                  variant="ghost"
                  effect="shineHover"
                  size="icon"
                  onClick={handleEditClick}
                  className="w-6 h-6 rounded-sm"
                >
                  <Edit />
                </Button>
                <div className="flex flex-col">
                  <h1 className="text-md flex">
                    نام کاربری
                    <User
                      className="mt-[3px] ml-1"
                      size={15}
                      strokeWidth={1.5}
                      absoluteStrokeWidth
                    />
                  </h1>
                  <a className="text-sm" href="">
                    0910000000
                  </a>
                </div>
              </div>
              <Separator className="h-[0.5px] my-2" />
              <div className="flex flex-row justify-between items-center text-right">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      className="w-24 rounded-sm text-zinc-500"
                      variant="ghost"
                    >
                      افزایش موجودی
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-4">
                    <Dialog open={open} onOpenChange={setOpen}>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>افزایش موجودی</DialogTitle>
                        </DialogHeader>

                        <h1 className="text-lg font-semibold text-center">
                          مبلغ:{" "}
                          {amount
                            ? `${parseInt(amount).toLocaleString()} تومان`
                            : "0 تومان"}
                        </h1>

                        <div className="flex flex-col gap-2 text-right">
                          <Label htmlFor="price">مبلغ موردنظر (تومان)</Label>
                          <Input
                            id="price"
                            type="text"
                            className="text-right"
                            placeholder="مثال: 100000"
                            value={amount}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, "");
                              setAmount(value);
                            }}
                          />
                        </div>

                        <div className="flex flex-col gap-2 mt-2 text-right">
                          <Label>انتخاب درگاه پرداخت</Label>
                          <div className="flex justify-between gap-2">
                            {paymentHubs.map((hub) => (
                              <Button
                                key={hub}
                                variant={
                                  selectedHub === hub ? "default" : "outline"
                                }
                                className={cn(
                                  "flex-1",
                                  selectedHub === hub &&
                                    "border-2 border-primary"
                                )}
                                onClick={() => setSelectedHub(hub)}
                              >
                                {hub}
                              </Button>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mt-2">
                          <Checkbox
                            id="terms"
                            checked={accepted}
                            onCheckedChange={(checked) =>
                              setAccepted(checked === true)
                            }
                          />
                          <Label htmlFor="terms" className="cursor-pointer">
                            شرایط و مقررات را می‌پذیرم
                          </Label>
                        </div>

                        <div className="flex justify-between mt-4">
                          <Button
                            variant="outline"
                            onClick={() => setOpen(false)}
                          >
                            لغو
                          </Button>
                          <Button
                            disabled={!amount || !accepted}
                            onClick={() => {
                              console.log(
                                `پرداخت ${amount} تومان از طریق ${selectedHub} انجام شد`
                              );
                              setOpen(false);
                            }}
                          >
                            پرداخت
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </PopoverContent>
                </Popover>
                <div className="flex flex-col items-end">
                  <h1 className="text-md flex">
                    کیف پول
                    <Wallet
                      className="mt-[3px] ml-1"
                      size={15}
                      strokeWidth={1.5}
                      absoluteStrokeWidth
                    />
                  </h1>
                  <p className="text-sm text-zinc-500">
                    {walletMoney.toLocaleString()} تومان
                  </p>
                </div>
              </div>
              <Separator className="h-[0.5px] my-2" />
            </div>

            <div className="LP-2 flex flex-col items-end">
              {linkButtons.map(({ label, icon, onClick }, index) => (
                <LinkButton
                  key={index}
                  label={label}
                  icon={icon}
                  onClick={onClick}
                />
              ))}
            </div>
          </aside>

          <main className="RP flex-1 h-full flex rounded-lg mx-1 my-1 lg:order-1">
            {PANELS[activePanel] || <div>Select a panel</div>}
          </main>
        </div>
      </div>
    </BlurFade>
  );
});

export default UserPanel;
