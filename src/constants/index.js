export const sidebarLinks = [
  {
    filter: "all",
    label: "All",
    options: null,
  },
  {
    filter: "price",
    label: "Price",
    options: [
      { value: "free", label: "Free" },
      { value: "paid", label: "Paid" },
    ],
  },
  {
    filter: "platform",
    label: "Platforms",
    options: [
      { value: "android", label: "Android" },
      { value: "ios", label: "IOS" },
      { value: "windows", label: "Windows" },
      { value: "web", label: "Browser" },
    ],
  },
];
