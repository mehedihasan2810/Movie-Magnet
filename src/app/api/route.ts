import dbConnect from "@/lib/dbConnect";
import Movies from "@/models/Movies";

export async function GET() {
  await dbConnect();

  const movies = await Movies.find({ type: { $ne: "movie" } }).limit(10);

  console.log(movies[0]);

  return Response.json({ data: "foooooo" });
}
