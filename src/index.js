module.exports = function toReadable (number) {
	//Константы
	const ed = ["one","two","three","four","five","six","seven","eight","nine","ten"];
	const des = ["eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
	const des2 = ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
	const sotn = ["one hundred" , "two hundred" , "three hundred" , "four hundred" , "five hundred" ,  "six hundred" , "seven hundred" ,"eight hundred" , "nine hundred"];
	//Проверка на 0
	if(number == 0){return "zero"}
	//Проверка на 0-10
	if(number<=10){return ed[number-1]}
	//Проверка на 10-20
	if(number >10 && number <20){return des[number-11]}
	//Проверка на 20-99
	if(number>=20 && number<=99){
		//Проверка на 20,30,40,50,60,70,80,90
		if(number%10==0){return des2[number/10-2]}else{
			//Работа с числами которые не кончаются на 0
			let r_number = [];
			//Делю число на массив
			number = String(number).split('');
			//Первое число сравнивается с константой десятки2 и записывается значение из константы
			r_number.push((des2[Number(number[0])-2]));
			//Второе число сравнивается с константой единицы и записывается значение из константы
			r_number.push((ed[Number(number[1])-1]))
			return r_number.join(" ");
		}
  	}
	//Проверка на числа 100-999
	if(number>=100 && number <=999){
		//Проверка сотен заканчивающихся на два нуля
		if(number%100 == 0){return sotn[number/100-1]}
		//des_number - тут будут храниться 2 последних числа их трехзначного числа
		let des_number = 0;
		//sotni  - тут хранится первое число из трехзначного числа
		let sotni = 0;
		sotni = Number(String(number).split('').shift());
		des_number = String(number).split('');
		des_number.splice(0,1);
		des_number = des_number.join('');
		//Проверяю являются два последних числа меньше 10
		if(Number(des_number)<=10){
			//Возвращаю конкантенацию проверки сотен из константы sotn и и чисел из константы ed
			return sotn[sotni-1]+" " + ed[des_number-1];
		}
		//Проверяю являются два последних числа больше 10 и меньше 20
		if(Number(des_number)>10 && Number(des_number)<20){
			//Возвращаю конкантенацию проверки сотен из константы sotn и и двухзначного числа из константы des
			return sotn[sotni-1]+" " + des[des_number-11];
		}
		//Проверяю являются два последних числа больше 20 и меньше 99
		if(Number(des_number)>=20 && Number(des_number)<=99){
			//Проверяю заканчиваются ли двухначное число на 0
			//Возвращаю конкантенацию проверки сотен из константы sotn и и чисел из константы des2
			if(des_number%10==0){return sotn[sotni-1]+" "+des2[des_number/10-2]}else{
				//Работа с числами которые не кончаются на 0
				let r_number = [];
				//Делю число на массив
				des_number = String(des_number).split('');
				//Первое число сравнивается с константой десятки2 и записывается значение из константы
				r_number.push((des2[Number(des_number[0])-2]));
				//Второе число сравнивается с константой единицы и записывается значение из константы
				r_number.push((ed[Number(des_number[1])-1]))
				return sotn[sotni-1]+" "+r_number.join(" ");
			}
		}
	}
 
}
