import type { DefaultSeoProps } from "next-seo";

const title = "Martin Sione";
const domain = `martinsione.com`;
const description = `Passionate about web development. Always learning new technologies. Here you will see some of my thoughts and projects. `;

const seo: DefaultSeoProps = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: "https://martinsione.com/img/avatar.jpg",
        alt: "Profile picture of Martin Sione",
      },
    ],
    title,
    site_name: title,
    description,
    type: "website",
    url: `https://${domain}`,
  },
};

export default seo;
