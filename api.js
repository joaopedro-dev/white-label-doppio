export async function getStaticProps() {
    const res = await fetch('http://localhost:3001/quote')
    const repo = await res.json()
    return { props: { repo } }
  }
   
  export default function Page({ repo }) {
    return console.log(repo.id)
  }