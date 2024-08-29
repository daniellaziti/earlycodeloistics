"use client"
import { usePathname } from "next/navigation";
import AdminNav from "@/components/AdminNavBar";

export function AppWrapper ({children}) {
    const path = usePathname();
    const subRoute = path.split("/")[1];

    return (
        <>
        {subRoute == "admin" ? <AdminNav/> : null}
        {children}
        </>
    )
}