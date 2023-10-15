import Image from "next/image";
import Link from "next/link";
import styles from "@picocss/pico";

export const metadata = {
  title: "Doppio | Software House",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <nav class="container">
          <ul>
            <li>
              <Link href="/">
                Doppi
                <Image
                  src="/coffee-bean-icon.png"
                  width={30}
                  height={30}
                  alt="logo"
                />
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
