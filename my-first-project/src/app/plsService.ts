export class plsService {
    getIngredients(): string {
        return localStorage.getItem('ingredients')
    }

    setIngredients(ingredients: any) {
        localStorage.setItem('ingredients', JSON.stringify(ingredients));
    }
}