import type { DefaultSeoProps } from "next-seo";

const title = "Martin Sione";
const domain = `martinsione.com`;

const seo: DefaultSeoProps = {
  title,
  description:
    "I'm an analitic and introvert person willing to learn something new everyday. I believe in respect and good communication between teams",
  openGraph: {
    title,
    site_name: title,
    type: "website",
    url: `https://${domain}`,
  },
};

export default seo;
