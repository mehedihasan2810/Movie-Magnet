export interface MovieResponse<T> {
  success: boolean;
  data: T;
  error: string | null;
}
