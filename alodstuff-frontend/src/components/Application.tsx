import questionMark from '../assets/question-mark.png';

export default function Application({ logo, altText, title, url }: { logo?: string, altText?: string, title: string, url?: string }) {
	return (
		<li className='p-4 border-2 rounded-lg hover:border-amber-600 hover:drop-shadow-sm hover:drop-shadow-amber-100'>
			<a href={url ?? 'https://www.google.com'}>
				<div className='flex flex-col gap-10 text-center'>
					<img 
						src={logo === null || logo === undefined || logo === '' ? questionMark : logo} 
						alt={altText} 
						className='w-64 h-64' />
					<h2>{title}</h2>
				</div>
			</a>
		</li>
	)
}