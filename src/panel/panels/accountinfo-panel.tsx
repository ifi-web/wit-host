import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface InfoItem {
  label: string;
  value: string;
  verified?: boolean;
  action?: string;
}

interface AccountInfoPanelProps {
  className?: string;
}

const InfoItem = ({ label, value, verified, action }: InfoItem) => (
  <div className="flex flex-row-reverse justify-between items-center py-3 border-b">
    <div className="flex flex-col gap-1 text-right">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
    {verified ? (
      <Badge variant="outline">تایید</Badge>
    ) : (
      action && (
        <Button variant="ghost" className="text-primary" size="sm">
          {action}
        </Button>
      )
    )}
  </div>
);

const AccountInfoPanel: React.FC<AccountInfoPanelProps> = ({ className }) => {
  return (
    <div className={`flex flex-col w-full gap-4 ${className}`}>
      <div className="AccountInfoPanel flex flex-col w-full p-6 border rounded-lg gap-6">
        <div className="flex flex-row-reverse justify-between items-center mb-8">
          <h2 className="text-lg font-semibold">اطلاعات شخصی</h2>
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 ml-2" />
            افزودن اطلاعات
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {[
              {
                label: "نام و نام خانوادگی",
                value: "محمد محمدی",
                verified: true
              },
              {
                label: "کد ملی",
                value: "3123123",
                verified: true
              },
              {
                label: "شماره موبایل",
                value: "0912389123",
                verified: true
              },
              {
                label: "ایمیل",
                value: "mostafakhazaeigalaxy@gmail.com",
                action: "ویرایش"
              }
            ].map((item, index) => (
              <InfoItem key={index} {...item} />
            ))}
          </div>

          <div className="space-y-6">
            {[
              {
                label: "رمز عبور",
                value: "•••••••",
                action: "ویرایش"
              },
              {
                label: "روش بازگرداندن پول من",
                value: "ﺷﻤﺎره ﺷِبá - IR23492742347823984",
                verified: true
              },
              {
                label: "تاریخ تولد",
                value: "۱۳۵۶/۳/۱",
                verified: true
              },
              {
                label: "شغل",
                value: "کد اقتصادی",
                action: "افزودن"
              }
            ].map((item, index) => (
              <InfoItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="LegalInfoPanel flex flex-col w-full p-6 border rounded-lg gap-6">
        <div className="flex flex-row-reverse justify-between items-center mb-8">
          <h2 className="text-lg font-semibold">اطلاعات حقوقی</h2>
          <Button variant="outline" size="sm">
            <Plus className="w-4 h-4 ml-2" />
            افزودن اطلاعات
          </Button>
        </div>

        <div className="flex flex-col gap-4 text-right leading-relaxed">
          <p className="text-sm text-muted-foreground">
            این گزینه برای کسانی است که نیاز به خرید سازمانی (با فاکتور رسمی و
            گواهی ارزش‌افزوده) دارند.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountInfoPanel;
