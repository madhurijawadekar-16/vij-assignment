import React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
function App() {
	const whatWeDoList = [
		{
			id: 1,
			val: 'Digital Marketing',
		},
		{
			id: 2,
			val: 'Digital Marketing',
		},
		{
			id: 3,
			val: 'Digital Marketing',
		},
		{
			id: 4,
			val: 'Digital Marketing',
		},
	]
	// img section
	const itemData = [
		{
			img: '/images/vertical-img.png',
			alt: 'vertical-img',
			mainTitle: 'starbucks',
			subTitle: 'digital marketing',
			description: 'Our ad campaign brought 80% footfall to the company',
		},
		{
			img: '/images/horizontal--img.png',
			alt: 'horizontal-img',
			mainTitle: 'Nike',
			subTitle: 'digital marketing',
			description: 'Our ad campaign brought 80% footfall to the company',
		},
		{
			img: '/images/horizontal--img.png',
			alt: 'horizontal-img',
			mainTitle: 'Nike',
			subTitle: 'digital marketing',
			description: 'Our ad campaign brought 80% footfall to the company',
		},
		{
			img: '/images/vertical-img.png',
			alt: 'vertical-img',
			mainTitle: 'starbucks',
			subTitle: 'digital marketing',
			description: 'Our ad campaign brought 80% footfall to the company',
		},
	]
	// img section
	const partnerData = [
		{
			img: '/images/pinterest.svg',
			alt: 'pinterest',
			title: 'pinterest',
		},
		{
			img: '/images/foursquare.svg',
			alt: 'four square',
			title: 'four square',
		},
		{
			img: '/images/pwa.svg',
			alt: 'pwa',
			title: 'pwa',
		},
		{
			img: '/images/sass.svg',
			alt: 'saas',
			title: 'saas',
		},
		{
			img: '/images/vue.svg',
			alt: 'vue',
			title: 'vue',
		},
		{
			img: '/images/pinterest.svg',
			alt: 'pinterest',
			title: 'pinterest',
		},
		{
			img: '/images/foursquare.svg',
			alt: 'four square',
			title: 'four square',
		},
		{
			img: '/images/pwa.svg',
			alt: 'pwa',
			title: 'pwa',
		},
		{
			img: '/images/sass.svg',
			alt: 'saas',
			title: 'saas',
		},
		{
			img: '/images/vue.svg',
			alt: 'vue',
			title: 'vue',
		},
	]
	return (
		<div className='home'>
			<div className='home-hero-section'>
				<div className='hero-section-box-sm bg-faint-white show-for-small'>
					<h1 className='f-bold'>
						<div className='f-primary-main'>We are Extensive.</div>
					</h1>
					<h3 className='f-primary-main f-400 mt-sm'>
						<div>Helping you stand out in a crowded market</div>
					</h3>
				</div>
				<div className='img-container'>
					<img
						src='/images/hero-img.png'
						className='img-hero-section-sm show-for-small'
					/>
				</div>
				<div className='img-hero-section hide-for-small'></div>

				<div className='hero-section-box bg-faint-white hide-for-small'>
					<h1 className='f-bold'>
						<div className='f-primary-main'>We are</div>
						<div className='f-secondary-dark'>Extensive.</div>
					</h1>
					<h3 className='f-primary-main f-400 mt-sm'>
						<div>Helping you stand out in a </div>
						<div>crowded market</div>
					</h3>
				</div>
			</div>
			<Box className='page-section mt-lg mb-md' sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<h5 className='f-400 f-uppercase f-primary'>who are we</h5>
						<h1 className='f-bold f-normal f-bg-main-dark mt-sm'>
							We are Extensive.
						</h1>
						<p className='f-normal-text-color mt-sm'>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat duis enim velit mollit.
							Exercitation veniam consequat sunt nostrud amet.
						</p>
						<div className='mt-md align-item'>
							<button className='btn-sm bg-primary-main f-pure-white f-uppercase h6 f-spaced-md'>
								BOOK A FREE MARKETING AUDIT
							</button>
						</div>
					</Grid>
				</Grid>
			</Box>
			<Box className='mt-lg show-for-small-only' sx={{ flexGrow: 1 }}>
				<Grid container>
					<Grid item xs={12}>
						<div className='our-work-section-sm bg-primary-lighter'>
							<h1 className='f-uppercase f-bold f-primary-main'>
								<div>WHAT </div>
								<div>WE DO.</div>
							</h1>
							<p className='f-primary-darker mt-xs'>
								We do lots of stuffs , basically adding value to your product .
							</p>
						</div>
					</Grid>
				</Grid>
			</Box>
			<Box className='mt-lg mb-md hide-for-small-only' sx={{ flexGrow: 1 }}>
				<Grid container spacing={2} columns={16}>
					<Grid item xs={10}>
						<div className='our-work-section bg-primary-lighter'>
							{/* <img src="/images/ellipse.png" alt='ellipse' /> */}
							<h1 className='f-uppercase f-bold f-primary-main'>
								<div>WHAT </div>
								<div>WE DO.</div>
							</h1>
							<p className='f-primary-darker mt-xs'>
								We do lots of stuffs , basically adding value to your product .
							</p>
						</div>
					</Grid>
					<Grid item xs={6} className='item-list'>
						{whatWeDoList.map((value) => {
							return (
								<h3
									className='mt-md f-primary-main f-capitalize'
									key={value.id}
								>
									{value.val}
								</h3>
							)
						})}
						<div className='mt-sm'>
							<button className='btn-sm bg-primary-main f-pure-white f-uppercase h6 f-spaced-md br-sm'>
								view all
							</button>
						</div>
					</Grid>
				</Grid>
			</Box>
			<Box
				className='page-section show-for-small-only mb-sm'
				sx={{ flexGrow: 1 }}
			>
				<Grid container>
					<Grid item xs={12}>
						{whatWeDoList.map((value) => {
							return (
								<h4
									className='mt-sm f-primary-main f-capitalize'
									key={value.id}
								>
									{value.val}
								</h4>
							)
						})}
						<div className='mt-xs'>
							<button className='btn-sm bg-primary-main f-pure-white f-uppercase h6 f-spaced-md br-sm'>
								view all
							</button>
						</div>
					</Grid>
				</Grid>
			</Box>
			<div className='bg-primary-main'>
				<Box className='page-section mt-lg' sx={{ flexGrow: 1 }}>
					<h2 className='f-pure-white f-uppercase f-500'>
						<div>our</div>
						<div>work</div>
					</h2>
					<div className='mt-sm'>
						<button className='btn-sm bg-secondary-main f-pure-white f-uppercase h6 f-spaced-md br-sm'>
							view all
						</button>
					</div>
					<div className='hide-for-small-only'>
						<ImageList variant='masonry' className='mt-md' cols={2} gap={40}>
							{itemData.slice(0, 2).map((item) => (
								<ImageListItem key={item.img}>
									<img
										src={item.img}
										className='img-list'
										alt={item.alt}
										loading='lazy'
									/>
									<div className='mb-sm'>
										<h5 className='f-secondary-main f-uppercase mt-xs'>
											{item.subTitle}
										</h5>
										<h3 className='f-pure-white f-uppercase mt-sm'>
											{item.mainTitle}
										</h3>
										<p className='f-pure-white f-normal mt-xs'>
											{item.description}
										</p>
									</div>
								</ImageListItem>
							))}
						</ImageList>
						<ImageList variant='masonry' cols={2} gap={40}>
							{itemData.slice(2, itemData.length).map((item) => (
								<ImageListItem key={item.img}>
									<img
										src={item.img}
										className='img-list'
										alt={item.alt}
										loading='lazy'
									/>
									<div className='mb-sm'>
										<h5 className='f-secondary-main f-uppercase mt-xs'>
											{item.subTitle}
										</h5>
										<h3 className='f-pure-white f-uppercase mt-sm'>
											{item.mainTitle}
										</h3>
										<p className='f-pure-white f-normal mt-xs'>
											{item.description}
										</p>
									</div>
								</ImageListItem>
							))}
						</ImageList>
					</div>
					<div className='show-for-small-only'>
						{itemData.map((item) => (
							<div key={item.img} className='mt-md-sm'>
								<img
									src={item.img}
									className='img-list-sm'
									alt={item.alt}
									loading='lazy'
								/>
								<div className='mb-sm'>
									<h5 className='f-secondary-main f-uppercase mt-xs'>
										{item.subTitle}
									</h5>
									<h3 className='f-pure-white f-uppercase mt-sm'>
										{item.mainTitle}
									</h3>
									<p className='f-pure-white f-normal mt-xs'>
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</Box>
			</div>
			<div className='page-section mt-lg mb-md'>
				<h2 className='f-primary-main f-uppercase f-bold'>
					<div>our</div>
					<div>partners.</div>
				</h2>
				<h4 className='mt-xs f-secondary-main f-normal'>
					Your success is our success
				</h4>
				<Box sx={{ flexGrow: 1 }} className='mt-xs'>
					<ImageList cols={5} gap={20}>
						{partnerData.map((item, index) => (
							<ImageListItem key={index}>
								<img
									src={item.img}
									alt={item.title}
									className='logo-img'
									loading='lazy'
								/>
								<h5 className='ta-c mt-sm'>{item.title}</h5>
							</ImageListItem>
						))}
					</ImageList>
				</Box>
			</div>
			<div className='bg-primary-main'>
				<div className='page-section mt-lg mb-md'>
					<h2 className='f-primary-light f-normal f-bold'>
						<span>Looking to drive</span>
						<div>
							results?
							<span className='f-secondary-main f-underline'> Lets chat</span>
						</div>
					</h2>
				</div>
			</div>
		</div>
	)
}

export default App
