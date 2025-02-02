import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  useState,
  useCallback,
  FC,
  FormEvent,
  Dispatch,
  SetStateAction,
  memo
} from "react";
import Icons from "@/assets/Icons/Index";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";

interface NavButtonProps {
  text: string;
  key: number;
  onClick?: () => void;
}

const NavButton: FC<NavButtonProps> = ({ text, key, onClick }) => (
  <Button
    key={key}
    className="my-1 w-full"
    variant="ghost"
    effect="ringHover"
    onClick={onClick}
  >
    {text}
  </Button>
);

interface NavFormProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const NavForm: FC<NavFormProps> = ({
  searchValue,
  setSearchValue,
  onSubmit
}) => (
  <form className="flex" onSubmit={onSubmit}>
    <div className="space-y-2 text-right">
      <div className="relative">
        <Input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="peer pe-9 ps-9"
          placeholder="جستجو..."
          type="search"
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
          <Search size={16} strokeWidth={2} />
        </div>
        <button
          className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Submit search"
          type="submit"
        >
          <ArrowLeft size={16} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>
    </div>
  </form>
);

interface NavIconProps {
  iconName: keyof typeof Icons;
  index: number;
  onClick?: () => void;
}

const NavIcon: FC<NavIconProps> = ({ iconName, index, onClick }) => (
  <Button
    key={index}
    className="mx-1"
    variant="link"
    effect="shine"
    size="icon"
    onClick={onClick}
  >
    {iconName === "User" ? (
      <Link to="/form">
        <img src={Icons[iconName]} alt={`${iconName} Icon`} />
      </Link>
    ) : (
      <img src={Icons[iconName]} alt={`${iconName} Icon`} />
    )}
  </Button>
);

const MobileNav: FC = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(searchValue);
    },
    [searchValue]
  );

  const handleBlogClick = () => {};

  const handleJobsClick = () => {};

  const handleAboutClick = () => {};

  const handleAboutUsClick = () => {};

  const handleContactClick = () => {};

  const handleProductClick = () => {};

  const handleHomeClick = () => {};

  return (
    <nav className="mx-1 my-2">
      <div className="NavFirst flex flex-row justify-between items-center text-center mb-2">
        <div className="flex flex-row mx-1">
          <div dir="rtl" className="items-center">
            <NavForm
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onSubmit={handleSearch}
            />
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="mx-1" variant="outline" size="icon">
              <img src={Icons.Menu} alt="Menu Icon" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-center font-extrabold">
                <h1 className="text-2xl font-[Doran]">
                  {darkMode ? "دارک مارکت" : "وایت مارکت"}
                </h1>
              </SheetTitle>
            </SheetHeader>
            <Separator className="w-full my-3 h-[0.5px]" />
            <div className="flex flex-row justify-center items-center">
              {(["User", "Bag"] as Array<keyof typeof Icons>).map(
                (iconName, index) => (
                  <NavIcon key={index} iconName={iconName} index={index} />
                )
              )}
              <Button
                className="mx-1"
                variant="link"
                effect="shine"
                size="icon"
                onClick={toggleTheme}
              >
                <img
                  src={Icons[darkMode ? "Light" : "Dark"]}
                  alt="Toggle Theme"
                />
              </Button>
            </div>
            <Separator className="w-full my-3" />
            <div className="mt-4">
              {["درباره ما", "تماس", "محصول", "صفحه اصلی"].map(
                (text, index) => (
                  <NavButton
                    key={index}
                    text={text}
                    onClick={
                      text === "درباره ما"
                        ? handleAboutUsClick
                        : text === "تماس"
                        ? handleContactClick
                        : text === "محصول"
                        ? handleProductClick
                        : handleHomeClick
                    }
                  />
                )
              )}
            </div>
            <Separator className="w-full my-3" />
            <div className="mt-4">
              {["بلاگ", "مشاغل", "درباره"].map((text, index) => (
                <NavButton
                  key={index}
                  text={text}
                  onClick={
                    text === "بلاگ"
                      ? handleBlogClick
                      : text === "مشاغل"
                      ? handleJobsClick
                      : handleAboutClick
                  }
                />
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <Separator className="w-full my-3" />
      <div className="NavSec flex justify-between items-center text-center mx-10 mt-2"></div>
    </nav>
  );
};

export default memo(MobileNav);
