import { MovieResponse } from "@/types";
import dbConnect from "./dbConnect";
import Movies, { Movie } from "@/models/Movies";

const ITEMS_PER_PAGE = 20;

export const fetchMoviesSeries = async (
  query: string,
  currentPage: number,
): Promise<MovieResponse<Movie[]>> => {
  try {
    await dbConnect();

    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    // Query the database for movies and series matching the search term
    const movies = await Movies.find({
      $or: [
        { title: new RegExp(query, "i") },
        { genres: new RegExp(query, "i") },
        { type: new RegExp(query, "i") },
      ],
      poster: { $exists: true }, // Ensure the documents have a poster
    })
      .skip(offset)
      .limit(ITEMS_PER_PAGE)
      // .sort({ released: -1 })
      .select({ title: true, poster: true, released: true });

    return { success: true, data: movies, error: null };
  } catch (error) {
    console.log((error as Error).message);
    return { success: true, data: [], error: (error as Error).message };
  }
};

export const fetchMoviesPages = async (
  query: string,
): Promise<MovieResponse<number | null>> => {
  try {
    await dbConnect();

    const count = await Movies.find({
      $or: [
        { title: new RegExp(query, "i") },
        { genres: new RegExp(query, "i") },
        { type: new RegExp(query, "i") },
      ],
      poster: { $exists: true }, // Ensure the documents have a poster
    }).countDocuments();

    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);

    return { success: true, data: totalPages, error: null };
  } catch (error) {
    console.log((error as Error).message);
    return { success: true, data: null, error: (error as Error).message };
  }
};

// Function to get the latest movies or series based on a type
export const fetchLatestMovieSeries = async (
  term: string,
): Promise<MovieResponse<Movie[]>> => {
  try {
    await dbConnect();

    // Determine whether to skip the first document based on the type
    const skip = term === "movie" ? 1 : 0;

    // Query the database for the latest movies or series
    const movies = await Movies.find({
      type: new RegExp(term, "i"), // Case-insensitive type match
      poster: { $exists: true }, // Ensure the documents have a poster
    })
      .skip(skip) // Skip the first document if needed
      .limit(10)
      .sort({ released: -1 })
      .select({ title: true, poster: true, released: true });

    return { success: true, data: movies, error: null };
  } catch (error) {
    console.log((error as Error).message);
    return { success: true, data: [], error: (error as Error).message };
  }
};

export const fetchMovie = async (
  id: string,
): Promise<MovieResponse<Movie | null>> => {
  try {
    await dbConnect();

    // Query the database for movie or serie matching the id
    const movie = await Movies.findById(id).select({
      title: true,
      poster: true,
      released: true,
      cast: true,
      genres: true,
      countries: true,
      directors: true,
      languages: true,
      plot: true,
      imdb: true,
      runtime: true,
    });

    return { success: true, data: movie, error: null };
  } catch (error) {
    console.log((error as Error).message);
    return { success: true, data: null, error: (error as Error).message };
  }
};
