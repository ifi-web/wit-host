import React, { useState, useEffect, useMemo, useCallback } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import BlurFade from "@/components/ui/blur-fade";

const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 1000);

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 1000);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const NavContent = useMemo(() => {
    return isMobile ? <MobileNav /> : <DesktopNav />;
  }, [isMobile]);

  return (
    <BlurFade delay={0.25} inView direction="down">
      <nav className="transition-all duration-300 ease-in-out">
        {NavContent}
      </nav>
    </BlurFade>
  );
};

export default Navbar;
