export type Recipe = {
  id: string,
  title: string,
  category: string,
  imageExtension: string,
  servings: string | number,
  source: string,
  time: string,
  directions: string[],
  ingredients: string[],
  sauceTitle?: string,
  sauceIngredients?: string[],
  optionalToppings?: string[],
  servingInstructions?: string[],
  notes?: string[],
  mixinIdeas?: string[]
}