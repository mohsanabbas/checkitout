import Link from "next/link";

function HomePage() {
  return (
    <div className="home">
      <h1 className="home__heading">
        Bebidas geladas a preço de mercado na sua casa agora
      </h1>
      <Link href="/search">
        <a className="home__link">search</a>
      </Link>
    </div>
  );
}

export default HomePage;
