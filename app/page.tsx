// app/page.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Plus, ChevronRight } from "lucide-react";

// ====== ДАННЫЕ ======
const currentUser = {
  id: "1",
  name: "Алексей",
  avatar: "https://github.com/shadcn.png",
  initials: "d",
};

const stats = {
  wishesCount: 14,
  friendsCount: 8,
};

const friends = [
  { id: "1", name: "Анна", avatar: null, initials: "А", isOnline: true, bgGradient: "from-[#FF6B6B] to-[#EE5A24]" },
  { id: "2", name: "Дима", avatar: null, initials: "Д", isOnline: false, bgGradient: "from-[#4ECDC4] to-[#2C3E50]" },
  { id: "3", name: "Елена", avatar: null, initials: "Е", isOnline: true, bgGradient: "from-[#FFD93D] to-[#F59E0B]" },
  { id: "4", name: "Игорь4", avatar: null, initials: "И", isOnline: false, bgGradient: "from-[#C084FC] to-[#7C3AED]" },
  { id: "5", name: "Игорь5", avatar: null, initials: "И", isOnline: false, bgGradient: "from-[#C084FC] to-[#7C3AED]" },
  { id: "6", name: "Игорь6", avatar: null, initials: "И", isOnline: false, bgGradient: "from-[#C084FC] to-[#7C3AED]" },
  { id: "7", name: "Игорь7", avatar: null, initials: "И", isOnline: false, bgGradient: "from-[#C084FC] to-[#7C3AED]" },
  { id: "8", name: "Игорь8", avatar: null, initials: "И", isOnline: false, bgGradient: "from-[#C084FC] to-[#7C3AED]" },
  { id: "9", name: "Игорь9", avatar: null, initials: "И", isOnline: false, bgGradient: "from-[#C084FC] to-[#7C3AED]" },
  { id: "10", name: "Игорь10", avatar: null, initials: "И", isOnline: false, bgGradient: "from-[#C084FC] to-[#7C3AED]" },
];

const myWishes = [
  {
    id: "1",
    title: "Nike Air Max Pulse",
    price: 14990,
    oldPrice: 18990,
    image: null,
    bgColor: "bg-[#E2D1C3]",
    priority: "high",
  },
  {
    id: "2",
    title: "Винтажная джинсовка",
    price: 8490,
    oldPrice: null,
    image: null,
    bgColor: "bg-[#CBD5E1]",
    priority: null,
  },
  {
    id: "3",
    title: "Механическая клавиатура",
    price: 19990,
    oldPrice: null,
    image: null,
    bgColor: "bg-[#D4C4B7]",
    priority: "priority",
  },
];

const navItems = [
  { label: "Главная", icon: "Home", href: "/", isActive: true },
  { label: "Друзья", icon: "Users", href: "/friends", isActive: false },
  { label: "Желания", icon: "Heart", href: "/wishes", isActive: false },
  { label: "Профиль", icon: "User", href: "/profile", isActive: false },
];

// ====== КОМПОНЕНТ ======
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white max-w-[440px] mx-auto border-x border-border">
    

      {/* Header */}
      <header className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 shadow-sm">
            <AvatarImage src={currentUser.avatar || undefined} />
            <AvatarFallback className="bg-primary text-primary-foreground">
              {currentUser.initials}
            </AvatarFallback>
          </Avatar>
          <h1 className="text-2xl font-bold tracking-tight">Мои желания</h1>
        </div>
        <Link href="/add">
          <Button variant={'default'} className="gap-1.5 shadow-sm">
            <Plus className="w-4 h-4" />
            Добавить
          </Button>
        </Link>
      </header>

      {/* Stats */}
      <div className="flex gap-2 px-5 py-2">
        <Badge variant="secondary" className="px-3.5 py-1.5 shadow-sm">
          🎯 {stats.wishesCount} желаний
        </Badge>
        <Badge variant="secondary" className="px-3.5 py-1.5 shadow-sm">
          👥 {stats.friendsCount} друзей
        </Badge>
      </div>

      {/* Friends Row */}
      <div className="py-3">
        <div className="flex items-center justify-between px-5 mb-2">
          <span className="text-sm font-semibold">👋 Друзья</span>
          <Link href="/friends" className="text-xs text-muted-foreground">
            Все →
          </Link>
        </div>
        <ScrollArea className="pb-2">
          <div className="flex gap-4 px-5 min-w-max">
            {friends.map((friend) => (
              <Link href={`/friends/${friend.id}`} key={friend.id} className="flex flex-col items-center gap-1.5">
                <div className="relative">
                  <Avatar className={`w-12 h-12 bg-gradient-to-br ${friend.bgGradient}`}>
                    <AvatarFallback className="text-white">{friend.initials}</AvatarFallback>
                  </Avatar>
                  {friend.isOnline && (
                    <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>
                <span className="text-xs font-medium">{friend.name}</span>
              </Link>
            ))}
            <div className="flex flex-col items-center gap-1.5">
              <Avatar className="w-12 h-12 bg-slate-400">
                <AvatarFallback className="text-white">+</AvatarFallback>
              </Avatar>
              <span className="text-xs font-medium">Ещё</span>
            </div>
          </div>
        </ScrollArea>
      </div>

      <Separator />

      {/* My Wishes */}
      <div className="flex-1 px-5 py-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold">📌 Мои желания</h2>
          <span className="text-xs text-muted-foreground">Фильтр</span>
        </div>

        <div className="flex flex-col gap-3">
          {myWishes.map((wish) => (
            <Link href={`/wishes/${wish.id}`} key={wish.id}>
              <Card className="overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-3 flex gap-4">
                  <div className={`w-[72px] h-[72px] rounded-lg border border-border ${wish.bgColor}`} />
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-semibold">{wish.title}</h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-lg font-bold tracking-tight">
                        {wish.price.toLocaleString()} ₽
                      </span>
                      {wish.oldPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {wish.oldPrice.toLocaleString()} ₽
                        </span>
                      )}
                      {wish.priority === "high" && (
                        <Badge variant="secondary" className="ml-auto">🔥 желанное</Badge>
                      )}
                      {wish.priority === "priority" && (
                        <Badge variant="secondary" className="ml-auto">приоритет</Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="flex justify-around items-center py-3 px-6 border-t border-border mt-auto">
        {navItems.map((item) => {
          const IconComponent = require("lucide-react")[item.icon];
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center gap-1 text-xs font-medium ${
                item.isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}