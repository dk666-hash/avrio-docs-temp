import { Paths } from "@/lib/pageroutes";

export const Documents: Paths[] = [
  {
    title: "Data Catalog",
    href: "/data-catalog",
    heading: "Standard",
    items:
      [
        {
          title: "Search Data Product",
          href: "/search-data-product",
          items:
            [
              {
                title: "Search Bar",
                href: "/search-bar",
              },
              {
                title: "Univeral Search",
                href: "/universal-search",
              }
            ]
        },
        {
          title: "Catalog Items",
          href: "/catalog-items",
          items:
            [
              {
                title: "Data Products",
                href: "/data-products",
              },
              {
                title: "Data Assets",
                href: "/data-assets",
              },
              {
                title: "Business Glossary",
                href: "/business-glossary",
              }
            ]
        }
      ]
  },
  {
    title: "Data Marketplace",
    href: "/data-marketplace",
    items:
      [
        {
          title: "Search Data Product",
          href: "/search-data-product",
          items:
            [
              {
                title: "Search Bar",
                href: "/search-bar",
              },
              {
                title: "Universal Search",
                href: "/universal-search",
              }
            ]
        },
        {
          title: "User Actions for a Data Product",
          href: "/user-actions",
        },
        {
          title: "Data Product",
          href: "/data-product",
          items:
            [
              {
                title: "Product Info",
                href: "/product-info",
              },
              {
                title: "Details",
                href: "/details",
              },
              {
                title: "Profile",
                href: "/profile",
              },
              {
                title: "Discovery",
                href: "/discovery",
              },
              {
                title: "Lineage Data Product",
                href: "/lineage-data-product",
              }
            ]
        }
      ]
  },
  {
    spacer: true,
  },


];