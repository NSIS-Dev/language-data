import meta from '../data/meta.json';

export function codepages(): number[] {
	const codePages = new Set<number>();

	for (const lang of Object.values(meta)) {
		const codePage = Number(lang.code_page);

		if (!Number.isNaN(codePage) && codePage !== 0) {
			codePages.add(codePage);
		}
	}

	return Array.from(codePages).sort((a, b) => a - b);
}
