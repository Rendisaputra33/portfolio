import React from 'react';

export default function useInfinite(callback, ref) {
	// define state
	const [isFetching, setIsFetching] = React.useState(false);

	// make effect when is fetching change
	React.useEffect(() => {
		if (!isFetching) return;
		return (async () => {
			return await callback();
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isFetching]);

	// make effect when window scrolling and touch element breakpoint
	React.useEffect(() => {
		const observer = new IntersectionObserver(
			entires => {
				if (entires[0].isIntersecting) return setIsFetching(true);
			},
			{ root: null, threshold: 1.0, rootMargin: '10px' }
		);

		if (ref.current) return observer.observe(ref.current);
	}, [ref]);

	// return hooks
	return [isFetching, setIsFetching];
}
