(this["webpackJsonpfeedback-form"]=this["webpackJsonpfeedback-form"]||[]).push([[0],{108:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(32),l=t.n(s),o=(t(81),t(14)),c=(t(82),t(132)),i=t(131),m=r.a.forwardRef((function(e,a){return r.a.createElement(i.a,Object.assign({elevation:6,ref:a,variant:"filled"},e))})),d=function(e){var a=e.status,t=e.setStatus,n=function(e,a){"clickaway"!==a&&t(null)};return r.a.createElement(c.a,{open:null!==a,autoHideDuration:6e3,onClose:n},r.a.createElement(m,{onClose:n,severity:"Email send successfully"===a?"success":"error",color:"Email send successfully"===a?"success":"error",sx:{width:"100%"}},a))},u=t(68),h=t(39),_=t.n(h),p=function(e){e.title;var a=e.disabled;return r.a.createElement("div",{className:_.a.centeredButton},r.a.createElement("button",{className:a?"".concat(_.a.btn," ").concat(_.a.btn_disabled," "):_.a.btn,type:"submit"},"message me"))},b=t(66),g=t.n(b),f=function(e){var a=e.title;return r.a.createElement("div",null,r.a.createElement("h2",{className:g.a.title},a))},v=t(7),E=t.n(v),N=t(67),F=t.n(N),x=/\D/g,y=function(e){var a=e.replace(x,""),t="";["7","8","9"].indexOf(a[0])>-1?("9"===a[0]&&(t="+7"+a),t=("8"===a[0]?"8":"+7")+" ",a.length>1&&(t+="("+a.substring(1,4)),a.length>=5&&(t+=") "+a.substring(4,7)),a.length>=8&&(t+="-"+a.substring(7,9)),a.length>=10&&(t+="-"+a.substring(9,11))):a[0]&&(t="+"+a.substring(0,16));return t},k=function(e){var a=e.setStatus,t=Object(n.useState)(!1),s=Object(o.a)(t,2),l=s[0],c=s[1],i=Object(u.a)({initialValues:{sender:"",email:"",phone:"",birthday:"",textMessage:""},validate:function(e){var a={};return e.sender?/^([a-zA-Z]+){3,30}\s([a-zA-Z]+){3,30}$/gm.test(e.sender)||(a.sender="Invalid name"):a.sender="Required",e.phone||(a.phone="Required"),e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(a.email="Invalid email address"):a.email="Required",e.birthday||(a.birthday="Required"),e.textMessage?e.textMessage.length<10?a.textMessage="The message length is less than 10 characters":e.textMessage.length>300&&(a.textMessage="Long message! Use less than 300 characters"):a.textMessage="Required",a},onSubmit:function(e){console.log(JSON.stringify(e,null,2)),c(!0),F.a.post("https://gmail-smtp-nodejs.herokuapp.com/send-message",e).then((function(e){a(e.data),c(!1)})),i.resetForm()}});return r.a.createElement("section",{id:"contacts",className:E.a.contactsBlock},r.a.createElement("div",{className:E.a.container},r.a.createElement(f,{title:"get in touch"}),r.a.createElement("div",{className:E.a.inputField},r.a.createElement("div",{className:E.a.col_8},r.a.createElement("form",{onSubmit:i.handleSubmit,className:E.a.form,noValidate:!0},r.a.createElement("div",{className:E.a.formRow},r.a.createElement("div",{className:E.a.col_6},r.a.createElement("div",{className:E.a.formGroup},r.a.createElement("input",{id:"sender",type:"text",name:"sender",placeholder:"First name / Last name",onChange:i.handleChange,value:i.values.sender.toUpperCase(),className:E.a.formInput}),i.touched.sender&&i.errors.sender?r.a.createElement("div",{className:E.a.errorMessage},i.errors.sender):null,r.a.createElement("input",{id:"phone",type:"tel",name:"phone",placeholder:"+7(999)999-99-99",onChange:i.handleChange,value:y(i.values.phone),className:E.a.formInput}),i.touched.phone&&i.errors.phone?r.a.createElement("div",{style:{top:"145px"},className:E.a.errorMessage},i.errors.phone):null)),r.a.createElement("div",{className:E.a.col_6},r.a.createElement("div",{className:E.a.formGroup},r.a.createElement("input",{id:"email",type:"email",name:"email",placeholder:"Email",onChange:i.handleChange,value:i.values.email,className:E.a.formInput}),i.touched.email&&i.errors.email?r.a.createElement("div",{className:E.a.errorMessage},i.errors.email):null,r.a.createElement("input",{id:"birthday",type:"date",name:"birthday",placeholder:"Birthday",className:E.a.formInput,onChange:i.handleChange,value:i.values.birthday}),i.touched.birthday&&i.errors.birthday?r.a.createElement("div",{style:{top:"145px"},className:E.a.errorMessage},i.errors.birthday):null)),r.a.createElement("div",{className:E.a.col_12},r.a.createElement("div",{className:E.a.formGroup},r.a.createElement("textarea",{id:"textMessage",name:"textMessage",placeholder:"Your message",className:E.a.formInput,onChange:i.handleChange,value:i.values.textMessage,maxLength:301}),i.touched.textMessage&&i.errors.textMessage?r.a.createElement("div",{className:E.a.errorMessage},i.errors.textMessage):null)),r.a.createElement("div",{className:E.a.col_12},r.a.createElement(p,{disabled:l}))))))))},M=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],s=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement(d,{status:t,setStatus:s}),r.a.createElement(k,{setStatus:s}))};l.a.render(r.a.createElement(M,null),document.getElementById("root"))},39:function(e,a,t){e.exports={centeredButton:"Button_centeredButton__360ia",btn:"Button_btn__3Pqr-",btn_disabled:"Button_btn_disabled__bCZc6",btnDisabled:"Button_btnDisabled__2NU51"}},66:function(e,a,t){e.exports={title:"Title_title__26nXl"}},7:function(e,a,t){e.exports={contactsBlock:"FeedbackForm_contactsBlock__2tl6I",container:"FeedbackForm_container__6JxnE",inputField:"FeedbackForm_inputField__2Mk2w",col_8:"FeedbackForm_col_8__cHGES",form:"FeedbackForm_form__1S4j_",formRow:"FeedbackForm_formRow__3nQmE",col_6:"FeedbackForm_col_6__LV_ov",formGroup:"FeedbackForm_formGroup__6Wy_T",formInput:"FeedbackForm_formInput__42uNT",errorMessage:"FeedbackForm_errorMessage__onhlS",col_12:"FeedbackForm_col_12__2c02W"}},74:function(e,a,t){e.exports=t(108)},81:function(e,a,t){},82:function(e,a,t){}},[[74,1,2]]]);
//# sourceMappingURL=main.1c3c31b5.chunk.js.map