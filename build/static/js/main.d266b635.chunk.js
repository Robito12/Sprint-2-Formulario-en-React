(this["webpackJsonpvalidacion-formulario"]=this["webpackJsonpvalidacion-formulario"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),r=n.n(o),i=n(16),l=n.n(i),c=n(5),d=n(3),u=n(4),s=n(9);function p(){var e=Object(d.a)(["\n\theight: 45px;\n\tline-height: 45px;\n\tbackground: #F66060;\n\tpadding: 0px 15px;\n\tborder-radius: 3px;\n\tgrid-column: span 2;\n\tp {\n\t\tmargin: 0;\n\t} \n\tb {\n\t\tmargin-left: 10px;\n\t}\n"]);return p=function(){return e},e}function b(){var e=Object(d.a)(["\n\tfont-size: 14px;\n\tcolor: ",";\n"]);return b=function(){return e},e}function m(){var e=Object(d.a)(["\n\theight: 45px;\n\tline-height: 45px;\n\twidth: 30%;\n\tbackground: #000;\n\tcolor: #fff;\n\tfont-weight: bold;\n\tborder: none;\n\tborder-radius: 3px;\n\tcursor: pointer;\n\ttransition: .1s ease all;\n\n\t&:hover {\n\t\tbox-shadow: 3px 0px 30px rgba(163,163,163, 1);\n\t}\n"]);return m=function(){return e},e}function j(){var e=Object(d.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgrid-column: span 2;\n\n\t@media (max-width: 800px){\n\t\tgrid-column: span 1;\n\t}\n"]);return j=function(){return e},e}function x(){var e=Object(d.a)(["\n\tgrid-column: span 2;\n\n\tinput {\n\t\tmargin-right: 10px;\n\t}\n\n\t@media (max-width: 800px){\n\t\tgrid-column: span 1;\n\t}\n"]);return x=function(){return e},e}function O(){var e=Object(d.a)(["\n\t\topacity: 1;\n\t\tcolor: ",";\n\t"]);return O=function(){return e},e}function v(){var e=Object(d.a)(["\n\t\topacity: 1;\n\t\tcolor: ",";\n\t"]);return v=function(){return e},e}function f(){var e=Object(d.a)(["\n\tposition: absolute;\n\tright: 10px;\n\tbottom: 14px;\n\tz-index: 100;\n\tfont-size: 16px;\n\topacity: 0;\n\n\t","\n\n\t","\n"]);return f=function(){return e},e}function g(){var e=Object(d.a)(["\n\t\tdisplay: block;\n\t"]);return g=function(){return e},e}function h(){var e=Object(d.a)(["\n\t\tdisplay: none;\n\t"]);return h=function(){return e},e}function E(){var e=Object(d.a)(["\n\tfont-size: 12px;\n\tmargin-bottom: 0;\n\tcolor: ",";\n\tdisplay: none;\n\n\t","\n\n\t","\n"]);return E=function(){return e},e}function y(){var e=Object(d.a)(["\n\t\tborder: 3px solid "," !important;\n\t"]);return y=function(){return e},e}function S(){var e=Object(d.a)(["\n\t\tborder: 3px solid transparent;\n\t"]);return S=function(){return e},e}function R(){var e=Object(d.a)(["\n\twidth: 100%;\n\tbackground: #fff;\n\tborder-radius: 3px;\n\theight: 45px;\n\tline-height: 45px;\n\tpadding: 0 40px 0 10px;\n\ttransition: .3s ease all;\n\tborder: 3px solid transparent;\n\n\t&:focus {\n\t\tborder: 3px solid ",";\n\t\toutline: none;\n\t\tbox-shadow: 3px 0px 30px rgba(163,163,163, 0.4);\n\t}\n\n\t","\n\n\t","\n"]);return R=function(){return e},e}function z(){var e=Object(d.a)(["\n\tposition: relative;\n\tz-index: 90;\n"]);return z=function(){return e},e}function A(){var e=Object(d.a)(["\n\t\tcolor: ",";\n\t"]);return A=function(){return e},e}function Z(){var e=Object(d.a)(["\n\tdisplay: block;\n\tfont-weight: 700;\n\tpadding: 10px;\n\tmin-height: 40px;\n\tcursor: pointer;\n\n\t","\n"]);return Z=function(){return e},e}function $(){var e=Object(d.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgap: 20px;\n\n\t@media (max-width: 800px){\n\t\tgrid-template-columns: 1fr;\n\t}\n"]);return $=function(){return e},e}var w="#0075FF",k="#bb2929",D="#1ed12d",C=u.b.form($()),L=u.b.label(Z(),(function(e){return"false"===e.valido&&Object(u.a)(A(),k)})),F=u.b.div(z()),N=u.b.input(R(),w,(function(e){return"true"===e.valido&&Object(u.a)(S())}),(function(e){return"false"===e.valido&&Object(u.a)(y(),k)})),I=u.b.p(E(),k,(function(e){return"true"===e.valido&&Object(u.a)(h())}),(function(e){return"false"===e.valido&&Object(u.a)(g())})),T=Object(u.b)(s.a)(f(),(function(e){return"false"===e.valido&&Object(u.a)(v(),k)}),(function(e){return"true"===e.valido&&Object(u.a)(O(),D)})),B=u.b.div(x()),J=u.b.div(j()),P=u.b.button(m()),H=u.b.p(b(),D),K=u.b.div(p()),M=n(7),U=n(6),_=function(e){var t=e.estado,n=e.cambiarEstado,o=e.tipo,r=e.label,i=e.placeholder,l=e.name,c=e.leyendaError,d=e.expresionRegular,u=e.funcion,s=function(){d&&(d.test(t.campo)?n(Object(U.a)(Object(U.a)({},t),{},{valido:"true"})):n(Object(U.a)(Object(U.a)({},t),{},{valido:"false"}))),u&&u()};return Object(a.jsxs)("div",{children:[Object(a.jsx)(L,{htmlFor:l,valido:t.valido,children:r}),Object(a.jsxs)(F,{children:[Object(a.jsx)(N,{type:o,placeholder:i,id:l,value:t.campo,onChange:function(e){n(Object(U.a)(Object(U.a)({},t),{},{campo:e.target.value}))},onKeyUp:s,onBlur:s,valido:t.valido}),Object(a.jsx)(T,{icon:"true"===t.valido?M.a:M.c,valido:t.valido})]}),Object(a.jsx)(I,{valido:t.valido,children:c})]})},q=function(){var e=Object(o.useState)({campo:"",valido:null}),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)({campo:"",valido:null}),l=Object(c.a)(i,2),d=l[0],u=l[1],p=Object(o.useState)({campo:"",valido:null}),b=Object(c.a)(p,2),m=b[0],j=b[1],x=Object(o.useState)({campo:"",valido:null}),O=Object(c.a)(x,2),v=O[0],f=O[1],g=Object(o.useState)({campo:"",valido:null}),h=Object(c.a)(g,2),E=h[0],y=h[1],S=Object(o.useState)({campo:"",valido:null}),R=Object(c.a)(S,2),z=R[0],A=R[1],Z=Object(o.useState)({campo:"",valido:null}),$=Object(c.a)(Z,2),w=$[0],k=$[1],D=Object(o.useState)({campo:"",valido:null}),F=Object(c.a)(D,2),N=F[0],I=F[1],T=Object(o.useState)({campo:"",valido:null}),U=Object(c.a)(T,2),q=U[0],G=U[1],Q=Object(o.useState)({campo:"",valido:null}),V=Object(c.a)(Q,2),W=V[0],X=V[1],Y=Object(o.useState)({campo:"",valido:null}),ee=Object(c.a)(Y,2),te=ee[0],ne=ee[1],ae=Object(o.useState)({campo:"",valido:null}),oe=Object(c.a)(ae,2),re=oe[0],ie=oe[1],le=Object(o.useState)({campo:"",valido:null}),ce=Object(c.a)(le,2),de=ce[0],ue=ce[1],se=Object(o.useState)({campo:"",valido:null}),pe=Object(c.a)(se,2),be=pe[0],me=pe[1],je=Object(o.useState)({campo:"",valido:null}),xe=Object(c.a)(je,2),Oe=xe[0],ve=xe[1],fe=Object(o.useState)({campo:"",valido:null}),ge=Object(c.a)(fe,2),he=ge[0],Ee=ge[1],ye=Object(o.useState)(!1),Se=Object(c.a)(ye,2),Re=Se[0],ze=Se[1],Ae=Object(o.useState)(null),Ze=Object(c.a)(Ae,2),$e=Ze[0],we=Ze[1],ke={nombre:/^[a-zA-Z\xc0-\xff\s]{1,40}$/,apellido:/^[a-zA-Z\xc0-\xff\s]{1,40}$/,numeroidentificacion:/^\d{7,14}$/,correo:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,telefono:/^\d{7,14}$/,tipoencomienda:/^[a-zA-Z\xc0-\xff\s]{1,40}$/,direccionrecogida:/^[a-zA-Z\xc0-\xff\s]{1,40}/,departamento:/^[a-zA-Z\xc0-\xff\s]{1,40}$/,ciudad:/^[a-zA-Z\xc0-\xff\s]{1,40}$/,fechayhora:/^[a-zA-Z\xc0-\xff\s]{1,40}/,longitud:/^\d{1,3}$/,peso:/^\d{1,3}$/,direccionentrega:/^[a-zA-Z\xc0-\xff\s]{1,40}/,ciudadentrega:/^[a-zA-Z\xc0-\xff\s]{1,40}$/,datosdestinatario:/^[a-zA-Z\xc0-\xff\s]{1,40}$/,identificaciondestinatario:/^\d{7,14}$/};return Object(a.jsx)("main",{children:Object(a.jsxs)(C,{action:"",onSubmit:function(e){e.preventDefault(),"true"===n.valido&&"true"===d.valido&&"true"===m&&"true"===v.valido&&"true"===E.valido&&"true"===z.valido&&"true"===w.valido&&"true"===N.valido&&"true"===q.valido&&"true"===W.valido&&"true"===te.valido&&"true"===re.valido&&"true"===de.valido&&"true"===be.valido&&"true"===Oe.valido&&"true"===he.valido&&Re?(we(!0),r({campo:"",valido:null}),u({campo:"",valido:null}),j({campo:"",valido:null}),f({campo:"",valido:null}),y({campo:"",valido:null}),A({campo:"",valido:null}),k({campo:"",valido:null}),I({campo:"",valido:null}),G({campo:"",valido:null}),X({campo:"",valido:null}),ne({campo:"",valido:null}),ie({campo:"",valido:null}),ue({campo:"",valido:null}),me({campo:"",valido:null}),ve({campo:"",valido:null}),Ee({campo:"",valido:null})):we(!1)},children:[Object(a.jsx)(_,{estado:n,cambiarEstado:r,tipo:"text",label:"Nombre",placeholder:"",name:"usuario",leyendaError:"El nombre solo puede contener letras y espacios.",expresionRegular:ke.nombre}),Object(a.jsx)(_,{estado:d,cambiarEstado:u,tipo:"text",label:"Apellido",placeholder:"",name:"apellido",leyendaError:"El apellido solo puede contener letras y espacios.",expresionRegular:ke.apellido}),Object(a.jsx)(_,{estado:m,cambiarEstado:j,tipo:"text",label:"Numero de Identificacion",placeholder:"",name:"Numero de Identificacio",leyendaError:"El numero de identificacion solo puede contener numeros .",expresionRegular:ke.numeroidentificacion}),Object(a.jsx)(_,{estado:v,cambiarEstado:f,tipo:"email",label:"Correo Electr\xf3nico",placeholder:"",name:"correo",leyendaError:"El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.",expresionRegular:ke.correo}),Object(a.jsx)(_,{estado:E,cambiarEstado:y,tipo:"text",label:"Tel\xe9fono",placeholder:"",name:"telefono",leyendaError:"El telefono solo puede contener numeros y el maximo son 14 d\xedgitos.",expresionRegular:ke.telefono}),Object(a.jsx)(_,{estado:z,cambiarEstado:A,tipo:"text",label:"Tipo de Encomienda",placeholder:"",name:"tipoencomienda",leyendaError:"",expresionRegular:ke.tipoencomienda}),Object(a.jsx)(_,{estado:w,cambiarEstado:k,tipo:"text",label:"Direcci\xf3n de Recogida",placeholder:"",name:"Direcci\xf3nRecogida",leyendaError:"La direccion e recogida solo puede contener letras, numeros, puntos, guiones y guion bajo.",expresionRegular:ke.direccionrecogida}),Object(a.jsx)(_,{estado:N,cambiarEstado:I,tipo:"text",label:"Departamento",placeholder:"",name:"Departamento",leyendaError:"Los departamento solo puede contener letras.",expresionRegular:ke.departamento}),Object(a.jsx)(_,{estado:q,cambiarEstado:G,tipo:"text",label:"Ciudad",placeholder:"",name:"Ciudad",leyendaError:"La ciudad solo puede contener letras.",expresionRegular:ke.ciudad}),Object(a.jsx)(_,{estado:W,cambiarEstado:X,tipo:"text",label:"Fecha y Hora",placeholder:"",name:"",leyendaError:"La fecha y hora solo puede contener numeros.",expresionRegular:ke.fechayhora}),Object(a.jsx)(_,{estado:te,cambiarEstado:ne,tipo:"text",label:"Longitud",placeholder:"",name:"",leyendaError:"La longitud solo puede contener numeros.",expresionRegular:ke.longitud}),Object(a.jsx)(_,{estado:re,cambiarEstado:ie,tipo:"text",label:"Peso",placeholder:"",name:"",leyendaError:"El peso solo puede contener numeros.",expresionRegular:ke.peso}),Object(a.jsx)(_,{estado:de,cambiarEstado:ue,tipo:"text",label:"Direcci\xf3n de Entrega",placeholder:"",name:"Direcci\xf3nEntrega",leyendaError:"La direccion de entrega solo puede contener letras, numeros, puntos, guiones y guion bajo.",expresionRegular:ke.direccionentrega}),Object(a.jsx)(_,{estado:be,cambiarEstado:me,tipo:"text",label:"Ciudad de Entrega",placeholder:"",name:"CiudadEntrega",leyendaError:"La ciudad solo puede contener letras.",expresionRegular:ke.ciudadentrega}),Object(a.jsx)(_,{estado:Oe,cambiarEstado:ve,tipo:"text",label:"Nombres y Apellidos del Destinatario",placeholder:"",name:"datosdestinatario",leyendaError:"los datos del destinatario solo puede contener letras y espacios.",expresionRegular:ke.datosdestinatario}),Object(a.jsx)(_,{estado:he,cambiarEstado:Ee,tipo:"text",label:"Numero de Identificacion del Destinatario",placeholder:"",name:"Numero de Identificacion",leyendaError:"El numero de identificacion solo puede contener numeros.",expresionRegular:ke.identificaciondestinatario}),Object(a.jsx)(B,{children:Object(a.jsxs)(L,{children:[Object(a.jsx)("input",{type:"checkbox",name:"terminos",id:"terminos",checked:Re,onChange:function(e){ze(e.target.checked)}}),"Acepto los Terminos y Condiciones"]})}),!1===$e&&Object(a.jsx)(K,{children:Object(a.jsxs)("p",{children:[Object(a.jsx)(s.a,{icon:M.b}),Object(a.jsx)("b",{children:"Error:"})," Por favor rellena el formulario correctamente."]})}),Object(a.jsxs)(J,{children:[Object(a.jsx)(P,{type:"submit",children:"Enviar"}),!0===$e&&Object(a.jsx)(H,{children:"Formulario enviado exitosamente!"})]})]})})};n(30);l.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(q,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d266b635.chunk.js.map