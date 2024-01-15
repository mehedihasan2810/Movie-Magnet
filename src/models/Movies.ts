import mongoose from "mongoose";

export interface Movies extends mongoose.Document {
  _id: {
    $oid: string;
  };
  plot: string;
  genres: string[];
  runtime: number;
  rated: string;
  cast: string[];
  title: string;
  fullplot: string;
  languages: string[];
  released: {
    $date: {
      $numberLong: number;
    };
  };
  directors: string[];
  writers: string[];
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  lastupdated: Date;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: string[];
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
      numReviews: number;
      meter: number;
    };
    production: string;
    lastUpdated: Date;
  };
  num_mflix_comments: number;
}

const MovieSchema = new mongoose.Schema<Movies>({
  _id: {
    $oid: {
      type: String,
      required: true,
    },
  },
  plot: {
    type: String,
    required: true,
  },
  genres: [
    {
      type: String,
      required: true,
    },
  ],
  runtime: {
    type: Number,
    required: true,
  },
  rated: {
    type: String,
    required: true,
  },
  cast: [
    {
      type: String,
      required: true,
    },
  ],
  title: {
    type: String,
    required: true,
  },
  fullplot: {
    type: String,
    required: true,
  },
  languages: [
    {
      type: String,
      required: true,
    },
  ],
  released: {
    $date: {
      $numberLong: {
        type: Number,
        required: true,
      },
    },
  },
  directors: [
    {
      type: String,
      required: true,
    },
  ],
  writers: [
    {
      type: String,
      required: true,
    },
  ],
  awards: {
    wins: {
      type: Number,
      required: true,
    },
    nominations: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  lastupdated: {
    type: Date,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  imdb: {
    rating: {
      type: Number,
      required: true,
    },
    votes: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  countries: [
    {
      type: String,
      required: true,
    },
  ],
  type: {
    type: String,
    required: true,
  },
  tomatoes: {
    viewer: {
      rating: {
        type: Number,
        required: true,
      },
      numReviews: {
        type: Number,
        required: true,
      },
      meter: {
        type: Number,
        required: true,
      },
    },
    production: {
      type: String,
      required: true,
    },
    lastUpdated: {
      $date: {
        type: Date,
        required: true,
      },
    },
  },
  num_mflix_comments: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Movie ||
  mongoose.model<Movies>("Movie", MovieSchema);
