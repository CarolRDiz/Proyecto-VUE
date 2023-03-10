import{_ as f,M as w,m as v,a as b,r as y,o as i,c as r,h as u,b as e,F as M,g as A,i as h,j as l,v as n,t as c,e as g,w as _}from"./index-a9710213.js";const C={name:"Login",components:{Modal:w},data(){return{isLogin:!0,loading:!1,name:"",email:null,password:null,repeatpassword:"",modalActive:!1,errors:[],showMessage:!1,modalActiveRegister:!1}},computed:{...v("user",{user:a=>a.userData,message:a=>a.message})},methods:{...b("user",{fetchUser:"fetchUser",doLogin:"doLogin",logout:"logout",doRegister:"doRegister",resetMessage:"resetMessage"}),async doLoginAndMessage(){this.loading=!0,await this.doLogin({inputEmail:this.email,inputPassword:this.password}),this.loading=!1,this.user?this.modalActive=!0:(this.showMessage=!0,setTimeout(()=>this.showMessage=!1,5e3))},async doRegisterAndMessage(){this.loading=!0,await this.doRegister({inputName:this.name,inputEmail:this.email,inputPassword:this.password}),this.loading=!1,this.message=="Usuario creado"?(this.modalActiveRegister=!0,this.isLogin=!0):(this.showMessage=!0,setTimeout(()=>this.showMessage=!1,5e3))},resetData(){this.email=this.password=""},toggleModal(){this.modalActive=!this.modalActive},toggleModalRegister(){this.modalActiveRegister=!this.modalActiveRegister},checkForm(a){var s="^[A-ZÑÁÉÍÓÚ]+[A-ZÑa-zñáéíóúÁÉÍÓÚ ]*$",m='^(([^<>()[].,;:s@"]+(.[^<>()[].,;:s@"]+)*)|(".+"))@(([^<>()[].,;:s@"]+.)+[^<>()[].,;:s@"]{2,})$';return this.errors=[],this.name.match(s)==null&&this.errors.push("El nombre no es válido. Solo se permiten letras y espacios."),this.email.match(m)==null&&this.errors.push("El email no es válido."),this.name||this.errors.push("El nombre es obligatorio."),this.email||this.errors.push("El email es obligatorio."),this.password||this.errors.push("La contraseña es obligatoria."),this.repeatpassword||this.errors.push("La confirmación de la contraseña es obligatoria."),this.password!=this.repetpassword&&this.errors.push("La confirmación de la contraseña no coincide con la contraseña propuesta."),!this.errors.length}}},R={class:"main__auth"},L={key:0},k={key:1},E={key:0},V={key:1},U={key:2},x=e("b",null,"Por favor, corrija el(los) siguiente(s) error(es):",-1),N={class:"auth__fieldset"},q=e("legend",null,"Datos personales",-1),D=e("label",{for:"email"},"Correo electrónico:",-1),S=e("label",{for:"password"},"Contraseña:",-1),B=e("button",{class:"form__submit",type:"submit"},"Iniciar sesión",-1),F={class:"auth__fieldset"},I=e("legend",null,"Datos personales",-1),P=e("label",{for:"name"},"Nombre:",-1),T=e("label",{for:"email"},"Correo electrónico:",-1),j=e("label",{for:"password"},"Contraseña:",-1),Z=e("label",{for:"repeatpassword"},"Repite la contraseña:",-1),z=e("input",{class:"form__submit",type:"submit",value:"Registrarse"},null,-1),H={key:5,class:"auth__message"},G={class:"modal--login"},J=e("h1",null,"Has iniciado sesion",-1),K=e("div",{class:"modal--login"},[e("h1",null,"El usuario ha sido creado con éxito")],-1);function O(a,s,m,Q,o,d){const p=y("Modal");return i(),r("section",R,[o.loading?(i(),r("div",L,"Cargando...")):(i(),r("div",k,[o.isLogin?(i(),r("h1",E,"Iniciar sesión")):u("",!0),o.isLogin?u("",!0):(i(),r("h1",V,"Registrarse")),o.errors.length?(i(),r("p",U,[x,e("ul",null,[(i(!0),r(M,null,A(o.errors,t=>(i(),r("li",null,c(t),1))),256))])])):u("",!0),o.isLogin?(i(),r("form",{key:3,class:"auth__form",onSubmit:s[2]||(s[2]=h(t=>d.doLoginAndMessage(),["prevent"]))},[e("fieldset",N,[q,D,l(e("input",{class:"form__input",placeholder:"Correo Electrónico",name:"email","onUpdate:modelValue":s[0]||(s[0]=t=>o.email=t),type:"email",required:""},null,512),[[n,o.email]]),S,l(e("input",{class:"form__input",placeholder:"Contraseña",name:"password","onUpdate:modelValue":s[1]||(s[1]=t=>o.password=t),type:"password",required:""},null,512),[[n,o.password]])]),B],32)):(i(),r("form",{key:4,class:"auth__form",onSubmit:s[7]||(s[7]=h(t=>d.doRegisterAndMessage(),["prevent"]))},[e("fieldset",F,[I,P,l(e("input",{class:"form__input",placeholder:"Nombre",name:"name","onUpdate:modelValue":s[3]||(s[3]=t=>o.name=t),type:"text",required:""},null,512),[[n,o.name]]),T,l(e("input",{class:"form__input",placeholder:"Correo Electrónico",name:"email","onUpdate:modelValue":s[4]||(s[4]=t=>o.email=t),type:"email",required:""},null,512),[[n,o.email]]),j,l(e("input",{class:"form__input",placeholder:"Contraseña",name:"password","onUpdate:modelValue":s[5]||(s[5]=t=>o.password=t),type:"password",required:""},null,512),[[n,o.password]]),Z,l(e("input",{class:"form__input",placeholder:"Repetir contraseña",name:"repeatpassword","onUpdate:modelValue":s[6]||(s[6]=t=>o.repeatpassword=t),type:"password",required:""},null,512),[[n,o.repeatpassword]])]),z],32)),o.showMessage?(i(),r("span",H,c(a.message),1)):u("",!0),o.isLogin?(i(),r("button",{key:6,class:"auth__change",onClick:s[8]||(s[8]=t=>o.isLogin=!1)},"Registrarse")):(i(),r("button",{key:7,class:"auth__change",onClick:s[9]||(s[9]=t=>o.isLogin=!0)},"Iniciar sesión"))])),g(p,{notClose:!0,onClose:d.toggleModal,modalActive:o.modalActive},{default:_(()=>[e("div",G,[J,e("a",{class:"modal__link",onClick:s[10]||(s[10]=t=>a.$router.back())},"Volver")])]),_:1},8,["onClose","modalActive"]),g(p,{notClose:!1,onClose:d.toggleModalRegister,modalActive:o.modalActiveRegister},{default:_(()=>[K]),_:1},8,["onClose","modalActive"])])}const X=f(C,[["render",O]]);export{X as default};
