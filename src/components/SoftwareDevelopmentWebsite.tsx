import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { ArrowRight, ChevronRight, Menu, X, Home, Search, MapPin, Building2, TrendingUp, Star, Phone, Mail, Globe } from "lucide-react"
import { motion, type Variants } from "framer-motion"
import { GridMotion } from "./ui/grid-motion"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-secondary hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = "Button"

const defaultContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function AnimatedGroup({
  children,
  className,
  variants,
}: {
  children: React.ReactNode
  className?: string
  variants?: {
    container?: Variants
    item?: Variants
  }
}) {
  const containerVariants = variants?.container || defaultContainerVariants
  const itemVariants = variants?.item || defaultItemVariants

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className={cn(className)}>
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

type Language = "en" | "sl" | "ru"

const translations: Record<Language, Record<string, string>> = {
  en: {
    nav_buy: "Buy",
    nav_rent: "Rent",
    nav_about: "About",
    nav_contact: "Contact",
    nav_login: "Sign In",
    nav_list: "List Property",
    hero_badge: "Slovenia's Premier Real Estate Platform",
    hero_title: "Find Your Dream Property in",
    hero_highlight: "Slovenia",
    hero_sub: "Thousands of listings across Ljubljana, Maribor, Bled, Piran and all of Slovenia. Buy or rent — we connect you with the best.",
    hero_cta: "Browse Listings",
    hero_cta2: "List Your Property",
    search_placeholder: "City, region or address...",
    search_btn: "Search",
    tab_buy: "Buy",
    tab_rent: "Rent",
    stats_listings: "Active Listings",
    stats_sold: "Properties Sold",
    stats_agents: "Trusted Agents",
    stats_cities: "Cities Covered",
    featured_title: "Featured Properties",
    featured_sub: "Hand-picked listings from across Slovenia",
    prop_buy: "For Sale",
    prop_rent: "For Rent",
    prop_rooms: "rooms",
    prop_area: "m²",
    features_title: "Why Choose ILAL SlovenEstate",
    features_sub: "The most trusted real estate platform in Slovenia",
    f1_title: "Largest Database",
    f1_desc: "Over 5,000 verified listings across all Slovenian regions",
    f2_title: "Advanced Search",
    f2_desc: "Filter by price, area, rooms, region, and property type",
    f3_title: "Trusted Agents",
    f3_desc: "All agents are verified and reviewed by real clients",
    f4_title: "Market Insights",
    f4_desc: "Up-to-date pricing trends and investment analytics",
    cta_title: "Ready to find your perfect property?",
    cta_sub: "Join thousands of buyers and renters who found their home in Slovenia through ILAL SlovenEstate",
    cta_btn: "Get Started Free",
    footer_services: "Services",
    footer_buy: "Buy Property",
    footer_rent: "Rent Property",
    footer_sell: "Sell Property",
    footer_invest: "Investment",
    footer_appraisal: "Appraisal",
    footer_company: "Company",
    footer_about: "About Us",
    footer_team: "Our Team",
    footer_careers: "Careers",
    footer_blog: "Blog",
    footer_press: "Press",
    footer_contact: "Contact",
    footer_copy: "2024 ILAL SlovenEstate. All rights reserved.",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Use",
    footer_cookies: "Cookie Policy",
    regions_title: "Browse by Region",
    regions_sub: "Explore properties across all Slovenian regions",
  },
  sl: {
    nav_buy: "Nakup",
    nav_rent: "Najem",
    nav_about: "O nas",
    nav_contact: "Kontakt",
    nav_login: "Prijava",
    nav_list: "Objavi oglas",
    hero_badge: "Vodilna platforma za nepremičnine v Sloveniji",
    hero_title: "Najdite nepremičnino svojih sanj v",
    hero_highlight: "Sloveniji",
    hero_sub: "Tisoče oglasov v Ljubljani, Mariboru, Bledu, Piranu in po vsej Sloveniji. Nakup ali najem — povežemo vas z najboljšim.",
    hero_cta: "Oglej si oglase",
    hero_cta2: "Objavi nepremičnino",
    search_placeholder: "Mesto, regija ali naslov...",
    search_btn: "Išči",
    tab_buy: "Nakup",
    tab_rent: "Najem",
    stats_listings: "Aktivni oglasi",
    stats_sold: "Prodanih nepremičnin",
    stats_agents: "Zaupanja vredni agenti",
    stats_cities: "Pokrita mesta",
    featured_title: "Izbrane nepremičnine",
    featured_sub: "Ročno izbrani oglasi iz vse Slovenije",
    prop_buy: "Naprodaj",
    prop_rent: "Najem",
    prop_rooms: "sob",
    prop_area: "m²",
    features_title: "Zakaj izbrati ILAL SlovenEstate",
    features_sub: "Najbolj zaupanja vredna platforma za nepremičnine v Sloveniji",
    f1_title: "Največja baza",
    f1_desc: "Več kot 5.000 preverjenih oglasov po vseh slovenskih regijah",
    f2_title: "Napredno iskanje",
    f2_desc: "Filtrirajte po ceni, površini, sobah, regiji in vrsti nepremičnine",
    f3_title: "Preverjeni agenti",
    f3_desc: "Vsi agenti so preverjeni in ocenjeni s strani pravih strank",
    f4_title: "Tržni vpogled",
    f4_desc: "Ažurni trendi cen in investicijska analitika",
    cta_title: "Pripravljeni najti svojo idealno nepremičnino?",
    cta_sub: "Pridružite se tisočim kupcem in najemnikom, ki so prek ILAL SlovenEstate našli dom v Sloveniji",
    cta_btn: "Začnite brezplačno",
    footer_services: "Storitve",
    footer_buy: "Nakup nepremičnine",
    footer_rent: "Najem nepremičnine",
    footer_sell: "Prodaja nepremičnine",
    footer_invest: "Investicije",
    footer_appraisal: "Ocenjevanje",
    footer_company: "Podjetje",
    footer_about: "O nas",
    footer_team: "Naša ekipa",
    footer_careers: "Karierne priložnosti",
    footer_blog: "Blog",
    footer_press: "Mediji",
    footer_contact: "Kontakt",
    footer_copy: "2024 ILAL SlovenEstate. Vse pravice pridržane.",
    footer_privacy: "Politika zasebnosti",
    footer_terms: "Pogoji uporabe",
    footer_cookies: "Politika piškotkov",
    regions_title: "Brskajte po regijah",
    regions_sub: "Raziščite nepremičnine po vseh slovenskih regijah",
  },
  ru: {
    nav_buy: "Купить",
    nav_rent: "Арендовать",
    nav_about: "О нас",
    nav_contact: "Контакты",
    nav_login: "Войти",
    nav_list: "Разместить объявление",
    hero_badge: "Ведущая платформа недвижимости Словении",
    hero_title: "Найдите недвижимость мечты в",
    hero_highlight: "Словении",
    hero_sub: "Тысячи объявлений в Любляне, Мариборе, Бледе, Пиране и по всей Словении. Покупка или аренда — мы найдём лучшее для вас.",
    hero_cta: "Смотреть объявления",
    hero_cta2: "Разместить объект",
    search_placeholder: "Город, регион или адрес...",
    search_btn: "Найти",
    tab_buy: "Купить",
    tab_rent: "Арендовать",
    stats_listings: "Активных объявлений",
    stats_sold: "Продано объектов",
    stats_agents: "Проверенных агентов",
    stats_cities: "Городов покрыто",
    featured_title: "Избранные объекты",
    featured_sub: "Лучшие предложения по всей Словении",
    prop_buy: "Продажа",
    prop_rent: "Аренда",
    prop_rooms: "комн.",
    prop_area: "м²",
    features_title: "Почему ILAL SlovenEstate",
    features_sub: "Самая доверенная платформа недвижимости в Словении",
    f1_title: "Крупнейшая база",
    f1_desc: "Более 5 000 проверенных объявлений по всем регионам Словении",
    f2_title: "Умный поиск",
    f2_desc: "Фильтрация по цене, площади, комнатам, региону и типу объекта",
    f3_title: "Проверенные агенты",
    f3_desc: "Все агенты верифицированы и получили оценки от реальных клиентов",
    f4_title: "Аналитика рынка",
    f4_desc: "Актуальные тренды цен и инвестиционная аналитика",
    cta_title: "Готовы найти идеальную недвижимость?",
    cta_sub: "Тысячи покупателей и арендаторов уже нашли свой дом в Словении через ILAL SlovenEstate",
    cta_btn: "Начать бесплатно",
    footer_services: "Услуги",
    footer_buy: "Купить недвижимость",
    footer_rent: "Снять недвижимость",
    footer_sell: "Продать недвижимость",
    footer_invest: "Инвестиции",
    footer_appraisal: "Оценка",
    footer_company: "Компания",
    footer_about: "О нас",
    footer_team: "Наша команда",
    footer_careers: "Карьера",
    footer_blog: "Блог",
    footer_press: "Пресса",
    footer_contact: "Контакты",
    footer_copy: "2024 ILAL SlovenEstate. Все права защищены.",
    footer_privacy: "Политика конфиденциальности",
    footer_terms: "Условия использования",
    footer_cookies: "Политика cookies",
    regions_title: "Поиск по регионам",
    regions_sub: "Исследуйте недвижимость по всем регионам Словении",
  },
}

const listings = [
  {
    id: 1,
    type: "buy",
    title: "Modern Apartment, Ljubljana Center",
    location: "Ljubljana, Šiška",
    price: "€285,000",
    rooms: 3,
    area: 78,
    image: "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/fd974564-c3d8-469b-bc34-c5070b904421.jpg",
    badge: "buy",
    rating: 4.9,
  },
  {
    id: 2,
    type: "buy",
    title: "Villa with Lake View, Bled",
    location: "Bled, Gorenjska",
    price: "€620,000",
    rooms: 5,
    area: 210,
    image: "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/099ee108-2e73-4529-b37a-2142693406a8.jpg",
    badge: "buy",
    rating: 5.0,
  },
  {
    id: 3,
    type: "rent",
    title: "Cozy Studio, Old Town Ljubljana",
    location: "Ljubljana, Center",
    price: "€900/mo",
    rooms: 1,
    area: 38,
    image: "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/ed09dae1-c9de-450b-8ab8-4a78e73f33de.jpg",
    badge: "rent",
    rating: 4.7,
  },
  {
    id: 4,
    type: "buy",
    title: "Townhouse, Maribor",
    location: "Maribor, Podravska",
    price: "€195,000",
    rooms: 4,
    area: 130,
    image: "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/ed09dae1-c9de-450b-8ab8-4a78e73f33de.jpg",
    badge: "buy",
    rating: 4.8,
  },
  {
    id: 5,
    type: "rent",
    title: "Sea-view Apartment, Piran",
    location: "Piran, Primorska",
    price: "€1,400/mo",
    rooms: 2,
    area: 65,
    image: "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/099ee108-2e73-4529-b37a-2142693406a8.jpg",
    badge: "rent",
    rating: 4.9,
  },
  {
    id: 6,
    type: "buy",
    title: "Investment Property, Kranjska Gora",
    location: "Kranjska Gora, Gorenjska",
    price: "€340,000",
    rooms: 4,
    area: 155,
    image: "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/fd974564-c3d8-469b-bc34-c5070b904421.jpg",
    badge: "buy",
    rating: 4.6,
  },
]

const regions = [
  { name: "Ljubljana", count: "1,240+", emoji: "🏙️" },
  { name: "Maribor", count: "680+", emoji: "🏘️" },
  { name: "Bled & Gorenjska", count: "420+", emoji: "🏔️" },
  { name: "Piran & Coast", count: "380+", emoji: "🌊" },
  { name: "Celje", count: "290+", emoji: "🏡" },
  { name: "Kranjska Gora", count: "210+", emoji: "⛷️" },
]

const HeroHeader = ({ lang, setLang, t }: { lang: Language; setLang: (l: Language) => void; t: Record<string, string> }) => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined") return
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: t.nav_buy, href: "#listings" },
    { name: t.nav_rent, href: "#listings" },
    { name: t.nav_about, href: "#features" },
    { name: t.nav_contact, href: "#contact" },
  ]

  return (
    <header>
      <nav data-state={menuState && "active"} className="fixed z-20 w-full px-2 group">
        <div
          className={cn(
            "mx-auto mt-1 max-w-5xl px-4 transition-all duration-300 lg:px-8",
            isScrolled && "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-4",
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-0">
            <div className="flex w-full justify-between lg:w-auto">
              <a href="/" aria-label="home" className="flex items-center space-x-2">
                <Logo />
              </a>
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label="Toggle menu"
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a href={item.href} className="text-muted-foreground hover:text-accent-foreground block duration-150">
                      <span>{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.href} className="text-muted-foreground hover:text-accent-foreground block duration-150">
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit items-center">
                {/* Language switcher */}
                <div className="flex gap-1 border rounded-lg p-1">
                  {(["en", "sl", "ru"] as Language[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={cn(
                        "px-2 py-1 rounded text-xs font-medium transition-colors uppercase",
                        lang === l
                          ? "bg-emerald-600 text-white"
                          : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <Button variant="outline" size="sm">
                  <span>{t.nav_login}</span>
                </Button>
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white hidden lg:inline-flex">
                  <span>{t.nav_list}</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center space-x-2", className)}>
    <div className="bg-emerald-600 rounded-lg p-2">
      <Home className="h-5 w-5 text-white" />
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-xs font-medium text-emerald-600 tracking-widest uppercase">ILAL</span>
      <span className="text-lg font-bold tracking-tight">SlovenEstate</span>
    </div>
  </div>
)

export default function SoftwareDevelopmentWebsite() {
  const [lang, setLang] = React.useState<Language>("en")
  const [activeTab, setActiveTab] = React.useState<"buy" | "rent">("buy")
  const t = translations[lang]

  const gridItems = [
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/099ee108-2e73-4529-b37a-2142693406a8.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/ed09dae1-c9de-450b-8ab8-4a78e73f33de.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/fd974564-c3d8-469b-bc34-c5070b904421.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/099ee108-2e73-4529-b37a-2142693406a8.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/ed09dae1-c9de-450b-8ab8-4a78e73f33de.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/fd974564-c3d8-469b-bc34-c5070b904421.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/099ee108-2e73-4529-b37a-2142693406a8.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/ed09dae1-c9de-450b-8ab8-4a78e73f33de.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/fd974564-c3d8-469b-bc34-c5070b904421.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/099ee108-2e73-4529-b37a-2142693406a8.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/ed09dae1-c9de-450b-8ab8-4a78e73f33de.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/fd974564-c3d8-469b-bc34-c5070b904421.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/099ee108-2e73-4529-b37a-2142693406a8.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/ed09dae1-c9de-450b-8ab8-4a78e73f33de.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/fd974564-c3d8-469b-bc34-c5070b904421.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/099ee108-2e73-4529-b37a-2142693406a8.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/ed09dae1-c9de-450b-8ab8-4a78e73f33de.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/fd974564-c3d8-469b-bc34-c5070b904421.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/099ee108-2e73-4529-b37a-2142693406a8.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/ed09dae1-c9de-450b-8ab8-4a78e73f33de.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/fd974564-c3d8-469b-bc34-c5070b904421.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/099ee108-2e73-4529-b37a-2142693406a8.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/ed09dae1-c9de-450b-8ab8-4a78e73f33de.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/fd974564-c3d8-469b-bc34-c5070b904421.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/099ee108-2e73-4529-b37a-2142693406a8.jpg",
    "https://cdn.poehali.dev/projects/8c1946b9-f0e4-491c-9664-929d217c5f0c/files/ed09dae1-c9de-450b-8ab8-4a78e73f33de.jpg",
  ]

  const filteredListings = activeTab === "buy"
    ? listings.filter((l) => l.type === "buy")
    : listings.filter((l) => l.type === "rent")

  return (
    <>
      <HeroHeader lang={lang} setLang={setLang} t={t} />
      <main className="overflow-hidden">
        {/* Gradient decorations */}
        <div aria-hidden className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(152,60%,40%,.08)_0,hsla(152,60%,40%,.02)_50%,transparent_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(152,60%,40%,.06)_0,transparent_100%)] [translate:5%_-50%]" />
        </div>

        {/* HERO */}
        <section>
          <div className="relative pt-24 md:pt-36">
            <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <a
                    href="#listings"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-sm">{t.hero_badge}</span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>
                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6"><ArrowRight className="m-auto size-3" /></span>
                        <span className="flex size-6"><ArrowRight className="m-auto size-3" /></span>
                      </div>
                    </div>
                  </a>

                  <h1 className="mt-8 max-w-4xl mx-auto text-balance text-5xl md:text-6xl lg:mt-16 xl:text-[4.5rem] font-bold">
                    {t.hero_title}{" "}
                    <span className="inline-block text-emerald-500 font-semibold">
                      {t.hero_highlight}
                    </span>
                  </h1>
                  <p className="mx-auto mt-8 max-w-2xl text-balance text-lg text-muted-foreground">
                    {t.hero_sub}
                  </p>
                </AnimatedGroup>

                {/* Search bar */}
                <AnimatedGroup
                  variants={{
                    container: { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.5 } } },
                    ...transitionVariants,
                  }}
                  className="mt-10"
                >
                  <div className="mx-auto max-w-2xl">
                    {/* Tabs */}
                    <div className="flex gap-2 mb-3 justify-center">
                      <button
                        onClick={() => setActiveTab("buy")}
                        className={cn(
                          "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                          activeTab === "buy" ? "bg-emerald-600 text-white" : "bg-muted text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {t.tab_buy}
                      </button>
                      <button
                        onClick={() => setActiveTab("rent")}
                        className={cn(
                          "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                          activeTab === "rent" ? "bg-emerald-600 text-white" : "bg-muted text-muted-foreground hover:text-foreground",
                        )}
                      >
                        {t.tab_rent}
                      </button>
                    </div>
                    {/* Search input */}
                    <div className="flex gap-2 bg-background border rounded-2xl p-2 shadow-lg shadow-emerald-500/10">
                      <div className="flex flex-1 items-center gap-3 px-3">
                        <MapPin className="h-5 w-5 text-emerald-500 shrink-0" />
                        <input
                          type="text"
                          placeholder={t.search_placeholder}
                          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                        />
                      </div>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-6">
                        <Search className="h-4 w-4 mr-2" />
                        {t.search_btn}
                      </Button>
                    </div>
                  </div>
                </AnimatedGroup>

                <AnimatedGroup
                  variants={{
                    container: { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.75 } } },
                    ...transitionVariants,
                  }}
                  className="mt-6 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  <div className="bg-emerald-500/10 rounded-[14px] border border-emerald-200 p-0.5">
                    <Button size="lg" className="rounded-xl px-5 text-base bg-emerald-600 hover:bg-emerald-700 text-white">
                      <span className="text-nowrap">{t.hero_cta}</span>
                    </Button>
                  </div>
                  <Button size="lg" variant="ghost" className="h-10.5 rounded-xl px-5 hover:text-emerald-500">
                    <span className="text-nowrap">{t.hero_cta2}</span>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            {/* Grid of property images */}
            <AnimatedGroup
              variants={{
                container: { visible: { transition: { staggerChildren: 0.05, delayChildren: 0.75 } } },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div aria-hidden className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%" />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-emerald-200 p-4 shadow-lg shadow-emerald-500/15 ring-1">
                  <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950 dark:to-emerald-900 aspect-[15/8] relative rounded-2xl border border-emerald-200 overflow-hidden">
                    <GridMotion items={gridItems} gradientColor="rgba(16, 185, 129, 0.1)" className="h-full w-full" />
                  </div>
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-background pb-16 pt-16 md:pb-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "5,200+", label: t.stats_listings },
                { value: "3,800+", label: t.stats_sold },
                { value: "120+", label: t.stats_agents },
                { value: "12", label: t.stats_cities },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-500">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LISTINGS */}
        <section id="listings" className="py-16 md:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.featured_title}</h2>
              <p className="text-muted-foreground text-lg">{t.featured_sub}</p>
              <div className="flex gap-2 justify-center mt-6">
                <button
                  onClick={() => setActiveTab("buy")}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                    activeTab === "buy" ? "bg-emerald-600 text-white" : "bg-muted text-muted-foreground hover:text-foreground",
                  )}
                >
                  {t.tab_buy}
                </button>
                <button
                  onClick={() => setActiveTab("rent")}
                  className={cn(
                    "px-5 py-2 rounded-full text-sm font-medium transition-colors",
                    activeTab === "rent" ? "bg-emerald-600 text-white" : "bg-muted text-muted-foreground hover:text-foreground",
                  )}
                >
                  {t.tab_rent}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map((listing) => (
                <motion.div
                  key={listing.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="bg-background rounded-2xl border overflow-hidden shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={listing.image}
                      alt={listing.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-semibold",
                        listing.badge === "buy" ? "bg-emerald-600 text-white" : "bg-blue-600 text-white",
                      )}>
                        {listing.badge === "buy" ? t.prop_buy : t.prop_rent}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-white text-xs font-medium">{listing.rating}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-base mb-1 group-hover:text-emerald-600 transition-colors">{listing.title}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{listing.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-emerald-600">{listing.price}</div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{listing.rooms} {t.prop_rooms}</span>
                        <span>{listing.area} {t.prop_area}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* REGIONS */}
        <section id="regions" className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.regions_title}</h2>
              <p className="text-muted-foreground text-lg">{t.regions_sub}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {regions.map((region, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="bg-muted/50 hover:bg-emerald-50 dark:hover:bg-emerald-950 border hover:border-emerald-300 rounded-2xl p-5 text-center cursor-pointer transition-all duration-300 group"
                >
                  <div className="text-3xl mb-2">{region.emoji}</div>
                  <div className="font-semibold text-sm group-hover:text-emerald-600 transition-colors">{region.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{region.count}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="py-16 md:py-24 bg-muted/30">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.features_title}</h2>
              <p className="text-muted-foreground text-lg">{t.features_sub}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Building2, title: t.f1_title, desc: t.f1_desc },
                { icon: Search, title: t.f2_title, desc: t.f2_desc },
                { icon: Star, title: t.f3_title, desc: t.f3_desc },
                { icon: TrendingUp, title: t.f4_title, desc: t.f4_desc },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-background rounded-2xl border p-6 hover:border-emerald-300 hover:shadow-sm transition-all duration-300"
                >
                  <div className="bg-emerald-100 dark:bg-emerald-950 rounded-xl p-3 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-20 md:py-32">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-3xl p-12 md:p-16 relative overflow-hidden"
            >
              <div aria-hidden className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.15),transparent)]" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t.cta_title}</h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">{t.cta_sub}</p>
              <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 rounded-xl px-8 font-semibold">
                {t.cta_btn}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t bg-background">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
            {/* Brand */}
            <div className="space-y-4">
              <Logo />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Slovenia's premier real estate classified platform. Buy, sell, and rent across all of Slovenia.
              </p>
              <div className="flex gap-2">
                {(["en", "sl", "ru"] as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={cn(
                      "px-2.5 py-1 rounded text-xs font-medium border transition-colors uppercase",
                      lang === l ? "bg-emerald-600 text-white border-emerald-600" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">{t.footer_services}</h3>
              <ul className="space-y-2 text-sm">
                {[t.footer_buy, t.footer_rent, t.footer_sell, t.footer_invest, t.footer_appraisal].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-muted-foreground hover:text-emerald-500 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">{t.footer_company}</h3>
              <ul className="space-y-2 text-sm">
                {[t.footer_about, t.footer_team, t.footer_careers, t.footer_blog, t.footer_press].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-muted-foreground hover:text-emerald-500 transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">{t.footer_contact}</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>info@ilalslovenestate.si</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>+386 1 234 5678</span>
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span>Ljubljana, Slovenia</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-emerald-100 dark:border-emerald-900">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">{t.footer_copy}</div>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {[t.footer_privacy, t.footer_terms, t.footer_cookies].map((item, i) => (
                  <a key={i} href="#" className="text-muted-foreground hover:text-emerald-500 transition-colors">{item}</a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
