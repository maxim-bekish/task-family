// app/friends/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, UserPlus, Search, ChevronRight, Check, X } from "lucide-react";

// ====== ДАННЫЕ ======
const friendRequests = [
  {
    id: "1",
    name: "Мария Иванова",
    avatar: null,
    initials: "М",
    bgGradient: "from-[#A8E6CF] to-[#3B82F6]",
    isOnline: true,
    message: "Хочет добавиться",
  },
];

const friendsList = [
  {
    id: "1",
    name: "Анна Ковалёва",
    avatar: null,
    initials: "А",
    bgGradient: "from-[#FF6B6B] to-[#EE5A24]",
    isOnline: true,
    wishesCount: 12,
    lastSeen: "была сегодня",
  },
  {
    id: "2",
    name: "Дмитрий Соколов",
    avatar: null,
    initials: "Д",
    bgGradient: "from-[#4ECDC4] to-[#2C3E50]",
    isOnline: false,
    wishesCount: 8,
    lastSeen: "был вчера",
  },
  {
    id: "3",
    name: "Елена Волкова",
    avatar: null,
    initials: "Е",
    bgGradient: "from-[#FFD93D] to-[#F59E0B]",
    isOnline: true,
    wishesCount: 24,
    lastSeen: "5 мин назад",
  },
  {
    id: "4",
    name: "Игорь Петров",
    avatar: null,
    initials: "И",
    bgGradient: "from-[#C084FC] to-[#7C3AED]",
    isOnline: false,
    wishesCount: 6,
    lastSeen: "3 дня назад",
  },
];

const suggestions = [
  {
    id: "5",
    name: "Ольга Смирнова",
    initials: "О",
    bgColor: "bg-slate-500",
    mutualFriends: 3,
  },
];

const navItems = [
  { label: "Главная", icon: "Home", href: "/", isActive: false },
  { label: "Друзья", icon: "Users", href: "/friends", isActive: true },
  { label: "Желания", icon: "Heart", href: "/wishes", isActive: false },
  { label: "Профиль", icon: "User", href: "/profile", isActive: false },
];

// ====== КОМПОНЕНТ ======
export default function FriendsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white max-w-[440px] mx-auto border-x border-border">
     

      {/* Header */}
      <header className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Button variant="ghost" size="icon" className="w-9 h-9">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold tracking-tight">Друзья</h1>
        </div>
        <Button variant="ghost" size="icon" className="w-9 h-9">
          <UserPlus className="w-5 h-5" />
        </Button>
      </header>

      <ScrollArea className="flex-1">
        {/* Search */}
        <div className="px-5 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Поиск друзей..." className="pl-9 bg-secondary" />
          </div>
        </div>

        {/* Friend Requests */}
        {friendRequests.length > 0 && (
          <div className="px-5 pb-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">Запросы · {friendRequests.length}</span>
            </div>
            {friendRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center gap-4 p-3 bg-secondary rounded-lg border border-border"
              >
                <div className="relative">
                  <Avatar className={`w-9 h-9 bg-gradient-to-br ${request.bgGradient}`}>
                    <AvatarFallback className="text-white">{request.initials}</AvatarFallback>
                  </Avatar>
                  {request.isOnline && (
                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{request.name}</p>
                  <p className="text-xs text-muted-foreground">{request.message}</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" className="h-8 px-3">✓</Button>
                  <Button size="sm" variant="outline" className="h-8 px-3">✕</Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Friends List */}
        <div className="px-5 pb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold">Мои друзья · {friendsList.length}</span>
          </div>
          <div className="flex flex-col gap-2.5">
            {friendsList.map((friend) => (
              <Link href={`/friends/${friend.id}`} key={friend.id}>
                <div className="flex items-center gap-4 p-3 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative">
                    <Avatar className={`w-9 h-9 bg-gradient-to-br ${friend.bgGradient}`}>
                      <AvatarFallback className="text-white">{friend.initials}</AvatarFallback>
                    </Avatar>
                    {friend.isOnline && (
                      <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border-2 border-white rounded-full" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">{friend.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {friend.wishesCount} желаний · {friend.lastSeen}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Separator className="my-2" />

        {/* Suggestions */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold">Возможно, вы знакомы</span>
          </div>
          {suggestions.map((suggestion) => (
            <div key={suggestion.id} className="flex items-center gap-4 p-3">
              <Avatar className={`w-9 h-9 ${suggestion.bgColor}`}>
                <AvatarFallback className="text-white">{suggestion.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-semibold">{suggestion.name}</p>
                <p className="text-xs text-muted-foreground">{suggestion.mutualFriends} общих друга</p>
              </div>
              <Button variant="outline" size="sm" className="h-8">Добавить</Button>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Bottom Navigation */}
      <nav className="flex justify-around items-center py-3 px-6 border-t border-border">
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