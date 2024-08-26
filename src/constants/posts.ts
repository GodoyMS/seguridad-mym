export interface IPost {
  id: number;
  title: string;
  icon: string;
  items: IItem[];
}

interface IItem {
  image: string;
  title: string;
  id: number;
}

export const postsSampleData: IPost[] = [
  {
    id: 1,
    title: "Community Edition",
    icon: "/assets/images/icon/post.svg",
    items: [
      {
        id: 1,
        image: "/assets/images/01-screenshot.jpg",
        title: "Optimised for design",
      },
      {
        id: 2,
        image: "/assets/images/02-screenshot.jpg",
        title: "User Centric Design",
      },
      {
        id: 3,
        image: "/assets/images/03-screenshot.jpg",
        title: "User Centric Design",
      },
      {
        id: 4,
        image: "/assets/images/04-screenshot.jpg",
        title: "User Centric Design",
      },
    ],
  },
  {
    id: 2,
    title: "Soporte Edition",
    icon: "/assets/images/icon/post.svg",
    items: [
      {
        id: 1,
        image: "/assets/images/05-screenshot.jpg",
        title: "RESPONSIVE AND ADAPTIVE",
      },
      {
        id: 2,
        image: "/assets/images/06-screenshot.jpg",
        title: "ABSOLUTELY FREE",
      },
      {
        id: 3,
        image: "/assets/images/07-screenshot.jpg",
        title: "ABSOLUTELY FREE",
      },
      {
        id: 4,
        image: "/assets/images/08-screenshot.jpg",
        title: "ABSOLUTELY FREE",
      },
    ],
  },
];
