import Axios from 'axios';

export default Axios.create({
	baseURL: 'https://translation.googleapis.com/language/translate/v2',
	params: {
		key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
	}
});

/*
Paid API Key:
AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
*/

/*
export default Axios.create({
	baseURL: 'https://translate.google.com/translate_a/single',
	params: {
        client: "gtx",
        dt: "t",
        sl: "auto"
	},
	headers: {
		"Access-Control-Allow-Origin": "*",
		"x-requested-with": "XMLHttpRequest"
	}
});
*/

/*
https://translate.googleapis.com/translate_a/t
anno=3
client=te_lib
format=html
v=1.0
key=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw
logld=vTE_20210503_00
sl=auto
tl=en
tc=1
sr=1
tk=433807.30357
mode=1
*/