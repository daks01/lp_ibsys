// 1. Импортируйте утилиты из astro:content
import { defineCollection, z } from "astro:content";

// 2. Определите `type` и `schema` для каждой коллекции
const vacancies = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		tag: z.string(),
		publishDate: z.string().transform((str) => new Date(str)),
	}),
});

const fulldevcycle = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			cover: image(),
			step: z.number(),
		}),
});

const whatwedo = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		step: z.number(),
	}),
});

// 3. Экспортируйте единственный объект collections, чтобы зарегистрировать вашу коллекцию(и)
// Этот ключ должен совпадать с именем вашего каталога коллекций в "src/content"
export const collections = {
	vacancies,
	fulldevcycle,
	whatwedo,
};
