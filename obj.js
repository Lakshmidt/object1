var userInformation={
name1:"anu",
email:"anu@lakshmi.com",
age:20
};
var facebookposts=[{
name:"lakshmi",
date:"26/3/2016",
content:"my first fb post",
comment:[ {
	commenter:"anu",
	dateofcomment:"27/3/2016",
	commentcontent:"i like this post"
  	},{comment2:"my 2 comment"
	   }]
},
	{college:"gech",branch:"cs",sem:"6"}
];
console.log(facebookposts[0].comment[1],facebookposts[1]);
