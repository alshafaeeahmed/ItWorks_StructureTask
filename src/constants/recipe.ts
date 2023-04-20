export interface Recipe {
  id: string;
  name: string;
  image: string | null;
  duration: string;
  serving: number;
  category: string;
  preparationSteps: string[];
}
