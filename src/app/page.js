import styles from "@picocss/pico";

export default async function Home() {

  return (
    <main class="container">
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
