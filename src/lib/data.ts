import { MovieType } from "@/types";
import dbConnect from "./dbConnect";
import Movies from "@/models/Movies";

export const getMoviesSeries = async (
  searchTerm: string | string[] | undefined,
): Promise<MovieType> => {
  try {
    if (searchTerm === undefined)
      return { success: true, data: [], error: null };

    await dbConnect();

    let term = typeof searchTerm === "string" ? searchTerm : searchTerm[0];

    const movies = await Movies.find({
      $or: [
        { title: new RegExp(term, "i") },
        { genres: new RegExp(term, "i") },
        { type: new RegExp(term, "i") },
      ],
      poster: { $exists: true },
    })
      .limit(10)
      .select({ title: true, poster: true, released: true });

    return { success: true, data: movies, error: null };
  } catch (error) {
    console.log((error as Error).message);
    return { success: true, data: [], error: (error as Error).message };
  }
};

export const getLatestMovieSeries = async (
  term: string,
): Promise<MovieType> => {
  try {
    await dbConnect();

    const skip = term === "movie" ? 1 : 0;

    const movies = await Movies.find({
      type: new RegExp(term, "i"),
      poster: { $exists: true },
      released: {
        $gte: new Date("2015-01-01T00:00:00Z"),
        $lt: new Date("2016-01-01T00:00:00Z"),
      },
    })
      .limit(10)
      .skip(skip)
      .select({ title: true, poster: true, released: true });

    return { success: true, data: movies, error: null };
  } catch (error) {
    console.log((error as Error).message);
    return { success: true, data: [], error: (error as Error).message };
  }
};
