import GameCard from "@/components/gameCard/GameCard";
import Container from "@/components/container";
import Input from "@/components/input/Input";
import { gameProps } from "@/utils/types/game";
import { Metadata } from "next";

interface SearchProps {
  params: Promise<{ title: string }>;
}

export default async function Search({ params }: SearchProps) {
  let games: gameProps[] | null = null;
  try {
    const { title } = await params;
    const decodeTitle = decodeURI(title);
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`,
      { next: { revalidate: 86400 } },
    );
    if (!res.ok) return;
    games = await res.json();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to fetch data ${error.message}`);
    }
  }

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
