import { fetchMovie } from "@/lib/data";
import Image from "next/image";
import { FC } from "react";
import DownloadButton from "./ui/DownloadButton";

interface Props {
  params: { id: string };
}

const MovieDetails: FC<Props> = async ({ params }) => {
  const { data, error } = await fetchMovie(params.id);

  if (error || data === null) {
    return <div>Something went wrong! Try again</div>;
  }

  const released = new Date(data.released as unknown as Date)
    .toISOString()
    .split("T")[0];

  const runTimeHours = Math.floor(data.runtime / 60);
  const runtimeMinutes = data.runtime % 60;

  const runtime = `${runTimeHours} hour${runTimeHours < 10 ? "" : "s"} ${runtimeMinutes} minute${runtimeMinutes < 10 ? "" : "s"}`;

  return (
    <main className="py-4">
      <section>
        <figure className="mx-auto grid max-w-3xl grid-cols-2 gap-2 md:gap-6">
          <div>
            <Image
              src={data.poster}
              alt={data.title}
              width={185}
              height={275}
              className="block h-auto w-full object-cover"
            />
            <Image
              src={data.poster}
              alt={data.title}
              width={185}
              height={275}
              className="mt-2 block h-auto w-full object-cover sm:hidden"
            />
            {/* <Button className="mt-2 w-full border border-tg-btn-color text-sm shadow-none hover:border-tg-btn-color hover:bg-transparent hover:text-tg-btn-color sm:hidden">
              Download
            </Button> */}

            <DownloadButton className="mt-2 sm:hidden" />
          </div>

          <figcaption className="space-y-2">
            <div>
              <div className="text-lg font-semibold">{data.title}</div>
              <div className="flex flex-wrap text-sm text-tg-hint-color">
                <div>{released} .&nbsp; </div>
                <div>
                  {data.countries.map((c, i) => (
                    <div key={i} className="text-sm text-tg-hint-color">
                      {c}
                      {data.countries.length - 1 !== i && "."}&nbsp;
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="font-medium">Genres:</div>
              <div className="flex flex-wrap">
                {data.genres.map((g, i) => (
                  <div key={i} className="text-sm text-tg-hint-color">
                    {g}
                    {data.genres.length - 1 !== i && ","}&nbsp;
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-medium">Cast:</div>
              <div className="flex flex-wrap">
                {data.cast.map((c, i) => (
                  <div key={i} className="text-sm text-tg-hint-color">
                    {c}
                    {data.cast.length - 1 !== i && ","}&nbsp;
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-medium">Directors:</div>
              <div className="flex flex-wrap">
                {data.directors.map((c, i) => (
                  <div key={i} className="text-sm text-tg-hint-color">
                    {c}
                    {data.directors.length - 1 !== i && ","}&nbsp;
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-medium">Runtime:</div>
              <div className="text-sm text-tg-hint-color">{runtime}</div>
            </div>
            <div>
              <div className="font-medium">Plot:</div>
              <div className="text-sm text-tg-hint-color">{data.plot}</div>
            </div>
            <div>
              <div className="font-medium">IMDb rating:</div>
              <div className="text-sm text-tg-hint-color">
                {data.imdb.rating}
              </div>
            </div>

            <div>
              <div className="font-medium">Languages:</div>
              <div className="flex flex-wrap">
                {data.languages.map((c, i) => (
                  <div key={i} className="text-sm text-tg-hint-color">
                    {c}
                    {data.languages.length - 1 !== i && ","}&nbsp;
                  </div>
                ))}
              </div>
            </div>

            {/* <Button className="hidden w-full border text-sm shadow-none hover:border-tg-btn-color hover:bg-transparent hover:text-tg-btn-color sm:block">
              Download
            </Button> */}
            <DownloadButton className="hidden sm:block" />
          </figcaption>
        </figure>
      </section>
    </main>
  );
};

export default MovieDetails;
