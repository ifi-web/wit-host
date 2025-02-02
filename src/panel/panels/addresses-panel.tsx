import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Hash, Phone, User, MoreVertical, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface AddressItemProps {
  index: number;
  city: string;
  postalCode: string;
  phone: string;
  fullName: string;
  addressText: string;
  onEdit: (index: number) => void;
  onDelete: (index: number) => void;
}

const AddressItem = ({
  index,
  city,
  postalCode,
  phone,
  fullName,
  addressText,
  onEdit,
  onDelete
}: AddressItemProps) => (
  <div className="border rounded-lg p-4 flex justify-between items-start gap-4">
    <div className="flex flex-col gap-2 flex-1">
      <div className="flex flex-row justify-end text-center items-center">
        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger>
            <MoreVertical className="w-5 h-5 mx-2 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="min-w-[120px]">
            <DropdownMenuItem onClick={() => onEdit(index)}>
              ویرایش
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-destructive"
              onClick={() => onDelete(index)}
            >
              حذف
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p className="text-sm text-muted-foreground text-right leading-relaxed hyphens-auto md:hyphens-none">
          {addressText}
        </p>
      </div>

      <div className="flex flex-col gap-1 text-sm text-right">
        <div className="flex items-center flex-row-reverse gap-1">
          <MapPin className="w-4 h-4 ms-2 text-muted-foreground shrink-0" />
          <span>{city}</span>
        </div>
        <div className="flex items-center flex-row-reverse gap-1">
          <Hash className="w-4 h-4 ms-2 text-muted-foreground shrink-0" />
          <span>{postalCode}</span>
        </div>
        <div className="flex items-center flex-row-reverse gap-1">
          <Phone className="w-4 h-4 ms-2 text-muted-foreground shrink-0" />
          <span>{phone}</span>
        </div>
        <div className="flex items-center flex-row-reverse gap-1">
          <User className="w-4 h-4 ms-2 text-muted-foreground shrink-0" />
          <span>{fullName}</span>
        </div>
      </div>
    </div>
  </div>
);

export default function AddressesPanel() {
  const [addresses, setAddresses] = useState<AddressItemProps[]>([
    {
      city: "تهران",
      postalCode: "۱۲۳۴۵۶۷۸۹۰",
      phone: "۰۹۱۲۳۴۵۶۷۸۹",
      fullName: "علی محمدی",
      addressText:
        "تهران، منطقه ۵، خیابان آزادی، کوچه گلستان، پلاک ۲۳، طبقه ۳، واحد ۵",
      index: 0,
      onEdit: () => {},
      onDelete: () => {}
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [deletingIndex, setDeletingIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    city: "",
    postalCode: "",
    phone: "",
    fullName: "",
    addressText: ""
  });

  const handleSaveAddress = () => {
    if (editingIndex !== null) {
      const updatedAddresses = [...addresses];
      updatedAddresses[editingIndex] = {
        ...updatedAddresses[editingIndex],
        ...formData
      };
      setAddresses(updatedAddresses);
    } else {
      setAddresses([
        ...addresses,
        {
          ...formData,
          index: addresses.length,
          onEdit: () => {},
          onDelete: () => {}
        }
      ]);
    }
    setIsDialogOpen(false);
    setFormData({
      city: "",
      postalCode: "",
      phone: "",
      fullName: "",
      addressText: ""
    });
    setEditingIndex(null);
  };

  const handleDeleteConfirm = () => {
    if (deletingIndex !== null) {
      const newAddresses = addresses.filter((_, i) => i !== deletingIndex);
      setAddresses(newAddresses);
      setDeletingIndex(null);
    }
  };

  return (
    <div className="flex flex-col w-full p-4 border rounded-lg gap-4">
      <div className="flex flex-row-reverse justify-between items-center">
        <h3 className="text-lg font-semibold">آدرس‌ها</h3>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              effect="shine"
              className="gap-2 px-3 md:px-4"
              onClick={() => {
                setFormData({
                  city: "",
                  postalCode: "",
                  phone: "",
                  fullName: "",
                  addressText: ""
                });
                setEditingIndex(null);
              }}
            >
              <Plus className="w-4 h-4" />
              <span className="hidden md:inline">ثبت آدرس جدید</span>
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                {editingIndex !== null ? "ویرایش آدرس" : "افزودن آدرس جدید"}
              </DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              {/* Form fields */}
              {Object.entries(formData).map(([key, value]) => (
                <div className="grid grid-cols-4 items-center gap-4" key={key}>
                  <Label htmlFor={key} className="text-right">
                    {
                      {
                        fullName: "نام کامل",
                        addressText: "آدرس",
                        city: "شهر",
                        postalCode: "کد پستی",
                        phone: "تلفن"
                      }[key]
                    }
                  </Label>
                  <Input
                    id={key}
                    value={value}
                    onChange={(e) =>
                      setFormData({ ...formData, [key]: e.target.value })
                    }
                    className="col-span-3"
                  />
                </div>
              ))}
            </div>

            <Button type="submit" onClick={handleSaveAddress}>
              {editingIndex !== null ? "ذخیره تغییرات" : "ذخیره آدرس"}
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      {addresses.map((address, index) => (
        <AddressItem
          key={index}
          {...address}
          onEdit={(index) => {
            setFormData(addresses[index]);
            setEditingIndex(index);
            setIsDialogOpen(true);
          }}
          onDelete={setDeletingIndex}
        />
      ))}

      <Dialog
        open={deletingIndex !== null}
        onOpenChange={(open) => !open && setDeletingIndex(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>حذف آدرس</DialogTitle>
          </DialogHeader>
          <p className="text-right">آیا از حذف این آدرس مطمئن هستید؟</p>
          <DialogFooter className="sm:justify-start">
            <div className="flex justify-end gap-2 w-full">
              <Button variant="outline" onClick={() => setDeletingIndex(null)}>
                لغو
              </Button>
              <Button variant="destructive" onClick={handleDeleteConfirm}>
                تایید
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
