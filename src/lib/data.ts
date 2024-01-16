import { MovieType } from "@/types";
import dbConnect from "./dbConnect";
import Movies from "@/models/Movies";

export const getMoviesSeries = async (
  searchTerm: string,
): Promise<MovieType> => {
  try {
    await dbConnect();

    // Query the database for movies and series matching the search term
    const movies = await Movies.find({
      $or: [
        { title: new RegExp(searchTerm, "i") },
        { genres: new RegExp(searchTerm, "i") },
        { type: new RegExp(searchTerm, "i") },
      ],
      poster: { $exists: true }, // Ensure the documents have a poster
    })
      .limit(10)
      .sort({ released: -1 })
      .select({ title: true, poster: true, released: true });

    return { success: true, data: movies, error: null };
  } catch (error) {
    console.log((error as Error).message);
    return { success: true, data: [], error: (error as Error).message };
  }
};

// Function to get the latest movies or series based on a type
export const getLatestMovieSeries = async (
  term: string,
): Promise<MovieType> => {
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
