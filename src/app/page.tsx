export default function HomePage() {
  return (
    <main>
      {/* <main> === It will improve SEO, than <div>/<>...etc */}

      {/*Step 01. className="heading" then, properties appply inside global css. but it is old css. */}
      <h1 className="heading">Hello World.!</h1><br />

      {/* // Step 02 . Properties/classes apply in className, this is called tailwind css and it is new way of css.*/}
      <h1 className="text-red-500  bg-blue-500 text-4xl">Hello World.!</h1>
    </main>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////.

/*
What is the meaning of each line, when we install next.js application?

.eslint >>> identify error when coding occur.

.src/aap directer >>> ye directory hai, agar nahi lgay ge tab bhi next.js ki application run ho jay gi.

.app router >>> ye must hai. agar nahi hoga tu app or src/app ka folder nahi bne ga. is me next js k latest feautures include h.

.tailwind css >>> it is framwork. is me koi khas components present nahi hote hai. is me sirf classes present hoti hao jo element
ko style k kam aati hai. lekin kuch liberary/tools hote hai like shadcn jo already made components dete hai like: button, card,
form...etc. in components ko hum classes k saath use krsakte hai.

bootstrap >>> Is me already made components present hote hai jo is ka advantage hai. but is k disadvantages bhi hai like:
agar koi bhi aek component install krna hai tu us k lye full pkg install krna hota hai. Customization is not easy, means agar
aek dafa components ko use kya then usko again customize/edit/change krna bohat mushkil hota hai.

Differences:
.Library aek small pakage hai, limited pakages present hote hai, remaining install krne hote hai.
.FrameWork aek large pakage hai, es me all pakages present hote hai.

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////.
/*

Q: How to recognize tailwind Css is present in our app?
Ans: tailwind.config.ts >>> Ye file present hai, application mein.

..postcss.config.mjs >>> Ye browser ki setting ko sahi krta hai, means web, mobile and kesi ho, tablet me kesi ho, or laptop/computer me kesi ho.

..mjs >>> it means, is application me ecmascript module ko use huwa hai.

..Sementic Html Tags >>> It means, sahi html tags ko use krna apni application me.

..Differences:
In Next.js >>> className(Above Example) used, instead of class(Normal Html)

..npm run dev --turbo >>>> Local host will come fast.

..In Tailwind >>> If some class property is not comming then :
text-size-4px present, but if we write text-size-2px, it is not present in next.js, then we can use it like:  text-size-[2px].

Tailwind Css website is present in which many classes of different properties like text color / font size / bg color are present.
*/