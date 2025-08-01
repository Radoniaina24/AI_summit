import { MenuItem, Navigation } from "@/component/Header/Header";
import { HeroSection } from "@/component/Hero/HeroSection";

export default function Home() {
  const menuItems: MenuItem[] = [
    {
      id: "home",
      label: "Accueil",
      href: "/",
    },
    {
      id: "services",
      label: "Services",
      href: "/services",
      children: [
        {
          id: "web-dev",
          label: "Développement Web",
          href: "/services/web-development",
        },
        {
          id: "mobile-dev",
          label: "Applications Mobile",
          href: "/services/mobile-development",
        },
        {
          id: "consulting",
          label: "Consulting IT",
          href: "/services/consulting",
        },
      ],
    },
    {
      id: "products",
      label: "Produits",
      href: "/products",
      children: [
        {
          id: "saas-platform",
          label: "Plateforme SaaS",
          href: "/products/saas",
        },
        {
          id: "mobile-app",
          label: "Application Mobile",
          href: "/products/mobile-app",
        },
      ],
    },
    {
      id: "about",
      label: "À propos",
      href: "/about",
    },
    {
      id: "contact",
      label: "Contact",
      href: "/contact",
    },
  ];
  return (
    <>
      <Navigation
        logo={{
          src: "https://res.cloudinary.com/dikefxjpd/image/upload/v1753955915/AI_Summit_Logo-vide-06_w5jyxv.png",
          alt: "Mon Logo",
          width: 100,
          height: 100,
        }}
        menuItems={menuItems}
        ctaButton={{
          label: "Nous contacter",
          href: "/get-started",
          variant: "primary",
        }}
      />

      <HeroSection
        subtitle="🚀 Innovation & Excellence"
        title="Transformez vos idées en solutions digitales"
        description="Nous créons des expériences numériques exceptionnelles qui propulsent votre entreprise vers le succès. Découvrez comment nous pouvons vous aider à atteindre vos objectifs."
        primaryButton={{
          label: "Découvrir nos services",
          href: "/services",
        }}
        backgroundImage="https://res.cloudinary.com/dikefxjpd/image/upload/v1753965773/upscalemedia-transformed_mck4i8.jpg"
        secondaryButton={{
          label: "Voir la démo",
          href: "/demo",
        }}
      />
    </>
  );
}
