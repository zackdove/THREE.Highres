const generateTexture = (
	text,
	background = "#ffa1a1",
	textcolor = "blue",
	size = 640
) => {
	const bitmapShift = 80;
	const copyAmount = 4;
	const canvasSize = size;
	const fontSize = canvasSize / copyAmount;
	
	const bitmap = document.createElement("canvas");
	bitmap.width = canvasSize;
	bitmap.height = canvasSize;
	
	const g = bitmap.getContext("2d");
	
	// background
	g.fillStyle = background;
	g.fillRect(0, 0, bitmap.width + 80, bitmap.height);
	
	// text
	g.fillStyle = "red";
	g.font = `${fontSize}px KareliaMedium`;
	g.fillStyle = textcolor;
	const textWidth = g.measureText(text).width;
	g.scale(canvasSize / textWidth, 1);
	const fillAndShiftText = (index) =>
	g.fillText(text, 0, fontSize * ++index - bitmapShift);
	
	Array(copyAmount + 1)
	.fill(0)
	.forEach((item, i) => {
		fillAndShiftText(i);
	});
	
	// document.body.appendChild(bitmap);
	return bitmap;
};

const generateStripeTexture = (
	text,
	colors = { main: "#ffa1a1", second: "blue" }
) => {
	const copyAmount = 2;
	const canvasSize = 2560;
	const fontSize = canvasSize / copyAmount;
	const fontStyle = `${fontSize}px KareliaMedium`;
	
	const bitmap = document.createElement("canvas");
	const g = bitmap.getContext("2d");
	g.font = fontStyle;
	bitmap.width = g.measureText(text).width;
	bitmap.height = fontSize * 2;
	
	const generateTextRow = (shift, i) => {
		// background
		g.fillStyle = Object.values(colors)[i];
		g.fillRect(0, shift * i, bitmap.width, bitmap.height);
		
		// text
		g.font = `${fontSize}px KareliaMedium`;
		// g.fillStyle = Object.values(colors)[i];
		g.fillText(text, 0, fontSize * i - 160);
		g.fillStyle = Object.values(colors)[0];
	};
	
	Array(copyAmount + 1)
	.fill(0)
	.forEach((item, i) => {
		generateTextRow(bitmap.height / 2, i);
	});
	
	// text
	// document.body.appendChild(bitmap);
	return bitmap;
};

const generate4StripeTexture = (
	text,
	colors = { bg: '#FF00FF',
	text: '#ffffff',
	bg2: '#FFFFFF',
	text2: '#FFFFFF',
	bg3: '#ff0000',
	text3: '#FFFFFF',
	bg4: '#ff0000',
	text4: '#ff0000', }
) => {
	console.log(Object.values(colors));
	const copyAmount = 4;
	const canvasSize = 5120;
	const fontSize = canvasSize / copyAmount;
	const fontStyle = `${fontSize}px KareliaMedium`;
	
	const bitmap = document.createElement("canvas");
	const g = bitmap.getContext("2d");
	g.font = fontStyle;
	bitmap.width = g.measureText(text).width;
	bitmap.height = canvasSize;
	
	const generateTextRow = (shift, i) => {
		// background
		g.fillStyle = Object.values(colors)[i];
		console.log(g.fillStyle);
		g.fillRect(0, shift * i/2, bitmap.width, shift * i/2 + fontSize);
		
		// text
		g.font = `${fontSize}px KareliaMedium`;
		g.fillStyle = Object.values(colors)[i+1];
		console.log(g.fillStyle);
		console.log(shift * i/2);
		g.fillText(text, 0, (shift * i/2)  + fontSize - 160 );
	};
	for (let i = 0; i<copyAmount*2; i+=2){
		generateTextRow(fontSize, i);
	}
	
	// text
	// document.body.appendChild(bitmap);
	return bitmap;
};