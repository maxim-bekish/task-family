// app/friends/[id]/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, MoreHorizontal, MessageCircle, Gift, Lock } from "lucide-react";

// ====== ДАННЫЕ ======
const friendData = {
  id: "1",
  name: "Анна Ковалёва",
  firstName: "Анна",
  initials: "А",
  bgGradient: "from-[#FF6B6B] to-[#EE5A24]",
  stats: {
    wishes: 12,
    friends: 4,
  },
};

const categories = [
  { id: "all", label: "Все", isActive: true },
  { id: "gifts", label: "🎁 Идеи подарков", isActive: false },
  { id: "clothes", label: "👗 Одежда", isActive: false },
  { id: "books", label: "📚 Книги", isActive: false },
];

const friendWishes = [
  {
    id: "1",
    title: "Керамическая кружка ручной работы",
    price: 1890,
    image: null,
    bgColor: "bg-[#E2D1C3]",
    isGift: true,
    isReserved: false,
    addedAt: "2 дня назад",
  },
  {
    id: "2",
    title: "Ежедневник в кожаном переплёте",
    price: 3450,
    image: null,
    bgColor: "bg-[#CBD5E1]",
    isGift: false,
    isReserved: true,
    addedAt: "5 дней назад",
  },
  {
    id: "3",
    title: "Шерстяной плед крупной вязки",
    price: 5990,
    image: null,
    bgColor: "bg-[#D4C4B7]",
    isGift: false,
    isReserved: false,
    addedAt: "неделю назад",
  },
  {
    id: "4",
    title: "Книга «Дизайн привычных вещей»",
    price: 1250,
    image: null,
    bgColor: "bg-[#A5B4CB]",
    isGift: false,
    isReserved: false,
    addedAt: "2 недели назад",
  },
];

const navItems = [
  { label: "Главная", icon: "Home", href: "/", isActive: false },
  { label: "Друзья", icon: "Users", href: "/friends", isActive: true },
  { label: "Желания", icon: "Heart", href: "/wishes", isActive: false },
  { label: "Профиль", icon: "User", href: "/profile", isActive: false },
];

// ====== КОМПОНЕНТ ======
export default function FriendDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col min-h-screen bg-white max-w-[440px] mx-auto border-x border-border">
   

      {/* Header */}
      <header className="flex items-center px-5 py-4 border-b border-border">
        <Link href="/friends">
          <Button variant="ghost" size="icon" className="w-9 h-9">
            <ArrowLeft className="w-5 h-5" />
          </Button>
        </Link>
        <h1 className="flex-1 text-lg font-semibold text-center">{friendData.name}</h1>
        <Button variant="ghost" size="icon" className="w-9 h-9">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
      </header>

      <ScrollArea className="flex-1">
        {/* Profile */}
        <div className="flex items-center gap-5 p-5 border-b border-border">
          <Avatar className={`w-16 h-16 bg-gradient-to-br ${friendData.bgGradient}`}>
            <AvatarFallback className="text-white text-2xl">{friendData.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <p className="text-xl font-bold mb-2">{friendData.firstName}</p>
            <div className="flex gap-6">
              <div>
                <span className="font-bold">{friendData.stats.wishes}</span>
                <span className="text-muted-foreground text-sm ml-1">желаний</span>
              </div>
              <div>
                <span className="font-bold">{friendData.stats.friends}</span>
                <span className="text-muted-foreground text-sm ml-1">друга</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 p-4">
          <Button className="flex-1 gap-2">
            <MessageCircle className="w-4 h-4" />
            Написать
          </Button>
          <Button variant="outline" size="icon">
            <Gift className="w-4 h-4" />
          </Button>
        </div>

        {/* Categories Tabs */}
        <div className="px-5 py-2">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full justify-start gap-1 bg-transparent p-0">
              {categories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Wishes List */}
        <div className="px-5 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold">🎯 Список желаний {friendData.firstName}</h2>
          </div>

          <div className="flex flex-col gap-3">
            {friendWishes.map((wish) => (
              <Card key={wish.id} className="overflow-hidden shadow-sm">
                <CardContent className="p-3 flex gap-4">
                  <div className={`w-[72px] h-[72px] rounded-lg border border-border ${wish.bgColor}`} />
                  <div className="flex-1">
                    <h3 className="font-semibold">{wish.title}</h3>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-lg font-bold tracking-tight">
                        {wish.price.toLocaleString()} ₽
                      </span>
                      {wish.isGift && (
                        <Badge variant="secondary" className="bg-yellow-100">🎁 в подарок</Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Добавлено {wish.addedAt}</p>
                  </div>
                  {wish.isReserved && (
                    <Lock className="w-4 h-4 text-muted-foreground self-center" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-4 text-center">
            <Link href="#" className="text-sm text-muted-foreground">
              Показать ещё 8 желаний →
            </Link>
          </div>
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