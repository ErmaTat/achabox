import recipeCard from '../assets/recipes/acha-pudding-recipe-card.png?format=webp&quality=82&width=1152'

export default function RecipeSection() {
  return (
    <section id="recipes" className="border-t border-[#F0EBE3] bg-[#FFF8F1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#F97316]">
            Recipe inspiration
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#3D2418] sm:text-4xl">
            Acha pudding
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#6B625B]">
            A warm, creamy bowl made with love and finished with your favorite toppings.
          </p>
        </div>

        <a
          href={recipeCard}
          target="_blank"
          rel="noreferrer"
          aria-label="Open the full-size Acha pudding recipe card"
          className="mx-auto block max-w-5xl overflow-hidden rounded-2xl border border-[#F0EBE3] bg-white shadow-[0_24px_70px_rgba(61,36,24,0.10)] transition-transform duration-300 hover:-translate-y-1"
        >
          <img
            src={recipeCard}
            alt="AchaBox Acha pudding recipe card with ingredients, four preparation steps, and a bowl of pudding"
            loading="lazy"
            className="h-auto w-full"
          />
        </a>
        <p className="mt-4 text-center text-sm text-[#7A736C]">
          Open the recipe card to view it full size.
        </p>
      </div>
    </section>
  )
}
