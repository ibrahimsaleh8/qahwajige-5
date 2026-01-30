"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, ToolCase, Star, Key, ImageIcon } from "lucide-react"; // Import icons

// Menu items with icons
const items = [
  { title: "لوحة التحكم", url: "/dashboard", icon: Home },
  { title: "نبذة عنّا", url: "/dashboard/about", icon: Info },
  { title: "خدمات الضيافة", url: "/dashboard/services", icon: ToolCase },
  { title: "لماذا تختارنا", url: "/dashboard/whyus", icon: Star },
  { title: "إدارة الكلمات المفتاحية", url: "/dashboard/keywords", icon: Key },
  { title: "معرض أعمالنا", url: "/dashboard/gallary", icon: ImageIcon },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="bg-second-bg! text-black!">
      <SidebarContent className="py-10 bg-second-bg! text-black!">
        <div className="px-5 text-xl font-bold">لوحة التحكم</div>
        <SidebarGroup>
          <SidebarGroupLabel>روابط</SidebarGroupLabel>
          <SidebarGroupContent>
            <ul className="flex flex-col gap-4 w-full">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <li className="w-full flex items-center" key={item.title}>
                    <Link
                      href={item.url}
                      className={`${pathname === item.url ? "bg-main-color text-white" : ""} 
                        w-full text-right px-5 py-4 rounded-sm font-bold flex items-center gap-3 hover:bg-main-color  hover:text-white duration-300`}>
                      <Icon className="w-5 h-5 text-current" />
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
