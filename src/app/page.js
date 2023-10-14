import Image from "next/image";
import styles from "@picocss/pico";

export default function Home() {
  return (
    <main class="container">
      <nav class="container-fluid">
        <ul>
          <li>
            <h3>
              Doppi
              <Image
                src="/coffee-bean-icon.png"
                width={30}
                height={30}
                alt="logo"
              />
            </h3>
          </li>
        </ul>
        <ul>
          <li>About Us</li>
        </ul>
      </nav>
      <button>ADD QUOTE</button>
      <div class="grid">
        <article>
          <blockquote>
            Maecenas vehicula metus tellus, vitae congue turpis hendrerit non.
            Nam at dui sit amet ipsum cursus ornare.
            <footer>
              <cite>- Phasellus eget lacinia</cite>
            </footer>
          </blockquote>
        <button class="secondary">EDIT</button>
        <button class="contrast">DELETE</button>
        </article>
        <article>
          <blockquote>
            Maecenas vehicula metus tellus, vitae congue turpis hendrerit non.
            Nam at dui sit amet ipsum cursus ornare.
            <footer>
              <cite>- Phasellus eget lacinia</cite>
            </footer>
          </blockquote>
          <button class="secondary">EDIT</button>
          <button class="contrast">DELETE</button>
        </article>
      </div>
    </main>
  );
}
