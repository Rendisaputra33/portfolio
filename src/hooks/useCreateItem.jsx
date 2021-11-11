export default function useCreateItem() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([1, 2, 3, 4, 5]);
		}, 1500);
	});
}
