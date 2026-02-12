import questionMark from '../assets/question-mark.png';

export default function Application({ logo, altText, title, url }: { logo?: string, altText?: string, title: string, url?: string }) {
	return (
		<li>
			<a href={url ?? 'https://www.google.com'}>
				<div className='flex flex-col gap-10 text-center'>
					<img src={logo ?? questionMark} alt={altText} />
					<h2>{title}</h2>
				</div>
			</a>
		</li>
	)
}