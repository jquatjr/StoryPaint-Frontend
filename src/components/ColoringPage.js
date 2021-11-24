import { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { CirclePicker } from 'react-color';
import '../styles/ColoringPage.css';
import DemoBook from './DemoBook';
import PictureSelect from './PictureSelect';
export default function ColoringPage({ notify }) {
	const [ currentColor, setCurrentColor ] = useState('white');
	const [ book, setBook ] = useState('Peppa');
	const colors = [
		'#f44336',
		'#e91e63',
		'#FFC0CB',
		'#9c27b0',
		'#673ab7',
		'#3f51b5',
		'#2196f3',
		'#03a9f4',
		'#00bcd4',
		'#009688',
		'#4caf50',
		'#8bc34a',
		'#cddc39',
		'#ffeb3b',
		'#ffc107',
		'#ff9800',
		'#ff5722',
		'#735548',
		'#607db8',
		'#222222',
		'#808080',
		'#FFFFFF'
	];
	const availableBooks = [ 'Random', 'Peppa', 'goodnightMoon' ];
	const handleBookChange = (e) => {
		setBook(e.target.value);
	};
	const handleChangeColor = (color) => {
		setCurrentColor(color.hex);
	};

	return (
		<Box sx={{ height: '100vh', paddingTop: '5rem', textAlign: 'center' }} className="ColoringPage">
			<Box sx={{ width: '100%' }}>
				<Box sx={{ margin: 'auto' }}>
					<PictureSelect
						setBook={setBook}
						book={book}
						handlePictureChange={handleBookChange}
						availableBooks={availableBooks}
					/>
				</Box>

				<Paper
					elevation={5}
					className="ColoringPage-color-picker"
					sx={{ backgroundColor: 'rgba(190, 164, 164, 0.8)' }}
				>
					<CirclePicker
						width="100%"
						className="ColoringPage-sketch"
						direction={'horizontal'}
						circleSize={50}
						colors={colors}
						color={currentColor}
						onChangeComplete={handleChangeColor}
					/>
					<Typography className="ColoringPage-text">
						Choose a Color
					</Typography>
				</Paper>
			</Box>
			<Box className="ColoringPage-book-container">
				<DemoBook
					bookName={book}
					currentColor={currentColor}
					notify={notify}
				/>
			</Box>
		</Box>
	);
}
