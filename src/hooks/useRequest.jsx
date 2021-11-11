import axios from 'axios';
import React from 'react';

export default function useRequest(url) {
	// define state for response from server
	const [response, setResponse] = React.useState(null);
	// make effect when request to server
	React.useEffect(() => {
		const makeRequest = async () => {
			const data = await axios.get(url).then(res => res.data);
			setResponse(data);
		};
		makeRequest();
	}, [url]);

	return { response };
}
