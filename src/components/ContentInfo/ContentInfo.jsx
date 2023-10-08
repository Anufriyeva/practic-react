import { useEffect, useState } from "react";
import { getNews } from "../../services/getNews";
import ErrorCard from "../ErrorCard/ErrorCard";
import { useCustomContext } from "../../testContext/Context/Context";

const STATUS = {
	IDLE: 'idle',
	PENDING: 'pending',
	REJECTED: 'rejected',
	RESOLVED: 'resolved',
}

const ContentInfo = ({ searchText }) => {
	const { news, setNews } = useCustomContext()
	// const [news, setNews] = useState(null)
	const [error, setError] = useState('')
	const [status, setStatus] = useState(STATUS.IDLE)

	useEffect(() => {
		news && setStatus(STATUS.RESOLVED)
	}, [news])

	useEffect(() => {
		if (!searchText) return
		setStatus(STATUS.PENDING)
		getNews(searchText)
			.then((response) => response.json())
			.then((data) => {
				if (data.status === 'ok') {
					setNews(data.articles)
					setStatus(STATUS.RESOLVED)
				} else return Promise.reject(data.message)
			})
			.catch((error) => {
				setError(error)
				setStatus(STATUS.REJECTED)
			})
	}, [searchText, setNews])

	if (status === STATUS.PENDING)
		return (
			<div className='spinner-border' role='status'>
				<span className='visually-hidden'>Loading...</span>
			</div>
		)
	else if (status === STATUS.RESOLVED)
		return (
			<ul>
				{news.map((el) => {
					return <li key={el.url}>{el.title}</li>
				})}
				<button>Load more...</button>
			</ul>
		)
	else if (status === STATUS.REJECTED) return <ErrorCard>{error}</ErrorCard>
}

export default ContentInfo