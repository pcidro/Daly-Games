import GameCard from "@/components/gameCard/GameCard";
import Container from "@/components/container";
import Input from "@/components/input/Input";
import { gameProps } from "@/utils/types/game";

interface SearchProps {
  params: Promise<{ title: string }>;
}

export default async function Search({ params }: SearchProps) {
  const { title } = await params;
  const res = await fetch(
    `${process.env.NEXT_API_URL}/next-api/?api=game&title=${title}`,
    { next: { revalidate: 86400 } },
  );
  const games: gameProps[] = await res.json();

  return (
    <main className="w-full text-black">
      <Container>
        <Input />

        <h1 className="font-bold text-xl mt-8 mb-5">
          Veja oque encontramos na nossa base:
        </h1>

        {!games && <p>Esse jogo não foi encontrado!...</p>}

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {games && games.map((item) => <GameCard key={item.id} game={item} />)}
        </section>
      </Container>
    </main>
  );
}
