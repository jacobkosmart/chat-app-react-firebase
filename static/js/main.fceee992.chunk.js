(this["webpackJsonp01-chat-app"]=this["webpackJsonp01-chat-app"]||[]).push([[0],{44:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),c=n(27),i=n.n(c),s=n(6),u=n(29),o=n(19);n(35),n(45),n(46);o.a.initializeApp({apiKey:"AIzaSyBPfMZ9iLY5T4kjnm_IYwP4gr-oHlB9q3U",authDomain:"chat-app-8a114.firebaseapp.com",databaseURL:"https://chat-app-8a114.firebaseapp.com",projectId:"chat-app-8a114",storageBucket:"chat-app-8a114.appspot.com",messagingSenderId:"172399327092",appId:"1:172399327092:web:ef59b7b56a583f9cde1e21"});var j=o.a,l=o.a.auth(),b=o.a.firestore(),d=o.a.storage(),h=n(18),p=n(5),O=n(9),x=n.n(O),f=n(15),m=n(1),g=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),u=i[0],o=i[1],j=Object(a.useState)(!0),b=Object(s.a)(j,2),d=b[0],h=b[1],p=Object(a.useState)(""),O=Object(s.a)(p,2),g=O[0],v=O[1],w=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?r(a):"password"===n&&o(a)},y=function(){var e=Object(f.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!d){e.next=8;break}return e.next=5,l.createUserWithEmailAndPassword(n,u);case 5:a=e.sent,e.next=11;break;case 8:return e.next=10,l.signInWithEmailAndPassword(n,u);case 10:a=e.sent;case 11:console.log(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),v(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:y,className:"container",children:[Object(m.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:w}),Object(m.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:w}),Object(m.jsx)("input",{type:"submit",value:d?"Create Account":"Sign In"}),g]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:d?"Do you have already Account?":"Now you can create account"}),Object(m.jsx)("span",{onClick:function(){return h((function(e){return!e}))},children:d?"Sign In":"Create account"})]})]})},v=function(){var e=function(){var e=Object(f.a)(x.a.mark((function e(t){var n,a,r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new j.auth.GoogleAuthProvider:"github"===n&&(a=new j.auth.GithubAuthProvider),e.next=4,l.signInWithPopup(a);case 4:r=e.sent,console.log(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:e,name:"google",children:"Continue with Google"}),Object(m.jsx)("button",{onClick:e,name:"github",children:"Continue with Github"})]})]})},w=n(30),y=function(e){var t=e.chatObj,n=e.isOwner,r=Object(a.useState)(!1),c=Object(s.a)(r,2),i=c[0],u=c[1],o=Object(a.useState)(t.text),j=Object(s.a)(o,2),l=j[0],h=j[1],p=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc815\ub9d0\ub85c \uba54\uc138\uc9c0\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=6;break}return e.next=4,b.doc("chats/".concat(t.id)).delete();case 4:return e.next=6,d.refFromURL(t.attachmentUrl).delete();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){return u((function(e){return!e}))},g=function(){var e=Object(f.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,b.doc("chats/".concat(t.id)).update({text:l});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{children:i?Object(m.jsxs)(m.Fragment,{children:[" ",n&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:g,children:[Object(m.jsx)("input",{type:"text",placeholder:"Edit your Chat",value:l,required:!0,onChange:function(e){var t=e.target.value;h(t)}}),Object(m.jsx)("input",{type:"submit",value:"Update Chat"})]}),Object(m.jsx)("button",{onClick:O,children:"Cancel"})]})]}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(m.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px",alt:"img"}),n&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("button",{onClick:p,children:"Delete Chat"}),Object(m.jsx)("button",{onClick:O,children:"Edit Chat"})]})]})})})},C=n(48),S=function(e){var t=e.userObj,n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],u=Object(a.useState)(""),o=Object(s.a)(u,2),j=o[0],l=o[1],h=function(){var e=Object(f.a)(x.a.mark((function e(n){var a,r,s,u;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a="",""===j){e.next=10;break}return r=d.ref().child("".concat(t.uid,"/").concat(Object(C.a)())),e.next=6,r.putString(j,"data_url");case 6:return s=e.sent,e.next=9,s.ref.getDownloadURL();case 9:a=e.sent;case 10:return u={text:c,createAt:Date.now(),creatorID:t.uid,attachmentUrl:a},e.next=13,b.collection("chats").add(u);case 13:i(""),l("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("form",{onSubmit:h,children:[Object(m.jsx)("input",{value:c,onChange:function(e){var t=e.target.value;i(t)},type:"text",placeholder:"what's on your mind?",maxLength:120}),Object(m.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;l(t)},n.readAsDataURL(t)}}),Object(m.jsx)("input",{type:"submit",value:"chat"}),j&&Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:j,alt:"img",width:"50px",height:"50px"}),Object(m.jsx)("button",{onClick:function(){l(null)},children:"Clear Photo"})]})]})})},k=function(e){var t=e.userObj,n=Object(a.useState)([]),r=Object(s.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){b.collection("chats").orderBy("createAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));i(t)}))}),[]),Object(m.jsx)("div",{children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(S,{userObj:t}),Object(m.jsx)("div",{children:c.map((function(e){return Object(m.jsx)(y,{chatObj:e,isOwner:e.creatorID===t.uid},e.id)}))})]})})},F=function(e){var t=e.refreshUser,n=e.userObj,r=Object(p.f)(),c=Object(a.useState)(n.displayName),i=Object(s.a)(c,2),u=i[0],o=i[1],j=function(){var e=Object(f.a)(x.a.mark((function e(a){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),n.displayName===u){e.next=5;break}return e.next=4,n.updateProfile({displayName:u});case 4:t();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("form",{onSubmit:j,children:[Object(m.jsx)("input",{onChange:function(e){var t=e.target.value;o(t)},type:"text",placeholder:"Display name",value:u}),Object(m.jsx)("input",{type:"submit",value:"Update Profile"})]}),Object(m.jsx)("button",{onClick:function(){l.signOut(),r.push("/")},children:"Log Out"})]})},U=function(e){var t=e.userObj;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(h.b,{to:"/",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsxs)(h.b,{to:"/profile",children:[" Hi, ",t.displayName," "]})})]})})},I=function(e){var t=e.refreshUser,n=e.isLoggedIn,a=e.userObj;return Object(m.jsxs)(h.a,{children:[n&&Object(m.jsx)(U,{userObj:a}),Object(m.jsx)(p.c,{children:n?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p.a,{exact:!0,path:"/",children:Object(m.jsx)(k,{userObj:a})}),Object(m.jsx)(p.a,{exact:!0,path:"/profile",children:Object(m.jsx)(F,{userObj:a,refreshUser:t})})]}):Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(p.a,{exact:!0,path:"/",children:Object(m.jsx)(v,{})})})})]})};var P=function(){Object(u.a)("Chat-app");var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),i=Object(s.a)(c,2),o=i[0],j=i[1],b=Object(a.useState)(null),d=Object(s.a)(b,2),h=d[0],p=d[1];return Object(a.useEffect)((function(){l.onAuthStateChanged((function(e){e?(j(!0),p({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):j(!1),r(!0)}))}),[]),Object(m.jsxs)(m.Fragment,{children:[n?Object(m.jsx)(I,{refreshUser:function(){var e=l.currentUser;p({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:o,userObj:h}):"Initializing....",Object(m.jsxs)("footer",{children:["\xa9 ",(new Date).getFullYear()," Jacob Ko"]})]})};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(P,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.fceee992.chunk.js.map